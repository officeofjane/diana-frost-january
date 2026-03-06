<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="video-wrapper">
    <video src="./videos/00_frozen-trailer-trim.mp4" autoplay  loop muted>
      <track kind="captions" />
    </video> 
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 10px 0 10px 0;
  }

  .video-wrapper {
    grid-column: 2 / 10;
    align-self: center;
    background-color: whitesmoke;
  }

  video {
    width: 100%;
  }
</style>