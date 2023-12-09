<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
  import Menu from "$lib/components/MenuLateral.svelte"
</script>

<Navbar />
  <div class="flex flex-row">
    <!-- <Menu/> -->
    <slot />
  </div>
<Footer/>
