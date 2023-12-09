<script>
  import selo from "$lib/static/selo-bronze.png";
  import Dount from "$lib/components/ui/Dount.svelte"
  import Table from "$lib/components/ui/TableDash.svelte"
</script>

<div class="min-h-screen w-full flex flex-col items-center justify-between">
  <h1 class="text-center mt-4 text-4xl b">Unida Uni</h1>
  <div class="w-full">
    <div class="flex px-[60px] justify-between items-center">
      <div>
        <img alt="selo" src={selo}>
        <p class="text-yellow-400 text-center font-bold text-4xl">Ouro</p>
      </div>
      <Dount/>
    </div>
    <div class="w-full bg-red-300">
      <Table/>
    </div>
  </div>
</div>
