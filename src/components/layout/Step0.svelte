<script>
  import "$styles/layout-steps.css";

  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e1", {active: isActive}]}>
  <div class="image a fadeIn">
    <video src="./videos/00_frozen-trailer-trim.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 10px 0 10px 0;
  }

  .image.a {
    grid-column: 2 / 10;
    align-self: center;
  }

  video {
    width: 100%;
  }

  .copy {
    grid-column: 3 / span 5;
    grid-row: 1;
  }
</style>