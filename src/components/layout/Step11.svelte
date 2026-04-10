<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e6", {active: isActive}]}>
  <div class="image a fadeup">
    <img src="./images/scrolly/step11_products/c_frozen-oh-my-cafe-2.jpg" alt="" />
  </div>
  <div class="image b fadeup">
    <img src="./images/scrolly/step11_products/b_frozen2cafe.jpg" alt="" />
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step11_products/toy-elsa.png" alt="" /> 
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step11_products/toy-olaf.png" alt="" /> 
  </div>
  <div class="image e fadeup">
    <img src="./images/scrolly/step11_products/elsa-bottle-sticker.png" alt="" />
  </div>
  <div class="copy">
    {#each copy.text as p}
      <p>{@html p}</p>
    {/each}
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 50px 0 50px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
    align-self: end;
  }

  .image.b {
    grid-column: 6 / span 4;
    grid-row: 1;
    align-self: end;
  }

  .image.c {
    grid-column: 5 / span 3;
    grid-row: 2;
    align-self: center;
  }

  .image.d {
    grid-column: 7 / span 2;
    grid-row: 2;
    align-self: center;
  }

  .image.e {
    grid-column: 8 / span 2;
    grid-row: 2;
    align-self: center;
  }

  .copy {
    grid-column: 2 / span 3;
    grid-row: 2;
    align-self: start;
  }
</style>