<script>
  import "$styles/layout-steps.css";

  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e5", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step2_experiences/a_guests-frozen-kingdom.jpg" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step2_experiences/e_frozen-kingdom.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step2_experiences/d_frozen-fantasy.jpg" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step2_experiences/b_olaf.jpg" alt="" />
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 20px 0 20px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.b {
    grid-column: 5 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 1;
    align-self: end;
  }

  .image.d {
    grid-column: 6 / span 4;
    grid-row: 2;
    align-self: start;
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
    align-self: start;
  }
</style>