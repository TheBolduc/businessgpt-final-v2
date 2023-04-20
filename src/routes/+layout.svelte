<!-- +layout.svelte -->
<script>
  import MainMenu from '../../lib/MainMenu.svelte';
  import { Router } from "svelte-routing";
</script>

<main>
  <MainMenu />
  <Router>
    <slot />
  </Router>
</main>
