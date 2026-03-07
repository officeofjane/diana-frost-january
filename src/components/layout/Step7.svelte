<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step7_fan/frozen_cosplay-1.png" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step7_fan/frozen_cosplay-2.png" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step7_fan/elsa-costume.png" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step7_fan/frozen_fanfest.jpeg" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 30px 0 30px 0;
  }

  .image.d {
    grid-column: 5 / span 5;
    align-self: end;
  }

  .image.a {
    grid-column: 2 / span 3;
    grid-row: 1;
    align-self: start;
  }

  .image.b {
    grid-column: 4 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.c {
    grid-column: 7 / span 4;
    grid-row: 1;
    align-self: end;
  }
</style>