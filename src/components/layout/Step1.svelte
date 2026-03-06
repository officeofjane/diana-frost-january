<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <video src="./videos/01_olafs-frozen-adventure.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="image b">
    <img src="./images/scrolly/step1_studio/b_olaf-frozen-adventure.png" alt=""/>
  </div>
  <div class="image c">
    <img src="./images/scrolly/step1_studio/c_frozen-fever-poster.png" alt=""/>
  </div>
  <div class="image d">
    <img src="./images/scrolly/step1_studio/d_olafs-frozen-adventure-poster.png" alt=""/>
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 10px 0 10px 0;
    grid-template-rows: 3fr 1fr 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
    align-self: center;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 6 / span 2;
    grid-row: 1;
    align-self: end;
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 2 / span 2;
  }

  .image.d {
    grid-column: 4 / span 4;
    grid-row: 3 / span 2;
  }
</style>