<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let isMobile = false;
    let showDropdown = false;
  
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
      showDropdown = false;
    }
  </script>
  
  <header>
    <div class="name-job-title">
      <h1>Jacob Burke</h1>
      <h2>Software Engineer</h2>
    </div>
  
    <nav class="nav-padding">
      <ul>
        <li
          on:mouseenter={() => showDropdown = true}
          on:mouseleave={() => showDropdown = false}
          aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a href="/">Projects</a>
          {#if showDropdown}
            <ul class="dropdown">
              <li>
                <a href="/#professional_projects" on:click={closeDropdown}>
                  Professional Projects
                </a>
              </li>
              <li>
                <a href="/#academic_projects" on:click={closeDropdown}>
                  Academic Projects
                </a>
              </li>
              <li>
                <a href="/#game_jams" on:click={closeDropdown}>
                  Game Jams
                </a>
              </li>
            </ul>
          {/if}
        </li>
        <li><a href="/#contact">Contact</a></li>
        <li>
          {#if isMobile}
            <!-- On mobile: open PDF in a new tab -->
            <a href="pdf/JacobABurke_Resume_02242025.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          {:else}
            <!-- On desktop: go to the resume page with the embedded PDF viewer -->
            <a href="/resume">Resume</a>
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
      align-items: left;
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
  
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      z-index: 1001;
      /* Ensure vertical stacking */
      display: flex;
      flex-direction: column;
    }
  
    .dropdown li a {
      display: block;
      padding: 0.5em 1em;
      white-space: nowrap;
      color: #333;
      text-decoration: none;
      border-radius: 8px;
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
  