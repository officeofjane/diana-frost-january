<script>
  import "$styles/layout-steps.css";

  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a fadeup">
    <video src="./videos/04_let-it-go.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step4_music/b_soundtrack.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step4_music/a_soundtrack-deluxe.jpg" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step4_music/d_soundtrack-back.jpg" alt="" />
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
    grid-column: 2 / span 5;
    grid-row: 1;
    align-self: center;
  }

  .image.b {
    grid-column: 7 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.c {
    grid-column: 6 / span 2;
    grid-row: 2;
    align-self: start;
  }

  .image.d {
    grid-column: 8 / span 2;
    grid-row: 2;
    align-self: start;
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
    align-self: start;
  }
</style>