<!-- +layout.svelte -->
<script>
  import MainMenu from "../components/MainMenu.svelte";
  import { Router } from "svelte-routing";
</script>

<main>
  <MainMenu />
  <Router>
    <slot />
  </Router>
</main>
