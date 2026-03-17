<script>
  import "$styles/layout-steps.css";

  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a fadeup">
    <video src="./videos/01_olafs-frozen-adventure.mp4" autoplay loop muted>
      <track kind="captions" />
    </video> 
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step1_studio/b_olaf-frozen-adventure.png" alt=""/>
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step1_studio/c_frozen-fever-poster.png" alt=""/>
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step1_studio/d_olafs-frozen-adventure-poster.png" alt=""/>
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
    grid-template-rows: 3fr 1fr 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
    align-self: center;
  }
    
  .image.b {
    grid-column: 6 / span 2;
    grid-row: 1;
    align-self: end;
  }

  .image.b img {
    transform: rotate(0.015turn);
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 2 / span 2;
  }

  .image.d {
    grid-column: 4 / span 4;
    grid-row: 3 / span 2;
    padding-bottom: 14px;
    align-self: end;
  }

  .image.d img {
    transform: rotate(-0.01turn);
  }

  .copy {
    grid-column: 2 / span 5;
    grid-row: 2 / span 2;
  }
</style>