<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a fadeup">
    <video src="./videos/09_shiki-musical.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step9_entertainment/b_KV-2015.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <video src="./videos/10_disney-on-ice.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 50px 0 50px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 5;
    grid-row: 1;
    align-self: end;
  }

  .image.b {
    grid-column: 7 / span 2;
    grid-row: 1;
    align-self: end;
  }

  .image.c {
    grid-column: 6 / span 4;
    grid-row: 2;
    align-self: start;
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
    /* align-self: end; */
  }
</style>