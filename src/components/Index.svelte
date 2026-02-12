<script>
  import { getContext } from 'svelte';

  import Header from '$components/Header.svelte';
  import SmallWheel from '$components/SmallWheel.svelte';
  import Wheel from '$components/Wheel.svelte';
  import ScrollyWrapper from '$components/ScrollyWrapper.svelte';
  import Footer from '$components/Footer.svelte';

  const copy = getContext("copy");
</script>

<Header 
  hed={copy.hed}
  subhed={copy.subhed}
/>

<section class="intro body-copy">
  {#each copy.intro as p}
    <p>{@html p.text}</p>
  {/each}
  <div class="small-wheel-wrapper">
    <SmallWheel width=400 height=400 />
  </div>
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
  .body-copy {
    max-width: var(--copy-width);
    margin: 0 auto;
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  .intro p:first-of-type::first-letter {
    color: white;
    background-color: black;
    border-radius: 2px;
    box-shadow: 3px 3px 0 red;
    font-size: 2.25rem;
    font-weight: 700;
    padding: 8px 8px;
    margin-right: 6px;
    float: left;
  }

  .small-wheel-wrapper {
    display: flex;
    justify-content: center;

    /* background-color: whitesmoke; */
  }
</style>