<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step4_music/a_soundtrack-deluxe.jpg" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step4_music/b_soundtrack.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <video src="./videos/04_let-it-go.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step4_music/d_soundtrack-back.jpg" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 80px 0 80px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 3 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.b {
    grid-column: 7 / span 3;
    grid-row: 1;
  }

  .image.c {
    grid-column: 2 / span 5;
    grid-row: 2;
    align-self: center;
  }

  .image.d {
    grid-column: 8 / span 2;
    grid-row: 2;
    /* align-self: center;s */
  }
</style>