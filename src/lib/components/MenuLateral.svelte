<script>
 const links = [
  {name:"Institucional", cats:['Cadastor geral','Administadores','Campi']},
  {name:"Cursos", cats:['at','ts','ta']},
  {name:"Formandos(as)", cats:['at','ts','ta']},
 ]

</script>

<div class="bg-primary text-secondary ">
  {#each links as link }
    <div class="collapse collapse-arrow  ">
      <input type="radio" name="my-accordion-2" checked="checked" /> 
      <div class="collapse-title text-[28px] font-medium">
        {link.name}
      </div>
      <div class="collapse-content flex flex-col"> 
        {#each link.cats as cat}
          <a href="#">{cat}</a>
        {/each}
      </div>
    </div> 
  {/each}
</div>
