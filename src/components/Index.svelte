<script>
  import { getContext } from 'svelte';

  import Header from '$components/Header.svelte';
  import Wheel from '$components/Wheel.svelte';
  import ScrollyWrapper from '$components/ScrollyWrapper.svelte';
  import Footer from '$components/Footer.svelte';

  const copy = getContext("copy");

  // this goes into ScrollyWrapper when done proper?
  let wheelWrapperWidth = $state(0);
  let wheelWrapperHeight = $state(0);
</script>

<Header 
  hed={copy.hed}
  subhed={copy.subhed}
/>

<section class="wheel-test">
  <div class="sticky">
    <div 
      class="wheel-wrapper"
      bind:offsetWidth={wheelWrapperWidth}
      bind:offsetHeight={wheelWrapperHeight}
    >
      <Wheel width={wheelWrapperWidth} height={wheelWrapperHeight}/>
    </div>
  </div>
</section>

<section class="intro body-copy">
  {#each copy.intro as p}
    <p>{@html p.text}</p>
  {/each}
  <div class="small-wheel"></div>
  <p>{@html copy.transition}</p>
</section>

<section class="flywheel">
  <ScrollyWrapper />
</section>

<section class="outro body-copy">
  {#each copy.outro as p}
    <p>{@html p.text}</p>
  {/each}
</section>

<Footer />

<style>
  .sticky {
    position: relative;
    max-width: 400px;
    height: 100vh;
    background-color: whitesmoke;
    margin: 0 auto;   
    overflow: hidden;
  }

  .wheel-wrapper {
    position: absolute;
    width: 200%;
    aspect-ratio: 1;
    top: 50%;
    transform: translateY(-50%);
    left: -100%;
  }

  .body-copy {
    max-width: var(--copy-width);
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .small-wheel {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: whitesmoke;
  }
</style>