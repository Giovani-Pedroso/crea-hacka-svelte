
<script>
  let rows = [
    {ato:'Criação de Polo EaD',
    tipo:'Resolução',
    data:'02/07/2021',
    prazo:'5 anos',
    nDoc:'20',
    pub:'02/04/2021',
    pdf:'#',
    status:'Aprovado',
    },
   {
  ato: 'Alteração de Currículo',
  tipo: 'Deliberação',
  data: '12/11/2023',
  prazo: '3 anos',
  nDoc: '42',
  pub: '15/12/2023',
  pdf: '#',
  status: 'Em análise'
},
{
  ato: 'Aprovação de Projeto de Extensão',
  tipo: 'Portaria',
  data: '28/05/2023',
  prazo: '2 anos',
  nDoc: '27',
  pub: '02/06/2023',
  pdf: '#',
  status: 'Pendente'
},{ato: 'Criação de Centro de Pesquisa',
  tipo: 'Portaria',
  data: '15/09/2022',
  prazo: 'Indeterminado',
  nDoc: '35',
  pub: '18/10/2022',
  pdf: '#',
  status: 'Aprovado'}]
</script>
<div>

  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr class="bg-[#99acff]">
          <th>Ato</th>
          <th>Tipo</th>
          <th>Data</th>
          <th>Prano</th>
          <th>No Doc</th>
          <th>Publicação</th>
          <th>PDF</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as row}
          {#if row.status == 'Aprovado'}
            <tr class={`bg-[#cdd6ff]`}>
              <td><a href='/atos-edit' class="link link-primary">{row.ato}</a></td>
              <td>{row.tipo}</td>
              <td>{row.data}</td>
              <td>{row.prazo}</td>
              <td>{row.nDoc}</td>
              <td>{row.pub}</td>
              <td><a href={row.pub} class='link link-primary'>PDF</a></td>
              <td>{row.status}</td>
            </tr>
          {:else if row.status == 'Pendente'}
            <tr class={`bg-[#f8a695]`}>
              <td><a href='/atos-edit' class="link link-primary">{row.ato}</a></td>
              <td>{row.tipo}</td>
              <td>{row.data}</td>
              <td>{row.prazo}</td>
              <td>{row.nDoc}</td>
              <td>{row.pub}</td>
              <td><a href={row.pub} class='link link-primary'>PDF</a></td>
              <td>{row.status}</td>
            </tr>
          {:else}
            <tr class={` bg-[#f4b840]`}>
              <td><a href='/atos-edit' class="link link-primary">{row.ato}</a></td>
              <td>{row.tipo}</td>
              <td>{row.data}</td>
              <td>{row.prazo}</td>
              <td>{row.nDoc}</td>
              <td>{row.pub}</td>
              <td><a href={row.pub} class='link link-primary'>PDF</a></td>
              <td>{row.status}</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
</div>

