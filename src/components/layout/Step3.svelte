<script>
  import "$styles/layout-steps.css";

  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e2", {active: isActive}]}>
  <div class="image a fadeup">
    <video src="./videos/03_frozen-bluray.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="image b circle fadeup">
    <img src="./images/scrolly/step3_content/b_blu-ray.jpg" alt="" />
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 100px 0 100px 0;
  }

  .image.a {
    grid-column: 2 / span 5;
    grid-row: 1;
    align-self: end;
  }

  .image.b {
    grid-column: 7 / span 3;
    grid-row: 1;
    align-self: end;
  }
  
  .copy {
    grid-column: 3 / span 6;
    grid-row: 2;
    align-self: start;
  }
</style>