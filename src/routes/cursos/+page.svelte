<script>
  let cursos = [
    {name:"Agronogia", qtd:3},
    {name:"Agronogia", qtd:3},
    {name:"Agronogia", qtd:3},
    {name:"Agronogia", qtd:3},
    {name:"Agronogia", qtd:3},
    {name:"Agronogia", qtd:3},
    {name:"Agronogia", qtd:3},
  ]
</script>


<div class="flex flex-col w-full px-8 py-4">
  
  <div class="overflow-x-auto ">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Nome do curso</th>
          <th>QTN</th>
        </tr>
      </thead>
      <tbody>
        {#each cursos as curso}
          <tr>
            <td><a href="detalhes-curso">{curso.name}</a></td>
            <td>{curso.qtd}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
