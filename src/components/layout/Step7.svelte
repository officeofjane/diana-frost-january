<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <img src="./images/scrolly/step7_fan/frozen_fanfest.jpeg" alt="" />
  </div>
  <!-- <div class="image b">
    <img src="./images/scrolly/step7_fan/shopping-1.png" alt="" />
  </div> -->
  <div class="image c">
    <img src="./images/scrolly/step7_fan/frozen_cosplay-1.png" alt="" />
  </div>
  <div class="image d">
    <img src="./images/scrolly/step7_fan/frozen_cosplay-2.png" alt="" />
  </div>
  <div class="image e">
    <img src="./images/scrolly/step7_fan/elsa-costume.png" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 30px 0 30px 0;
  }

  .image.a {
    grid-column: 5 / span 5;
    align-self: end;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  /* .image.b {
    grid-column: 7 / span 4;
  } */

  .image.c {
    grid-column: 2 / span 3;
    grid-row: 1;
    align-self: start;
  }

  .image.d {
    grid-column: 4 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.e {
    grid-column: 7 / span 4;
    grid-row: 1;
    align-self: end;
  }
</style>