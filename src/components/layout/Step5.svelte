<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e6", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step5_games/a_nintendo-3ds.jpg" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step5_games/d_elsa-tsum.png" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step5_games/c_nintendo-gameplay-2.jpg" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step5_games/b_nintendo-gameplay.png" alt="" />
  </div>
  <div class="image e fadeup">
    <img src="./images/scrolly/step5_games/e_kingdom-hearts-iii-1.jpg" alt="" />
  </div>
  <div class="image f fadeup">
    <img src="./images/scrolly/step5_games/g_anna-tsum.png" alt="" />
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
    grid-template-rows: 2fr 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 2;
    grid-row: 1;
  }

  .image.b {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
    align-self: center;
  }

  .image.b img {
    transform: rotate(-0.03turn);
  }

  .image.c {
    grid-column: 4 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.c img {
    transform: rotate(0.015turn);
  }

  .image.d {
    grid-column: 7 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.e {
    grid-column: 7 / span 3;
    grid-row: 2;
    align-self: center;
  }

  .image.e img {
    transform: rotate(-0.015turn);
  }

  .image.f {
    grid-column: 6 / span 2;
    grid-row: 3;
  }

  .image.f img {
    transform: rotate(0.025turn);
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 1 / span 3;
    align-self: end;
  }
</style>