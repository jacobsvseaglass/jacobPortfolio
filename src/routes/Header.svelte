<script lang="ts">
    import { page } from '$app/stores';
</script>

<header>
    <div class="name-job-title">
        <h1>Jacob Burke</h1>
        <h2>Software Engineer</h2>
    </div>

    <nav class="nav-padding">
        <ul>
          <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/">Projects</a>
            <ul class="dropdown">
              <li><a href="/#professional_projects">Professional Projects</a></li>
              <li><a href="/#academic_projects">Academic Projects</a></li>
              <li><a href="/#game_jams">Game Jams</a></li>
            </ul>
          </li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
</header>

<main>
    <!-- Your main content goes here -->
</main>

<style>
    .nav-padding {
        padding-right: 30px; /* Adjust the value as needed */
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
    }

    h2 {
        margin: 0;
        font-size: 1em;
        color: gray;
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
        background-color: #fff;
    }

    nav ul li:hover .dropdown {
        display: block;
    }

    nav ul li .dropdown li {
        margin: 0;
    }

    nav ul li .dropdown li a {
        display: block;
        padding: 0.5em 1em;
        white-space: nowrap;
    }

    main {
        margin-top: 5em; /* Adjust this value according to the header height */
    }
</style>
