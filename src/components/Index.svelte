<script>
  import Header from '$components/Header.svelte';
  import ScrollyWrapper from '$components/ScrollyWrapper.svelte';
  import Footer from '$components/Footer.svelte';
</script>

<Header />

<section class="intro body-copy">
  <p>Once upon a time, in a world swept away by magic and melody, <em>Frozen</em> captured hearts everywhere with its timeless tale of love, courage and self-acceptance. With unforgettable songs, beloved characters and a warmth that resonated across generations, <em>Frozen</em> didn’t just tick the boxes of a Disney classic; it became a worldwide sensation.</p>
  <p>In Japan, <em>Frozen</em> was having a cultural moment of its own. Embraced by children and adults alike, the soaring ballad “Let It Go” (ありのままで, or <em>ari no mama de</em> in Japanese) echoed through classrooms, living rooms and concert halls. The franchise's remarkable success was no coincidence; it was the beautiful result of a powerful story brought to life with every facet of The Walt Disney Company — from studio production to merchandise and theme park experiences — working in harmony.</p>
  <div class="small-wheel">
    
  </div>
</section>

<section class="flywheel">
  <ScrollyWrapper />
</section>

<section class="outro body-copy">
  <p>Today, <em>Frozen</em> continues to inspire fans across generations. As the countdown to <em>Frozen 3</em> begins, the enchanting world of Arendelle is poised to reveal even more frosty adventures and heartwarming moments that will captivate our hearts and spark imagination once again.</p>
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