<script>
  import { arc, pie } from "d3-shape";
  import { range } from "d3-array";
  import { scaleLinear } from "d3-scale";
  import { data } from "$data/data.js";
  import colours from "$data/colours.json";

  let { width, height } = $props();

  const MARGIN = 120;
  const ARC_WIDTH = 21;
  const NUM_NODES = 50;
  const NODE_RADIUS = 6;

  const nodeScale = scaleLinear()
    .domain([0, NUM_NODES])
    .range([0, 360]);

  const outerRadius = $derived(Math.min(width, height) * 0.5 - MARGIN);
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
  <defs>
    <radialGradient id="gradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
    <mask id="mask">
      <rect x="0" y="0" width={width} height={height} fill="url(#gradient)" />
    </mask>
  </defs>

  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice}
      <path 
        d={wheelArc(slice)} 
        stroke="white" 
        fill={colours[slice.data.category]}
      />
    {/each}
  </g>

  <g class="nodes"
    transform="translate({width/2}, {height/2})"
  >
    {#each range(NUM_NODES) as node}
      <circle class="node" 
      cx="0" 
      cy={(outerRadius-ARC_WIDTH/2)}
      r={NODE_RADIUS} 
      transform="rotate({nodeScale(node) + 360/NUM_NODES/2})" 
    />
    {/each}
  </g>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
  }
  
  .node {
    fill: white;
  }
</style>