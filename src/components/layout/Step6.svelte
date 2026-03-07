<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <img src="./images/scrolly/step6_channel/a_northern-lights-promo.webp" alt="" />
  </div>
  <div class="image b">
    <img src="./images/scrolly/step6_channel/b_northern-lights-characters.jpg" alt="" />
  </div>
  <div class="image c">
    <img src="./images/scrolly/step6_channel/c_lego-frozen-northern-lights-figures.jpg" alt="" />
  </div>
  <div class="image d">
    <img src="./images/scrolly/step6_channel/d_northern-lights-poster.webp" alt="" />
  </div>
  <div class="image e">
    <video src="./videos/06_lego-frozen.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 100px 0 100px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 3;
    grid-row: 1;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 4 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 1;
    align-self: center;
  }

  .image.d {
    grid-column: 2 / span 2;
    grid-row: 2;
  }

  .image.e {
    grid-column: 5 / span 5;
    grid-row: 2;
    align-self: end;
  }
</style>