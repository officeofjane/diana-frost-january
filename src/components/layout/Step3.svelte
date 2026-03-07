<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a circle">
    <img src="./images/scrolly/step3_content/b_blu-ray.jpg" alt="" />
  </div>
  <div class="image b">
    <video src="./videos/03_frozen-bluray.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 100px 0 100px 0;
  }

  .image.a {
    grid-column: 2 / span 4;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 5 / span 5;
    align-self: end;
    
  }
</style>