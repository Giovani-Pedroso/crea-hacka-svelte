
<script>
  const nameCol= ['Cod Curso', 'Nome Curso', 'Grau', 'Municipio', 'Campus','Coordenador','Data de início', 'Status']
  let rows = [
    {nome:'Campus Consolação',
    cnpj:'60.967.551/0001-50',
    email:'julia.silva@mackenzie.org.br',
    telefone:'(11)2117-8000',
    status:'Aprovado'},
    {nome:'Campus Mooca',
    cnpj:'60.967.551/0001-71',
    email:'milton.moura@mackenzie.org.br',
    telefone:'(11)3333-8000',
    status:'Pendente'},
    {nome:'Barra Funda',
    cnpj:'60.967.551/0001-71',
    email:'milton.moura@mackenzie.org.br',
    telefone:'(11)3333-8000',
    status:'Em analise'},
  ]
</script>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr class="bg-[#99acff]">
        <th>Nome</th>
        <th>CNPJ</th>
        <th>Email do responsavel</th>
        <th>Telefone</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr class={`bg-[${row.status == 'Aprovado'? '#cdd6ff': row.status == 'Pendente'? '#f8a695': '#f4b840'}]`}>
          <td>{row.nome}</td>
          <td>{row.cnpj}</td>
          <td>{row.email}</td>
          <td>{row.telefone}</td>
          <td>{row.status}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
