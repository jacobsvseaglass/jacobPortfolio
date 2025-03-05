<script lang="ts">
    import Modal from './modal.svelte';
  
    export let name = "Name";
    export let role = "Role";
    export let description = "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.";
    export let videoSrc = "src/lib/videos/bugblast_loop.mp4";
    export let imageSrc = "";
    export let tags: string[] = [];
    export let visibility = "visible";

    export let modalUrls = ["https://www.youtube.com/embed/VIDEO_ID"];
    export let modalText = "This is some additional info about the project.";
    export let modalTitle = "";
  
    let showModal = false;
  
    function openModal() {
      showModal = true;
    }
    function closeModal() {
      showModal = false;
    }
</script>
  
<!-- Work item display -->
<div class="flex-item" style="visibility: {visibility};" role="button" tabindex="0" on:click={openModal}>
    <span>
        <div class="card">
            {#if videoSrc}
                <video autoplay muted loop style="width:100%; border-radius: 12px 12px 0 0;" height="auto">
                <source src={videoSrc} type="video/mp4">
                This browser does not support videos
                </video>
            {:else}
                <img src={imageSrc} alt={name} style="width:100%">
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
  <Modal youtubeUrls={modalUrls} modalText={modalText} modalTitle={modalTitle} on:close={closeModal} />
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
        width: 3px;
    }
    .flex-item:after {
        width: 0%;
        height: 3px;
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
        width: 3px;
        height: 0%;
    }
    .flex-item span:after {
        width: 0%;
        height: 3px;
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
        font-size: 0.9em;
        border: 1px solid #333;
        border-radius: 12px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        margin: 0.25em 0;
    }
    .card {
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }
    .opacity {
        opacity: 0.6;
    }
</style>
