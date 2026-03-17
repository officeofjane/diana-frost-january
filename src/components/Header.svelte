<script>
  import Trees from "$components/Trees.svelte";
  import Snowflake from "$components/Snowflake.svelte";

  let { hed, subhed } = $props();
</script>

<div class="container">
  <Trees />
  <div class="content-wrapper">
    <img class="logo" src="./images/frozen-logo.webp" alt="logo"/>
    <div class="headline">
      <h1>{@html hed}</h1>
      <Snowflake />
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
    position: relative;
    height: 100dvh;
    overflow: hidden;
    display: grid;
    place-content: center;

    background:
      linear-gradient(to bottom, transparent 70%, white 100%),
        linear-gradient(
          180deg,
          hsl(240, 45%, 82%)   0%,
          hsl(225, 50%, 84%)   10%,
          hsl(210, 55%, 85%)   25%,
          hsl(200, 60%, 86%)   45%,
          hsl(190, 58%, 88%)   65%,
          hsl(180, 48%, 90%)   80%,
          hsl(175, 42%, 93%)   100%
        );
  }

  .content-wrapper {
    height: 100%;
    margin: 28px 16px 16px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .content-wrapper .headline {
    margin-bottom: 16px;
  }

  .logo {
    display: block;
    width: 170px;
    filter: drop-shadow(2px 4px 6px hsl(215deg 55% 40% / 0.4));
  }

  h1 {
    max-width: 1024px;
    /* font-family: var(--serif-caladea); */
    font-family: var(--serif-lora);
    font-size: 3.25rem;
    font-weight: 550;
    letter-spacing: -0.01em;
    line-height: 1.35;
    color: white;
    text-shadow: 
      0 0 .1rem hsl(211deg 46% 53%),
      0 0 .3rem hsl(210deg 29% 53%),
      0 0 .5rem hsl(208deg 30% 58%),
      0 0 .7rem hsl(205deg 33% 69%),
      0 0 1rem hsl(205deg 60% 84%),
      0 0 1.5rem hsl(202deg 60% 88%),
      0 0 2rem hsl(201deg 44% 87%);
    filter: drop-shadow(3px 3px 3px hsl(216deg 72% 36% / 0.3)); 

    animation: riseReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  h2 {
    font-family: var(--serif-caladea);
    font-style: italic;
    font-weight: 400;
    font-size: 1.375rem;
    letter-spacing: 0.04em;
    color: var(--subhead-text-color);
    opacity: 0.9;
  }

  .arrow {
    width: 2rem;
    animation: jumpInfinite 2s ease-in-out infinite;
    fill: var(--subhead-text-color);
  }
</style>