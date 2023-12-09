<script>
 const links = [
  {name:"Institucional", cats:[{name:'Cadastro geral', link:"#"}
                              ,{name:'Administadores', link:"#"},
                              {name:'Campi', link:"$"}]},
  {name:"Cursos", cats:[{name:'Cadastro', link:"./cursos"},
                        {name:'Formandos', link:"./formandos"},
                        ]},
  {name:" Atendimentos", cats:[{name:'Protocolos', link:"#"}],
                  },
 ]

</script>

<div class="bg-primary text-secondary fixed w-screen z-20">
  {#each links as link }
    <div class="collapse collapse-arrow  ">
      <input type="radio" name="my-accordion-2" checked="checked" /> 
      <div class="collapse-title text-[28px] font-medium">
        {link.name}
      </div>
      <div class="collapse-content flex flex-col"> 
        {#each link.cats as cat}
          <a class="link link-secondary"   href={cat.link}>{cat.name}</a>
        {/each}
      </div>
    </div> 
  {/each}
</div>
