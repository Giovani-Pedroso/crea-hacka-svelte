<script>
  export let data = []
</script>
<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Nome</th>
        <th>Carga horaria</th>
        <th>Conteudo</th>
        <th>Bibliografia</th>
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          <td>{row.tipo}</td>
          <td>{row.nome}</td>
          <td>{row.carga}</td>
          <td>{row.conteudo}</td>
          <td>{row.bibliografia}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>


