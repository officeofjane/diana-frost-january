<script>
  import "$styles/layout-steps.css";
  
  let { isActive = false } = $props();
</script>

<div class={["layout-wrapper", {active: isActive}]}>
  <div class="image a">
    <img src="./images/scrolly/step8_publishing/a_novel.webp" alt="" />
  </div>
  <div class="image b">
    <img src="./images/scrolly/step8_publishing/b_book-spread.png" alt="" />
  </div>
  <div class="image c">
    <img src="./images/scrolly/step8_publishing/c_children-books.png" alt="" />
  </div>
  <div class="image d">
    <img src="./images/scrolly/step8_publishing/d_official-magazine-1.jpg" alt="" />
  </div>
  <div class="image e">
    <img src="./images/scrolly/step8_publishing/e_official-magazine-2.jpg" alt="" />
  </div>
  <div class="image f">
    <img src="./images/scrolly/step8_publishing/f_official-magazine-3.webp" alt="" />
  </div>
</div>

<style>
  .layout-wrapper {
    padding: 80px 0 80px 0;
    grid-template-rows: 1fr 1fr;
  }

  .image.a {
    grid-column: 2 / span 2;
    grid-row: 1;
    align-self: center;
  }

  .active .image.a {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
  }

  .image.b {
    grid-column: 4 / span 3;
    grid-row: 1;
  }

  .image.c {
    grid-column: 7 / span 3;
    grid-row: 1;
    align-self: center;
  }

  .image.d {
    grid-column: 4 / span 2;
    grid-row: 2;
    align-self: center;
  }

  .image.e {
    grid-column: 6 / span 2;
    grid-row: 2;
  }

  .image.f {
    grid-column: 8 / span 2;
    grid-row: 2;
    align-self: end;
  }
</style>