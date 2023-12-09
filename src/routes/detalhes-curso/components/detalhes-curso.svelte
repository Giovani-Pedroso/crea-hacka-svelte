<script>
  import Input from "$lib/components/ui/input.svelte"
  const digitarCampos = ['Codigo curso mec', 'Nome curso', 'Campus',
    'Grau nivel', 'Titulo Academico (Grau)', 'Carga horaria total',
    'Modalidade','Data inicial de numcionamento','Turno','Periodicidade','Coordenador', 'Situação',
    'Vagas anuais'] 
</script>

<div class="flex flex-col  w-full">
  <h1 class="text-4xl mp-2 text-center">Inscrição de mantenedora</h1>
  <h2 class="text-blue-400 text-center my-4 text-[24px]">Status: Em analise</h2>
  <div class="w-full px-2 md:px-[100px]">
    <form>
      {#each digitarCampos as campo}
        <div class='mb-2'>
          <Input filed={campo}/>
        </div>
      {/each}
    </form>
    <div class="flex w-full justify-between mt-4">
      <button class="btn  btn-info">Editar</button>
      <button class="btn  btn-success">Enviar</button>
    </div>
  </div>
</div>
