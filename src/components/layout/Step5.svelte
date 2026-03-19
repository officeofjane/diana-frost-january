<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e6", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step5_games/a_nintendo-3ds.jpg" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step5_games/c_nintendo-gameplay-2.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step5_games/b_nintendo-gameplay.png" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step5_games/e_kingdom-hearts-iii-1.jpg" alt="" />
  </div>
  <div class="image e fadeup">
    <img src="./images/scrolly/step5_games/g_anna-tsum.png" alt="" />
  </div>
  <div class="image f fadeup">
    <img src="./images/scrolly/step5_games/d_elsa-tsum.png" alt="" />
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
    grid-column: 2 / span 2;
    grid-row: 1;
    align-self: end;
  }

  .image.b {
    grid-column: 4 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.c {
    grid-column: 7 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.d {
    grid-column: 7 / span 3;
    grid-row: 2;
    align-self: start;
  }

  .image.e {
    grid-column: 7 / span 2;
    grid-row: 2;
    align-self: end;
  }

  .image.f {
    grid-column: 8 / span 2;
    grid-row: 2;
    align-self: end;
  }

  .copy {
    grid-column: 2 / span 5;
    grid-row: 2;
    align-self: start;
  }
</style>