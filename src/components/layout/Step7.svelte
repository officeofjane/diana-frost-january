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
    padding: 50px 0 50px 0;
    grid-template-rows: 2fr 3fr;
  }

  .image.a {
    grid-column: 2 / span 5;
    grid-row: 1;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 7 / span 4;
    grid-row: 1 / span 2;
  }

  .image.c {
    grid-column: 2 / span 3;
    grid-row: 2;
    align-self: center;
  }

  .image.d {
    grid-column: 4 / span 3;
    grid-row: 2;
    align-self: end;
  }

  .image.e {
    grid-column: 7 / span 5;
    grid-row: 2;
    align-self: center;
  }
</style>