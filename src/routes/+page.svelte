<script>
  import Hero from "$lib/components/Hero.svelte"
  import Faculs from "$lib/components/Facul.svelte"
</script>


<div class="flex flex-col  items-center justify-center  min-h-screen w-full">
  <div class="flex flex-col  justify-between p-[60px] w-full  ">
    <p class="text-secondary font-bold text-[58px] mb-[60px] ry leading-[68px]">   
      CREA
      <br/>
      Conecta
    </p>
    <div class=" flex flex-col ">
      <input type="text" placeholder="email" class=" mb-4 input input-bordered input-primary w-full max-w-xs" />
      <input type="password" placeholder="senha" class=" mb-4 input input-bordered input-primary w-full max-w-xs" />
      <div class="flex">
        <button class=" flex justify-end btn btn-active btn-primary mr-4 rounded-full">Entrar</button>
        <button class=" flex justify-end btn btn-active btn-primary rounded-full">Acessar com gov.br</button>
      </div>
      <a href="#" class="link link-primary mt-2">recuperar senha</a>
    </div>
  </div>
</div>
