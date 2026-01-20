<script>
  import { getContext } from 'svelte';
  import Scrolly from '$components/helpers/Scrolly.svelte';
  import Wheel from '$components/Wheel.svelte';

  const copy = getContext("copy");

  let scrollIndex = $state(0);
</script>

<div class="container">
  <div class="sticky">
    <div class="wheel-wrapper">
      <p>flywheel here</p>
      <p>ScrollIndex: {scrollIndex}</p>
    </div>
    <!-- turn bg into component? import all the scrolly steps here? -->
    <div class="bg-wrapper">
      <div class="bg red" class:active={scrollIndex === 0}>
        <p>Background: {scrollIndex} I am red if active</p>
        <p>Does entry animation still work if active class is toggling opacity? (it's not on load)</p>
        <p>Should work, tie the animation (opacity and transform) to trigger when the active class is applied to element. But how is the CSS scoped if it's a component?</p>
      </div>
      <div class="bg blue" class:active={scrollIndex === 1}>
        <p>Background: {scrollIndex} I am blue if active</p>
      </div>
    </div>
    
  </div>
  <div class="steps-wrapper">
    <Scrolly bind:value={scrollIndex}>
      {#each copy.scrolly as step, i}
        <div class="step" class:active={scrollIndex === i}>
          <div class="copy">
            {#each step.text as p}
              <p>{@html p}</p>
            {/each}
          </div>
        </div>
      {/each}
    </Scrolly>
  </div>
</div>

<style>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(360px, 30%) 1fr;
  }

  .sticky {
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: subgrid;
  }

  .wheel-wrapper {
    background-color: aliceblue;
  }

  .bg-wrapper {
    background-color: papayawhip;
    position: relative;
  }

  .bg {
    opacity: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  .bg.active {
    opacity: 1;
  }

  .bg.red {
    background-color: red;
  }

  .bg.blue {
    background-color: blue;
  }

  .steps-wrapper {
    grid-column: 2;
    margin-top: -100vh;
  }

  .step {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .copy {
      width: 70%;
      max-width: var(--copy-width);
      border-radius: 5px;
      padding: 0.5rem 1rem;
      background-color: white;
      box-shadow: var(--shadow-elevation-medium);
    }
  }
</style>