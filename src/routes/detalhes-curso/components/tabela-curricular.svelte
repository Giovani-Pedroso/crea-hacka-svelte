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

<div class="flex w-full justify-between mt-8">
  <button class="btn  btn-info">Editar entrada</button>
  <button class="btn  btn-success">Adicionar entrada</button>
</div>
