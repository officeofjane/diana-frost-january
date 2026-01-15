<script>
  import { getContext } from 'svelte';

  import Header from '$components/Header.svelte';
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