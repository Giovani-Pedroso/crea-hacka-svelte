<script>
  export let showMenu=false

  const toggleMenu = () =>{
    console.log("sho")
    showMenu = !showMenu
  }
</script>

<div class="navbar bg-primary text-secondary">
  <div class="flex-none">
    <button on:click={toggleMenu} class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">CREA Conecta</a>
  </div>
  <div class="flex-none">
  <div class="form-control">
      <input type="text" placeholder="Pesquisar" class="input input-bordered w-24 mr-4 md:w-auto" />
    </div>
    </div>
</div>
