<script>
  export let data = []
</script>
<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Ato</th>
        <th>Tipo</th>
        <th>N°Document</th>
        <th>Data Doc</th>
        <th>Publicado </th>
        <th>Prazo </th>
        <th>PDR </th>
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          <td>{row.ato}</td>
          <td>{row.tipo}</td>
          <td>{row.nDoc}</td>
          <td>{row.dataDoc}</td>
          <td>{row.publicado}</td>
          <td>{row.prazo}</td>
          <td>{row.pdr}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<div class="flex w-full justify-between mt-8">
  <button class="btn  btn-info">Editar entrada</button>
  <button class="btn  btn-success">Adicionar entrada</button>
</div>

