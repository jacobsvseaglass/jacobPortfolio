<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let isMobile = false;
    let dropdownOpen = false;
    let dropdown: HTMLElement | null = null; // Declare the dropdown variable

  
    // Detect mobile device based on viewport width
    onMount(() => {
      function checkMobile() {
        isMobile = window.innerWidth <= 768;
      }
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    });

    function closeDropdown() {
        dropdownOpen = false;
    }
  </script>
  
  <header>
    <div class="name-job-title">
      <h1>Jacob Burke</h1>
      <h2>Software Engineer</h2>
    </div>
  
    <nav class="nav-padding">
        <ul>
          <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/" on:click={closeDropdown}>Projects</a>
            <ul class="dropdown" bind:this={dropdown}>
              <li><a href="/#professional_projects" on:click={closeDropdown}>Professional Projects</a></li>
              <li><a href="/#academic_projects" on:click={closeDropdown}>Academic Projects</a></li>
              <li><a href="/#game_jams" on:click={closeDropdown}>Game Jams</a></li>
            </ul>
          </li>
          <li><a href="/#contact" on:click={closeDropdown}>Contact</a></li>
          <li>
            {#if isMobile}
              <a href="/pdf/JacobABurke_Resume_02242025.pdf" target="_blank" rel="noopener noreferrer" on:click={closeDropdown}>Resume</a>
            {:else}
              <a href="/resume" on:click={closeDropdown}>Resume</a>
            {/if}
          </li>
        </ul>
      </nav>
  </header>
  
  <main>
      <!-- Your main content goes here -->
  </main>
  
  <style>
      .nav-padding {
          padding-right: 20px; /* Adjust the value as needed */
      }
      header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1000; /* Ensure the header stays on top of other content */
      }
  
      .name-job-title {
          display: flex;
          flex-direction: column;
      }
  
      h1 {
          margin: 0;
          font-size: 1.5em;
          text-align: center;
      }
  
      h2 {
          margin: 0;
          font-size: 1em;
          color: gray;
          text-align: center;
      }
  
      nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
      }
  
      nav ul li {
          position: relative;
          margin: 0 1em;
      }
  
      nav ul li a {
          text-decoration: none;
          color: #ffffff;
          font-weight: bold;
      }
  
      nav ul li .dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0; /* Removed extra distance between projects and dropdown */
          background-color: #fff;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          border-radius: 8px; /* Rounded corners */
          z-index: 1001;
      }
  
      nav ul li:hover .dropdown {
          display: block;
          cursor: pointer;
      }
  
      nav ul li .dropdown li {
          margin: 0;
      }
  
      nav ul li .dropdown li a {
          display: block;
          padding: 0.5em 1em;
          white-space: nowrap;
          color: #333; /* Darker text color */
          text-decoration: none;
          border-radius: 8px; /* Ensure the highlighting matches the rounded corners */
      }
  
      nav ul li .dropdown li a:hover {
          background-color: #f2f2f2; /* Light gray hover effect */
          cursor: pointer;
      }
  
      main {
          margin-top: 5em; /* Adjust this value according to the header height */
      }
  
      /* Mobile adjustments: Make header vertically smaller on small screens */
      @media (max-width: 600px) {
        header {
          padding: 0.5em;
        }
        .name-job-title h1 {
          font-size: 1.2em;
        }
        .name-job-title h2 {
          font-size: 0.8em;
        }
        nav ul li {
          margin: 0 0.5em;
        }
      }
  </style>
  