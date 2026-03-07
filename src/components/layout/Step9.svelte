<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", "e3", {active: isActive}]}>
  <div class="image a fadeup">
    <video src="./videos/10_disney-on-ice.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step9_entertainment/b_KV-2015.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <video src="./videos/09_shiki-musical.mp4" autoplay loop muted>
      <track kind="captions" />
    </video>
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 100px 0 100px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 6 / span 2;
    grid-row: 1;
    align-self: center;
  }

  .image.c {
    grid-column: 5 / span 5;
    grid-row: 2;
    align-self: end;
  }
</style>