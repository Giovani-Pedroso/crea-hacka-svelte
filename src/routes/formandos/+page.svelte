<script>
  let turmas = [
    {turma:"Agronomia", Curso:3, ano:2009, periodo:'noite',colacao:'04/2002',
    'nome':'João',
    'cpf':'888.999.777.22',
    grau:'bacharelado',status:'pendente'},
    {
   'turma': 'Agronomia',
    'Curso': 3,
    'ano': 2009,
    'periodo': 'noite',
    'colacao': '04/2002',
    'grau': 'bacharelado',
    'status': 'pendente',
    'nome':'João',
    'cpf':'888.999.777.22',
    },
    {
    'turma': 'Medicina',
    'Curso': 7,
    'ano': 2018,
    'periodo': 'integral',
    'colacao': '06/2024',
    'grau': 'bacharelado',
    'status': 'cursando',
    'nome':'João',
    'cpf':'888.999.777.22',
    },
    {
    'turma': 'Direito',
    'Curso': 2,
    'ano': 2015,
    'periodo': 'noite',
    'colacao': '08/2020',
    'grau': 'bacharelado',
    'status': 'concluído',
    'nome':'João',
    'cpf':'888.999.777.22',
    },
    {
    'turma': 'Engenharia Civil',
    'Curso': 4,
    'ano': 2016,
    'periodo': 'manhã',
    'colacao': '05/2022',
    'grau': 'bacharelado',
    'status': 'concluído',
    'nome':'João',
    'cpf':'888.999.777.22',
    },
    {
    'turma': 'Administração',
    'nome':'João',
    'cpf':'888.999.777.22',
    'Curso': 1,
    'ano': 2020,
    'periodo': 'tarde',
    'colacao': '12/2025',
    'grau': 'bacharelado',
    'status': 'cursando'
    }
  ]
</script>


<div class="flex flex-col w-full px-8 py-4">
  
  <div class="overflow-x-auto ">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Turma</th>
          <th>Curso</th>
          <th>Ano</th>
          <th>Periodo</th>
          <th>Colação</th>
          <th>Grau</th>
          <th>Status envio</th>
        </tr>
      </thead>
      <tbody>
        {#each turmas as turma}
          <tr>

            <td>{turma.cpf}</td>
            <td>{turma.nome}</td>
            <td>{turma.Curso}</td>
            <td>{turma.turma}</td>
            <td>{turma.ano}</td>
            <td>{turma.periodo}</td>
            <td>{turma.colacao}</td>
            <td>{turma.grau}</td>
            <td>{turma.status}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
    <div class="flex w-full justify-between mt-4">
      <button class="btn  btn-info">Editar Aluno</button>
      <button class="btn  btn-success">Adicionar Aluno</button>
    </div>
</div>

