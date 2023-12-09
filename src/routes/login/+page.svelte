<script>
  import logo from "$lib/static/logo.png"
</script>

<div class="flex  items-center justify-center  min-h-screen px-[60px]">
  <div class="flex flex-row p-[60px] justify-center card  bg-base-100 shadow-xl">
    <img class="mr-[300px]" width="200px" alt="logo" src={logo}>
    <div class=" flex flex-col w-full">
      <input type="text" placeholder="email" class=" mb-4 input input-bordered input-primary w-full max-w-xs" />
      <input type="password" placeholder="senha" class=" mb-4 input input-bordered input-primary w-full max-w-xs" />
      <div>
        <button class=" flex justify-end btn btn-active btn-primary rounded-full">Continuar</button>
      </div>
    </div>
  </div>
</div>

