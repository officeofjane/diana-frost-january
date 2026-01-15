<script>
  import { arc, pie } from "d3-shape";
  import { data } from "$data/data.js";
  import colours from "$data/colours.json";

  let { width, height } = $props();

  const ARC_WIDTH = 24;

  const outerRadius = $derived(Math.min(width, height) * 0.5 - 60);
  const innerRadius = $derived(outerRadius - ARC_WIDTH);

  const wheelArc = $derived.by(() => {
    const d = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(0.01)
      .cornerRadius(ARC_WIDTH);
    return d;
  });

  const wheelPie = pie()
    .sort(null)
    .value((d) => d.count);
  const wheelData = wheelPie(data);

  console.log(wheelData);

</script>

<svg viewBox="0, 0, {width}, {height}">
  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice}
      <path d={wheelArc(slice)} stroke="white" fill={colours[slice.data.category]}/>
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