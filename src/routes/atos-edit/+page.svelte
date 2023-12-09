<script>
  import Input from "$lib/components/ui/input.svelte"
  const digitarCampos = ['Ato', 'Tipo', 'Data',
    'Prazo','Numero do Documento','Data','Arquivo Pdf'
     ]
</script>

<div class="flex flex-col  w-full">
  <div class="w-full px-2 md:px-[100px]">
    <form>
      {#each digitarCampos as campo}
        <div class='mb-2'>
          <Input filed={campo}/>
        </div>
      {/each}
    </form>
    <div class="flex w-full justify-between my-4">
      <button class="btn  btn-info">Editar</button>
      <button class="btn  btn-success">Enviar</button>
    </div>
  </div>
</div>

