<svelte:head>
    <title>Resume</title>
    <meta name="PDF resume" content="resume" />
</svelte:head>

<div class="text-column">

	<iframe src="/pdf/JacobABurke_Resume_02242025.pdf" title="Resume PDF" width="100%" height="1200px" style="border: none;"></iframe>
    <p>
        <a href="/pdf/JacobABurke_Resume_02242025.pdf" download>
            <button>Download Resume</button>
        </a>
    </p>
</div>

<style>
	.text-column {
	  font-family: var(--font-body);
	}
  
	button {
	  padding: 10px 20px;
	  font-size: 16px;
	  background-color: var(--color-tag-0);
	  color: #fff;
	  border: none;
	  border-radius: 5px;
	  cursor: pointer;
	}
  
	button:hover {
	  background-color: var(--color-highlight-0);
	}
</style>
  