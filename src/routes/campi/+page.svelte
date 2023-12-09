
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
    {
    nome: 'Campus Santana',
    cnpj: '60.967.551/0001-14',
    email: 'ana.santos@mackenzie.org.br',
    telefone: '(11)5555-8000',
    status: 'Pendente'
    },
    {
     nome: 'Campus Perdizes',
      cnpj: '60.967.551/0001-36',
      email: 'rodrigo.oliveira@mackenzie.org.br',
      telefone: '(11)7777-8000',
      status: 'Em análise'
    },
    {nome:'Barra Funda',
    cnpj:'60.967.551/0001-71',
    email:'milton.moura@mackenzie.org.br',
    telefone:'(11)3333-8000',
    status:'Em analise'},
    {
    nome: 'Campus Higienópolis',
    cnpj: '60.967.551/0001-92',
    email: 'carlos.rodrigues@mackenzie.org.br',
    telefone: '(11)4444-8000',
    status: 'Aprovado'
    }
  ]
</script>
<div>

  <input type="text" placeholder="Pesquisar" class="input input-bordered w-full mr-4 md:w-auto" />
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
          {#if row.status == 'Aprovado'}
            <tr class={`bg-[#cdd6ff]`}>
              <td><a href='/campus-edit' class="link link-primary">{row.nome}</a></td>
              <td>{row.cnpj}</td>
              <td>{row.email}</td>
              <td>{row.telefone}</td>
              <td>{row.status}</td>
            </tr>
          {:else if row.status == 'Pendente'}
            <tr class={`bg-[#f8a695]`}>
              <td><a href='/campus-edit' class="link link-primary">{row.nome}</a></td>
              <td>{row.cnpj}</td>
              <td>{row.email}</td>
              <td>{row.telefone}</td>
              <td>{row.status}</td>
            </tr>
          {:else}
            <tr class={` bg-[#f4b840]`}>
              <td><a href='/campus-edit' class="link link-primary">{row.nome}</a></td>
              <td>{row.cnpj}</td>
              <td>{row.email}</td>
              <td>{row.telefone}</td>
              <td>{row.status}</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
</div>
