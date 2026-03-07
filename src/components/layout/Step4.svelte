<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <img src="./images/scrolly/step4_music/a_soundtrack-deluxe.jpg" alt="" />
  </div>
  <div class="image b">
    <img src="./images/scrolly/step4_music/b_soundtrack.jpg" alt="" />
  </div>
  <div class="image c">
    <video src="./videos/04_let-it-go.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="image d">
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

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
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