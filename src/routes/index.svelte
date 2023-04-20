<script>
	import MainMenu from "./MainMenu.svelte";
	import { Route } from "svelte-routing";
</script>

<Route path="/" let:params>
	<MainMenu />
</Route>
