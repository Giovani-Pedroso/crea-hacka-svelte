<script>
  import LineChart from "./components/LineChart.svelte"
  import Dount from "$lib/components/ui/Dount2.svelte"
  import Tabela from "./components/tabela.svelte"
</script>

<div class="min-h-screen w-full flex flex-col items-center justify-between">
  <h1 class="text-secondary text-[54px]">Olá Erick</h1>
  <h2 class="text-[30px]">Você tem 21 solicitações</h2>
  <div class="w-full mb-4 ">
    <div class="flex mb-4  flex-col px-[20px] justify-between items-center">
      <Dount/>
      <LineChart />
      <Tabela/>
    </div>
  </div>
</div>

<!-- <div class="min-h-screen px-[42px]"> -->
<!--   <div> -->
<!--     <Dount/> -->
<!--   </div> -->
<!-- </div> -->
