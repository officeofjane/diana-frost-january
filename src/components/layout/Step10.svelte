<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false, copy = "" } = $props();
</script>

<div class={["layout-wrapper", "e4", {active: isActive}]}>
  <div class="image a circle fadeup">
    <img src="./images/scrolly/step10_stores/b_frozen-wedding-dress-collection.jpg" alt="" />
  </div>
  <div class="image b circle fadeup">
    <img src="./images/scrolly/step10_stores/a_alfred-angelo-for-disney.jpg" alt="" />    
  </div>
  <div class="image c fadeup">
    <img src="./images/scrolly/step10_stores/d_frozen-wedding-anna-2.jpg" alt="" />
  </div>
  <div class="image d fadeup">
    <img src="./images/scrolly/step10_stores/c_alfred-angelo-disneys-elsa-frozen-wedding-dress.jpg" alt="" />
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
    grid-template-rows: 3fr 2fr;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
  }

  .image.a img {
    transform: rotate(-0.02turn);
  }

  .image.b {
    grid-column: 5 / span 3;
    grid-row: 1;
    align-self: end;
  }

  .image.b img {
    transform: rotate(0.01turn);
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 1 / span 2;
    align-self: center;
  }

  .image.c img {
    transform: rotate(0.01turn);
  }


  .image.d {
    grid-column: 6 / span 3;
    grid-row: 2;
    align-self: end;
  }

  .copy {
    grid-column: 2 / span 4;
    grid-row: 2;
    padding-right: 30px;
  }
</style>