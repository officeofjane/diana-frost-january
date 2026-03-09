<script>
  import { getContext } from 'svelte';

  import SnowParticles from "$components/SnowParticles.svelte";
  import Header from '$components/Header.svelte';
  import SmallWheel from '$components/SmallWheel.svelte';
  import Wheel from '$components/Wheel.svelte';
  import ScrollyWrapper from '$components/ScrollyWrapper.svelte';
  import Snowflake from '$components/Snowflake.svelte';

  const copy = getContext("copy");
</script>

<div class="background-wrapper">
  <SnowParticles />
  <div class="content-wrapper">
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
      <Snowflake />
    </section>

    <section class="flywheel">
      <ScrollyWrapper />
    </section>

    <section class="outro body-copy">
      {#each copy.outro as p}
        <p>{@html p.text}</p>
      {/each}
      <img src="./images/frozen-iii.webp" alt="" />
      <Snowflake />
    </section>

  </div>
</div>

<style>
  .background-wrapper {
    position: relative;
    background:
      radial-gradient(ellipse 60% 40% at 10% 20%,  hsl(168, 35%, 88%) 0%, transparent 60%),
      radial-gradient(ellipse 70% 55% at 90% 85%,  hsl(270, 45%, 82%) 0%, transparent 65%),
      radial-gradient(ellipse 90% 70% at 55% 50%,  hsl(210, 55%, 88%) 0%, transparent 75%),
      radial-gradient(ellipse 60% 50% at 85% 10%,  hsl(200, 50%, 92%) 0%, transparent 60%),
      radial-gradient(ellipse 100% 40% at 30% 100%, hsl(240, 50%, 84%) 0%, transparent 70%),
      hsl(200, 0%, 100%);
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    mix-blend-mode: multiply; 
  }

  .background-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150dvh;
    background: linear-gradient(to bottom, white 0%, white 66%, transparent 100%);
    pointer-events: none;
    z-index: -1;
  }

  .background-wrapper::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }

  .content-wrapper {
    margin-top: calc(-60dvh);
  }

  .body-copy {
    max-width: var(--copy-width);
    margin: 0 auto;
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  /* .intro p:first-of-type::first-letter {
    color: white;
    background-color: black;
    border-radius: 2px;
    box-shadow: 3px 3px 0 red;
    font-size: 2.25rem;
    font-weight: 700;
    padding: 8px 8px;
    margin-right: 6px;
    float: left;
  } */

  .intro p:first-of-type::first-letter, .outro p:first-of-type::first-letter {
    font-family: var(--serif);
    font-weight: 300;
    font-size: 4.2em;
    line-height: 0.75;
    float: left;
    margin-right: 6px;
    margin-top: 4px;
    background: linear-gradient(160deg, var(--sky), var(--teal));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .small-wheel-wrapper {
    display: flex;
    justify-content: center;

    animation: rotateInfinite 80s linear infinite;
  }

  img {
    object-fit: cover;
    border-radius: 8px;
  }

  .outro {
    padding: 200px 0px;
  }

  .outro img {
    margin-bottom: 28px;
  }
</style>