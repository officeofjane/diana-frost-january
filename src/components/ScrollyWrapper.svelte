<script>
  import { getContext } from 'svelte';
  import narrative from '$data/narrative.js';
  import { NUM_NODES } from '$data/data.js';
  import Scrolly from '$components/helpers/Scrolly.svelte';
  import Wheel from '$components/Wheel.svelte';
  import Background from '$components/Background.svelte';
  import Step from '$components/Step.svelte';

  const copy = getContext("copy");

  let scrollIndex = $state(0);

  let wheelWrapperWidth = $state(0);
  let wheelWrapperHeight = $state(0);

  function slice(index) {
    if (index) {
      const obj = narrative.find(d => d.step === index);
      return obj;
    } 
    return narrative[0];
  }
</script>

<div class="container">
  <div class="sticky">
    <div class="left">
      <div class="wheel-wrapper"
        bind:offsetWidth={wheelWrapperWidth}
        bind:offsetHeight={wheelWrapperHeight}
      >
        <div class="rotate"
          style="--turn: {slice(scrollIndex).rotation/NUM_NODES}turn"
        >
          <Wheel width={wheelWrapperWidth} height={wheelWrapperHeight} highlight={slice(scrollIndex).highlight}/>
        </div>
      </div>
      <p>ScrollIndex: {scrollIndex}</p>
      <p>Highlight: {slice(scrollIndex).highlight}</p>
    </div>
    <!-- single noise gradient bg component with colour props? -->
    <!-- turn each layout step into a separate component? import all the scrolly steps here? -->
    <!-- pass down isActive state prop into step layout component? then apply class inside component to trigger animation -->
    <div class="right">
      {#each narrative as step, i}
        <div class="bg" class:active={scrollIndex === i}>
          <Background bgColours={slice(scrollIndex).gradientColours}/>
          <!-- need to create separate components for each step? -->
          <Step isActive={scrollIndex === i}/>
        </div>
      {/each}
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
    grid-template-columns: minmax(350px, 28%) 1fr;
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

  .left {
    /* background-color: aliceblue; */
    position: relative;
    overflow: hidden;
  }

  .wheel-wrapper {
    position: absolute;
    width: 200%;
    aspect-ratio: 1;
    left: -100%;
    top: 50%;
    /* move up by half its own size to center align within div */
    transform: translateY(-50%);
  }

  .rotate {
    --turn: 0turn;
    transform: rotate(var(--turn));
    transition: transform 0.7s ease-in;
  }

  .right {
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