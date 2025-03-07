<script lang="ts">
    import ButtonComponent from './Button.svelte';
    import { createEventDispatcher } from 'svelte';
    import YTSlideshow from './YTSlideshow.svelte';
    export let youtubeUrls: string[] = []; 
    export let captions: string[] = [""];
    export let modalText: string = '';
    export let modalTitle: string = '';
    export let modalInfo: string = '';
    export let modalAbout: string = '';
    export interface Button {
        text: string;
        img: string;
        link: string;
    }
    export let buttons: Button[] = [];
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
        {#if youtubeUrls[0]}  <!-- Only show video if the first URL is non-empty -->
            <YTSlideshow {youtubeUrls} {captions} />
        {/if}
        <div class="modal-text">
            <div class="modal-info" style="padding: 25px">
                <b>{@html modalInfo}</b>
            </div>
            <!-- Always show the buttons container -->
            <div class="center-buttons">
                {#each buttons as button}
                    <ButtonComponent text={button.text} image={button.img} link={button.link} />
                {/each}
            </div>
        </div>
        <h3>About</h3>
        {@html modalAbout}
        <h3>Contributions</h3>
        {@html modalText}
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
    .center-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
</style>
