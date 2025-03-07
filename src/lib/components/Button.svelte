<script>
	export let image = '';
	export let text = '';
	export let link = '#';
  </script>
  
  <style>
	.btn {
	  display: inline-flex;
	  align-items: center;
	  padding: 10px 20px;
	  border: 2px solid var(--color-tag-0);
	  background-color: var(--color-tag-0);
	  color: white;
	  border-radius: 5px;
	  text-decoration: none;
	  font-size: 16px;
	  cursor: pointer;
	  transition: background-color 0.3s, border-color 0.3s;
	}
  
	.btn:hover {
	  background-color: var(--color-highlight-0);
	  border-color: rgb(255, 255, 255);
	}
  
	.btn img {
	  max-width: 40px;
	  max-height: 40px;
	  margin-right: 10px;
	}
  
	.btn-only-image {
	  max-width: 50px;
	  max-height: 50px;
	}
  </style>
  
  {#if text}
  <a href={link} class="btn" target="_blank">
	{#if image}
	  <img src={image} alt={text} />
	{/if}
	<span>{text}</span>
  </a>
{:else}
  <a href={link} target="_blank">
	<img class="btn-only-image" src={image} alt={text || "Clickable"} />
  </a>
{/if}

  