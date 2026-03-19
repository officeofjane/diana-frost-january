<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a fadeup">
    <video src="./videos/12_once-upon-a-snowman.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step12_disney-plus/c_once-upon-a-snowman.webp" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step12_disney-plus/b_scene.webp" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step12_disney-plus/d_onceuponasnowman_disneyplus_poster.jpg" alt="" />    
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 10px 0 10px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
  }

  .image.b {
    grid-column: 6 / span 4;
    grid-row: 1;
    align-self: start;
  }

  .image.c {
    grid-column: 6 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.d {
    grid-column: 6 / span 2;
    grid-row: 2;
    align-self: start;
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
    align-self: start;
  }
</style>