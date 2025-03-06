<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import YTSlideshow from './YTSlideshow.svelte';
    export let youtubeUrls: string[] = []; // Changed to array
    export let captions: string[] = ["This is a nice caption", "Another nice caption"]; // Array of captions for each video
    export let modalText: string = '';
    export let modalTitle: string = '';
    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('close');
    }
</script>

<div class="modal-overlay" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
        <div class="modal-header">
            <h1>{modalTitle}</h1>
        </div>
        <button class="close-button" on:click={closeModal}>×</button>
        <YTSlideshow {youtubeUrls} {captions} />
        <div class="modal-text">
            <div class="modal-info">
                <h4>5 People    |    Unity Engine 2021.3.17    |    AI Tools Programmer & VR Developer</h4>
            </div>
            {@html modalText}
        </div>
    </div>
</div>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-bg-2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .modal-content {
        background-color: var(--color-bg-1);
        padding: 1rem;
        border-radius: 8px;
        max-width: 1000px;
        width: 80%;
        position: relative;
        overflow-y: auto;
        max-height: 90vh;
    }
    .modal-header {
        text-align: center;
        margin-bottom: 1rem;
    }
    .close-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
    .modal-text {
        font-size: 1rem;
        color: var(--color-text);
    }
    .modal-info {
        text-align: center;
    }
</style>
