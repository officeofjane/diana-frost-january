<script>
  import { arc, pie } from "d3-shape";
  import { data } from "$data/data.js";

  let { width, height } = $props();

  const outerRadius = $derived(Math.min(width, height) * 0.5 - 60);
  const innerRadius = $derived(outerRadius - 24);

  const wheelArc = $derived.by(() => {
    const d = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    return d;
  });

  const wheelPie = pie()
    .sort(null)
    .value((d) => d.count);
  const wheelData = wheelPie(data);

</script>

<svg viewBox="0, 0, {width}, {height}">
  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice}
      <path d={wheelArc(slice)} stroke="white" fill="blue"/>
    {/each}
  </g>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }
  
  rect {
    fill: blue;
  }
</style>