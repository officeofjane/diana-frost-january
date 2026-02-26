<script>
  import "$styles/layout-steps.css";

  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a sticker">
    <img src="./images/elsa-costume.png" alt="" />
  </div>
  <div class="image b">
  </div>
  <div class="image c">
  </div>
  <div class="image d sticker">
    <img src="./images/elsa-bottle-sticker.png" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 10px 0 10px 0;
    grid-template-rows: 2fr 1fr 1fr;
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
    grid-column: 4 / span 2;
    grid-row: 2 / span 2;
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 2 / span 1;
  }

  .image.d {
    grid-column: 7 / span 2;
    grid-row: 3 / span 1;
  }

  .image.sticker img {
    box-shadow: none;
  }

  .image.sticker {
    filter: drop-shadow(4px 8px 6px hsl(216deg 60% 28% / 0.5));
  }
</style>