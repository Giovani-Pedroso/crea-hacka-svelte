<script>
  const nameCol= ['Cod Curso', 'Nome Curso', 'Grau', 'Municipio', 'Campus','Coordenador','Data de início', 'Status']
  let rows = [
    {'codCurso': '003',
    'nameCurso': 'Ciência da Computação',
    'grau': 'Bacharelado',
    'municipio': 'Belo Horizonte',
    'campus': 'Campus C',
    'coordenador': 'Pedro Oliveira',
    'data': '07/2022',
    'status': 'Ativo'},
    {'codCurso': '002',
    'nameCurso': 'Administração',
    'grau': 'Bacharelado',
    'municipio': 'Rio de Janeiro',
    'campus': 'Campus B',
    'coordenador': 'Maria Souza',
    'data': '03/2023',
    'status': 'Ativo'},
    {'codCurso': '001',
    'nameCurso': 'Engenharia Civil',
    'grau': 'Bacharelado',
    'municipio': 'São Paulo',
    'campus': 'Campus A',
    'coordenador': 'João Silva',
    'data': '01/2022',
    'status': 'Ativo'},
    {'codCurso': '004',
    'nameCurso': 'Psicologia',
    'grau': 'Bacharelado',
    'municipio': 'Porto Alegre',
    'campus': 'Campus D',
    'coordenador': 'Ana Rodrigues',
    'data': '05/2023',
    'status': 'Ativo'},
    {'codCurso': '005',
    'nameCurso': 'Medicina',
    'grau': 'Bacharelado',
    'municipio': 'Brasília',
    'campus': 'Campus E',
    'coordenador': 'Rafaela Santos',
    'data': '09/2022',
    'status': 'Ativo'},
    {    'codCurso': '006',
    'nameCurso': 'Arquitetura',
    'grau': 'Bacharelado',
    'municipio': 'Curitiba',
    'campus': 'Campus F',
    'coordenador': 'Fernando Oliveira',
    'data': '11/2023',
    'status': 'Ativo'},
  ]
</script>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr class="bg-[#99acff]">

      {#each nameCol as col}
        <th>{col}</th>
      {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr class="bg-[#cdd6ff]">
          <td>{row.codCurso}</td>
          <td><a href='/detalhes-curso' class="link link-primary">{row.nameCurso}</a></td>
          <td>{row.grau}</td>
          <td>{row.municipio}</td>
          <td>{row.campus}</td>
          <td>{row.coordenador}</td>
          <td>{row.data}</td>
          <td>{row.status}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
