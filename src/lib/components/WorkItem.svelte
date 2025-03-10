<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    
    export let name = "Name";
    export let role = "Role";
    export let description = "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.";
    export let videoSrc = "";
    export let imageSrc = "";
    export let tags: string[] = [];
    export let visibility = "visible";
    export let modal;
  
    let showModal = false;
    let showPoster = false;
    let videoElement: HTMLVideoElement | null = null;
    let retryCount = 0;
    const maxRetries = 3;
  
    function openModal() {
      showModal = true;
      document.body.style.overflow = 'hidden'; // Hide the body scroll bar
    }
  
    function closeModal() {
      showModal = false;
      document.body.style.overflow = 'auto'; // Restore the body scroll bar
    }
  
    function handleStallOrError() {
      if (!videoElement) return;
      if (retryCount < maxRetries) {
        retryCount++;
        console.warn(`Reloading video (attempt ${retryCount}/${maxRetries})`);
        videoElement.load();
        videoElement.play().catch((err) => {
          console.error('Error replaying video:', err);
        });
      } else {
        console.error("Max retries reached. Showing the first frame instead.");
        try {
          videoElement.pause();
          videoElement.currentTime = 0;
        } catch (e) {
          console.error("Error resetting video:", e);
        }
        showPoster = true;
      }
    }
  
    // Only run this code on the client side
    onMount(() => {
      function handleVisibilityChange() {
        if (document.visibilityState === 'visible') {
          document.querySelectorAll('video').forEach(video => {
            video.load();
          });
        }
      }
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    });
  </script>
  
<!-- Work item display -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex-item" style="visibility: {visibility};" role="button" tabindex="0" on:click={openModal}>
    <span>
        <div class="card">
            {#if showPoster}
                <!-- Show poster image if video fails -->
                <img src={imageSrc} alt="Video first frame" style="width:100%; border-radius: 12px 12px 0 0;">
            {:else}
                <video bind:this={videoElement}
                    on:stalled={handleStallOrError}
                    on:error={handleStallOrError}
                    autoplay playsinline muted loop preload="auto"
                    style="width:100%; border-radius: 12px 12px 0 0;" height="auto">
                    <source src={videoSrc} type="video/webm">
                    This browser does not support videos
                </video>
            {/if}
            <div class="rounded-containers">
                {#each tags as tag}
                    <div class="rounded-container">{tag}</div>
                {/each}
            </div>
            <div class="content">
                <h3>{name}</h3>
                <p class="opacity">{role}</p>
                <p>{description}</p>
            </div>
        </div>
    </span>
</div>

  
<!-- Conditionally render the modal -->
{#if showModal}
  <Modal buttons={modal.buttons} youtubeUrls={modal.videoSrc} modalText={modal.text} modalTitle={modal.title} modalAbout={modal.about} modalInfo={modal.info} on:close={closeModal} />
{/if}

<style>
    .content {
        padding: 0 15px 5px 15px;
        margin: auto;
    }
    .flex-item {
    background-color: var(--color-bg-0);
    border-radius: 12px;
    flex: 1 1 calc(50% - 16px);
    box-sizing: border-box;
    margin-bottom: 16px;
    min-width: 350px;
    max-width: 600px;
    position: relative;
    overflow: hidden;
    }
    .flex-item[style*="visibility: hidden"] {
        height: 0;
        margin: 0; 
        padding: 0; 
        overflow: hidden; 
    }
    .flex-item:hover .content h3 {
    color: var(--color-highlight-0);
    transition: color 0.3s ease;
    }


    @media (max-width: 600px) {
        .flex-item {
            min-width: 300px; /* Adjust this value as needed */
        }
    }
    .flex-item span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }
    .flex-item:before,
    .flex-item:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: var(--color-highlight-1);
        transition: all 0.3s ease;
        z-index: 1;
    }
    .flex-item:before {
        height: 0%;
        width: 4.5px;
    }
    .flex-item:after {
        width: 0%;
        height: 4.5px;
    }
    .flex-item:hover:before {
        height: 100%;
    }
    .flex-item:hover:after {
        width: 100%;
    }
    .flex-item span:before,
    .flex-item span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: var(--color-highlight-1);
        transition: all 0.3s ease;
        z-index: 1;
    }
    .flex-item span:before {
        width: 4.5px;
        height: 0%;
    }
    .flex-item span:after {
        width: 0%;
        height: 4.5px;
    }
    .flex-item span:hover:before {
        height: 100%;
    }
    .flex-item span:hover:after {
        width: 100%;
    }


    .rounded-containers {
        background-color: var(--color-bg-0);
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        padding: 0 1em;
        margin: 0;
    }
    .rounded-container {
        background-color: var(--color-tag-0);
        padding: 0.25em 0.5em;
        font-size: 0.735em;
        border: 1px solid #333;
        border-radius: 12px;
        margin: 0.25em 0;
    }
    .opacity {
        opacity: 0.6;
    }
</style>