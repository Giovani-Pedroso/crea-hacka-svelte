<script>
  import TabEstrutura from "./components/tabela-curricular.svelte"
  import Detalhes from "./components/detalhes-curso.svelte"
  import TabelaAtas from "./components/tabela-atas.svelte"  
  const dataCurricular =[
  {tipo:'1111',nome:'2222',carga:'qqqq',conteudo:'ffff',bibliografia:'aaa'},
  {tipo:'1111',nome:'2222',carga:'qqqq',conteudo:'ffff',bibliografia:'aaa'},
  {tipo:'1111',nome:'2222',carga:'qqqq',conteudo:'ffff',bibliografia:'aaa'},
  {tipo:'1111',nome:'2222',carga:'qqqq',conteudo:'ffff',bibliografia:'aaa'},
  {tipo:'1111',nome:'2222',carga:'qqqq',conteudo:'ffff',bibliografia:'aaa'},
  {tipo:'1111',nome:'2222',carga:'qqqq',conteudo:'ffff',bibliografia:'aaa'},
  ]
  const dataAtas = [
    {ato:'yyyy',tipo:'2222',nDoc:"]]]]]",dataDoc:"yyyy",publicado:"ooooo",prazo:"333",pdr:"1111"},
    {ato:'yyyy',tipo:'2222',nDoc:"]]]]]",dataDoc:"yyyy",publicado:"ooooo",prazo:"333",pdr:"1111"},
    {ato:'yyyy',tipo:'2222',nDoc:"]]]]]",dataDoc:"yyyy",publicado:"ooooo",prazo:"333",pdr:"1111"},
    {ato:'yyyy',tipo:'2222',nDoc:"]]]]]",dataDoc:"yyyy",publicado:"ooooo",prazo:"333",pdr:"1111"},
    {ato:'yyyy',tipo:'2222',nDoc:"]]]]]",dataDoc:"yyyy",publicado:"ooooo",prazo:"333",pdr:"1111"},
    {ato:'yyyy',tipo:'2222',nDoc:"]]]]]",dataDoc:"yyyy",publicado:"ooooo",prazo:"333",pdr:"1111"},
  ]
</script>
<div class="w-full ">
  <div role="tablist" class="tabs tabs-lifted ">
    <input type="radio" name="my_tabs_2" role="tab" class="tab w-full" aria-label="Detalhes curso" checked />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <Detalhes/>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Estrutura curricular "/>
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <TabEstrutura data={dataCurricular}/>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab w-full" aria-label="Atas regulatorias" checked />
    <div role="tabpanel" class="tab-content    p-6">
      <TabelaAtas data={dataAtas}/>
    </div>

  </div>
</div>

