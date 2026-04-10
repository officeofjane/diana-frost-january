<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
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
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 30px 0 30px 0;
    grid-template-rows: 3fr 2fr;
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
    padding-left: 20px;
  }

  .image.c {
    grid-column: 6 / span 4;
    grid-row: 1;
    align-self: center;
  }

  .image.d {
    grid-column: 6 / span 4;
    grid-row: 2;
    align-self: start;
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
  }
</style>