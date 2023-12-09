<script>
  let rows =[
    {nSolicitacao:2, ies:"uninove",tipo:"a",data:"20/10/2000",situacao:"Aprovado"},
    {nSolicitacao:2, ies:"uninove",tipo:"a",data:"20/10/2000",situacao:"Aprovado"},
    {nSolicitacao:2, ies:"uninove",tipo:"a",data:"20/10/2000",situacao:"Aprovado"},
    {nSolicitacao:2, ies:"uninove",tipo:"a",data:"20/10/2000",situacao:"Aprovado"},
  ]

</script>

<div class="overflow-x-auto w-screen">
  <table class="table">
    <!-- head -->
    <thead>
      <tr class="bg-[#99acff]">
        <th>N°Solocitação</th>
        <th>Instiduição de ensino</th>
        <th>Tipo de soloctação</th>
        <th>Data criação</th>
        <th>Situação</th>
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
          <tr >
            <td>{row.nSolicitacao}</td>
            <td>{row.ies}</td>
            <td>{row.tipo}</td>
            <td>{row.data}</td>
            <td>{row.situacao}</td>
          </tr>
      {/each}
    </tbody>

</table>
</div>
