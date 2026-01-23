<div class="wrapper">
  <div class="image a">
  </div>
  <div class="image b">
  </div>
  <div class="image c">
  </div>
  <div class="image d">
  </div>
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    padding: 10px 0 10px 0;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 2fr 1fr 1fr;
    grid-gap: 10px;
  }

  .image.a {
    grid-column: 2 / span 4;
    grid-row: 1;
    background-color: red;
  }

  .image.b {
    grid-column: 4 / span 2;
    grid-row: 2 / span 2;
    background-color: red;
  }

  .image.c {
    grid-column: 8 / span 2;
    grid-row: 2 / span 1;
    background-color: red;
  }

  .image.d {
    grid-column: 7 / span 2;
    grid-row: 3 / span 1;
    background-color: red;
  }
</style>