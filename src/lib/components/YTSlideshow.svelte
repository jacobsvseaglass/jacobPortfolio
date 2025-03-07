<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let youtubeUrls: string[] = []; // Changed to array
    export let captions: string[] = []; // Array of captions for each video
    const dispatch = createEventDispatcher();
    let currentVideoIndex = 0;

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % youtubeUrls.length;
    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + youtubeUrls.length) % youtubeUrls.length;
    }

    function goToVideo(index: number) {
        currentVideoIndex = index;
    }
</script>

<div class="carousel-container">
    <div class="carousel-content">
        {#if youtubeUrls.length > 1}
        <button class="navigation-arrow left-arrow" on:click={prevVideo}>&larr;</button>
        {/if}
        <div class="iframe-container">
            <iframe src={youtubeUrls[currentVideoIndex]} frameborder="0" allowfullscreen></iframe>
        </div>
        {#if youtubeUrls.length > 1}
        <button class="navigation-arrow right-arrow" on:click={nextVideo}>&rarr;</button>
        {/if}
    </div>
    {#if captions.length > 1}
    <div class="caption">
        {captions[currentVideoIndex]}
    </div>
    {/if}
    {#if youtubeUrls.length > 1}
    <div class="thumbnail-container">
        {#each youtubeUrls as url, index}
        <img src={url.replace("embed/", "vi/").replace("www", "img") + "/0.jpg"} class="thumbnail {currentVideoIndex === index ? 'active-thumbnail' : ''}" on:click={() => goToVideo(index)} alt="thumbnail">
        {/each}
    </div>
    {/if}
</div>


<style>
.carousel-container {
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: auto;
    background-color: var(--color-bg-1);
}
.carousel-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: var(--color-bg-1);
    position: relative;
}
.iframe-container {
    width: 100%;
    max-width: 1200px; /* Optional: Set a max width for larger screens */
    aspect-ratio: 16 / 9;
    position: relative;
}
iframe {
    width: 100%;
    height: 100%;
    border: none;
}
.navigation-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    z-index: 10; /* Ensure arrows stay on top */
}
.left-arrow {
    left: 10px;
}
.right-arrow {
    right: 10px;
}
.caption {
    text-align: center;
    padding: 10px;
    background-color: var(--color-bg-1);
    font-size: 1rem;
    color: var(--color-text);
}
.thumbnail-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: var(--color-bg-1);
}
.thumbnail {
    width: 90px;
    height: 67.5px;
    margin: 0 5px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 5px;
}
.active-thumbnail {
    border-color: #ffffff;
}
@media (max-width: 600px) {
    .iframe-container {
        width: 100%;
    }
}

</style>
