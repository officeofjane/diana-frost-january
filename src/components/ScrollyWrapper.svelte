<script>
  import { getContext } from 'svelte';
  import narrative from '$data/narrative.js';
  import { NUM_NODES } from '$data/data.js';
  import Scrolly from '$components/helpers/Scrolly.svelte';
  import Wheel from '$components/Wheel.svelte';
  
  import Step0 from '$components/layout/Step0.svelte';
  import Step1 from '$components/layout/Step1.svelte';
  import Step2 from '$components/layout/Step2.svelte';
  import Step3 from '$components/layout/Step3.svelte';
  import Step4 from '$components/layout/Step4.svelte';
  import Step5 from '$components/layout/Step5.svelte';
  import Step6 from '$components/layout/Step6.svelte';
  import Step7 from '$components/layout/Step7.svelte';
  import Step8 from '$components/layout/Step8.svelte';
  import Step9 from '$components/layout/Step9.svelte';
  import Step10 from '$components/layout/Step10.svelte';
  import Step11 from '$components/layout/Step11.svelte';
  import Step12 from '$components/layout/Step12.svelte';

  const copy = getContext("copy");

  let scrollIndex = $state(0);

  let wheelWrapperWidth = $state(0);
  let wheelWrapperHeight = $state(0);

  const layoutSteps = [Step0, Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10, Step11, Step12];

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
    </div>
    <!-- pass down isActive state prop into step layout component, then apply class inside component to trigger animation -->
    <div class="right">
      {#each narrative as step, i}
      {@const LayoutStep = layoutSteps[i]}
        <div class="bg step-{i}" class:active={scrollIndex === i}>
          <LayoutStep isActive={scrollIndex === i}></LayoutStep>
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
      
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 16px;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.82);
      backdrop-filter: blur(20px) saturate(1.4);
      /* box-shadow: var(--shadow-elevation-medium); */
      box-shadow:
        0 4px 24px rgba(15, 31, 75, 0.08),
        0 1px 4px rgba(15, 31, 75, 0.06),
        inset 0 1px 0 rgba(255, 255, 255, 0.95);
    }
  }

  .copy :global(p span) {
    display: inline-block;
    padding: 0 6px;
    border-radius: 6px;
    font-weight: 700;
    letter-spacing: 0.2px;

    background: hsla(204, 85%, 48%, 0.08);
    color: var(--color-games);
  }

  .copy :global(.studio) {
    background: hsla(155, 65%, 42%, 0.08);
    color: var(--color-studio);
  }

  .copy :global(.experiences) {
    background: hsla(168, 72%, 45%, 0.08);
    color: var(--color-experiences);
  }

  .copy :global(.content-sales) {
    background: hsla(185, 80%, 50%, 0.08);
    color: var(--color-content-sales);
  }

  .copy :global(.music) {
    background: hsla(198, 75%, 55%, 0.08);
    color: var(--color-music);
  }

  .copy :global(.games) {
    background: hsla(204, 85%, 48%, 0.08);
    color: var(--color-games);
  }

  .copy :global(.channel) {
    background: hsla(212, 70%, 52%, 0.08);
    color: var(--color-channel);
  }

  .copy :global(.fan) {
    background: hsla(225, 65%, 58%, 0.08);
    color: var(--color-fan);
  }

  .copy :global(.publishing) {
    background: hsla(238, 62%, 62%, 0.08);
    color: var(--color-publishing);
  }

  .copy :global(.entertainment) {
    background: hsla(250, 60%, 60%, 0.08);
    color: var(--color-entertainment);
  }

  .copy :global(.stores) {
    background: hsla(263, 55%, 62%, 0.08);
    color: var(--color-stores);
  }

  .copy :global(.products) {
    background: hsla(278, 52%, 65%, 0.08);
    color: var(--color-products);
  }

  .copy :global(.disney-plus) {
    background: hsla(290, 45%, 62%, 0.08);
    color: var(--color-disney-plus);
    }
</style>