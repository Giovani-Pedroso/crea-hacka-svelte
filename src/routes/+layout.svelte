<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Menu from "$lib/components/MenuLateral.svelte"
  let showMenu = false
</script>

<Navbar bind:showMenu={showMenu} />
  <div class="flex flex-row">
    {#if showMenu}
    <Menu bind:showMenu={showMenu}/>
    {/if}
    <slot />
  </div>
<Footer/>
