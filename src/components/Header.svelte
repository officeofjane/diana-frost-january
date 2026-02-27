<script>
  let { hed, subhed } = $props();
</script>

<div class="container">
  <div class="content-wrapper">
    <div class="headline">
      <h1>{@html hed}</h1>
      <h2 class="subhead">{@html subhed}</h2>
    </div>
    <div class="scroll-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="img" class="arrow">
        <path d="m3.38 6 .71-.71L8 9.25l3.91-3.92.71.71L8 10.67Z"></path>
      </svg>
    </div>
  </div>
</div>

<style>
  .container {
    height: 100dvh;
    overflow: hidden;
    display: grid;
    place-content: center;

    /* background-color: whitesmoke; */
    background:
      linear-gradient(
        180deg,
        hsl(270, 60%, 88%)   0%,
        hsl(260, 60%, 88%)   5%,
        hsl(250, 60%, 88%)   15%,
        hsl(240, 60%, 88%)   38%,
        hsl(230, 60%, 88%)   58%,
        hsl(220, 60%, 88%)   76%,
        hsl(210, 60%, 88%)   83%,
        hsl(200, 60%, 93%)   100%
      );
  }


  .content-wrapper {
    height: 100%;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-family: var(--serif);
    font-size: 2.625rem;
  }

  .arrow {
    width: 2rem;
    animation: jumpInfinite 2s ease-in-out infinite;
  }
</style>