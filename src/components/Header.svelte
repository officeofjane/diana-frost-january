<script>
  import SnowParticles from "$components/SnowParticles.svelte";

  let { hed, subhed } = $props();
</script>

<div class="container">
  <SnowParticles />
  <div class="content-wrapper">
    <div class="headline">
      <h1>{@html hed}</h1>
      <h2 class="subhead">{@html subhed}</h2>
    </div>
    <div class="scroll-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="img" class="arrow">
        <path d="m3.38 6 .71-.71L8 9.25l3.91-3.92.71.71L8 10.67Z"></path>
      </svg>
    </div>
  </div>
</div>

<style>
  .container {
    height: 100dvh;
    overflow: hidden;
    display: grid;
    place-content: center;

    background-color: whitesmoke;
  }

  .content-wrapper {
    height: 100%;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .arrow {
    width: 2rem;
    animation: jumpInfinite 2s ease-in-out infinite;
  }
</style>