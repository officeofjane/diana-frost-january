<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image b">
    <img src="./images/scrolly/step5_games/b_nintendo-gameplay.png" alt="" />
  </div>
  <div class="image a">
    <img src="./images/scrolly/step5_games/a_nintendo-3ds.jpg" alt="" />
  </div>
  <div class="image c">
    <img src="./images/scrolly/step5_games/c_nintendo-gameplay-2.jpg" alt="" />
  </div>
  <div class="image d transparent">
    <img src="./images/scrolly/step5_games/d_elsa-tsum.png" alt="" />
  </div>
  <div class="image e">
    <img src="./images/scrolly/step5_games/e_kingdom-hearts-iii-1.jpg" alt="" />
  </div>
  <div class="image f">
    <img src="./images/scrolly/step5_games/f_kingdom-hearts-iii-2.jpg" alt="" />
  </div>
  <div class="image g transparent">
    <img src="./images/scrolly/step5_games/g_anna-tsum.png" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 100px 0 30px 0;
    grid-template-rows: 2fr 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 2;
    grid-row: 1;
  }

  .image.b {
    grid-column: 3 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.c {
    grid-column: 7 / span 3;
    grid-row: 1;
  }

  .image.d {
    grid-column: 2 / span 2;
    grid-row: 3;
    align-self: end;
  }

  .image.e {
    grid-column: 4 / span 3;
    grid-row: 2 / span 2;
    align-self: center;
  }

  .image.f {
    grid-column: 7 / span 3;
    grid-row: 3;
    align-self: end;
  }

  .image.g {
    grid-column: 9 / span 2;
    grid-row: 2;
  }
</style>