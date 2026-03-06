<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <video src="./videos/00_frozen-trailer-trim.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
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
</style>