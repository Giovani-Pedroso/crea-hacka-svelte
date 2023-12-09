<script>
  import Cadastro from "./components/cadastro.svelte"
  import Atos from "./components/atos.svelte"
</script>
<div class="w-full ">
  <div role="tablist" class="tabs tabs-lifted ">
    <input type="radio" name="my_tabs_2" role="tab" class="tab " aria-label="Cadastro Geral" checked />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <Cadastro />
    </div>


    <input type="radio" name="my_tabs_2" role="tab" class="tab " aria-label="Atos regulatórios"/>
    <div role="tabpanel" class="tab-content w-screen   p-6">
      <Atos/>
    </div>
  </div>
</div>

