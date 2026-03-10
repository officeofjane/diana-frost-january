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
  </div>

  <div class="steps-wrapper">
    <Scrolly bind:value={scrollIndex}>
      {#each narrative as step, i}
      {@const LayoutStep = layoutSteps[i]}
        <div class="step step-{i}">
          <LayoutStep isActive={scrollIndex === i} copy={copy.scrolly[i]}></LayoutStep>
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

  .left {
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
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

  .step {
    width: 100%;
    height: 100vh;
  }
</style>