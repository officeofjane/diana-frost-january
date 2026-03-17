<script>
  import "$styles/layout-steps.css";

  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e5", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step2_experiences/a_guests-frozen-kingdom.jpg" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step2_experiences/b_olaf.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step2_experiences/d_frozen-fantasy.jpg" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step2_experiences/e_frozen-kingdom.jpg" alt="" />
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 50px 0 50px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 3;
    grid-row: 1;
    align-self: end;
    padding-bottom: 20px;
  }

  .image.a img {
    transform: rotate(-0.016turn);
  }

  .image.b {
    grid-column: 6 / span 4;
    grid-row: 1;
    align-self: center;
  }

  .image.b img {
    transform: rotate(0.01turn);
  }

  .image.c {
    grid-column: 7 / span 3;
    grid-row: 2;
    align-self: start;
    /* padding-top: 50px; */
  }

  .image.c img {
    transform: rotate(-0.01turn);
  }

  .image.d {
    grid-column: 6 / span 3;
    grid-row: 2;
    align-self: end;
    padding-left: 20px;
  }

  .image.d img {
    transform: rotate(0.015turn);
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
    align-self: start;
  }
</style>