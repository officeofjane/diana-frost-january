<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <video src="./videos/12_once-upon-a-snowman.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
  <div class="image b">
    <img src="./images/scrolly/step12_disney-plus/b_scene.webp" alt="" />
  </div>
  <div class="image c">
    <img src="./images/scrolly/step12_disney-plus/c_once-upon-a-snowman.webp" alt="" />
  </div>
  <div class="image d">
    <img src="./images/scrolly/step12_disney-plus/d_onceuponasnowman_disneyplus_poster.jpg" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 100px 0 100px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 6 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.c {
    grid-column: 4 / span 4;
    grid-row: 2;
    align-self: end;
  }

  .image.d {
    grid-column: 8 / span 2;
    grid-row: 2;
    align-self: center;
  }
</style>