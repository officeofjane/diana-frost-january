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
  const RADIANS = 180/Math.PI;

  const nodeScale = scaleLinear()
    .domain([0, NUM_NODES])
    .range([-90, 270]);

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

  const highlightArc = $derived.by(() => {
    const d = arc()
      .innerRadius(innerRadius)
      .outerRadius(width/2)
      .padAngle(0.01)
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
      <stop offset="0" stop-color="white" />
      <stop offset="1" stop-color="black" />
    </radialGradient>
    <mask id="mask">
      <rect x=0 y=0 width={width} height={height} fill="url(#gradient)"/>
    </mask>
    {#each wheelData as slice}
      <clipPath id="highlight-clip-{slice.data.category}">
        <path
          d={highlightArc(slice)}
          transform="translate({width/2}, {height/2})"
        />
      </clipPath>
    {/each}
  </defs>

  <g class="highlights">
    {#each wheelData as slice}
      <rect class="highlight-{slice.data.category}"
        x=0 y=0 width={width} height={height} 
        fill={colours[slice.data.category]} 
        fill-opacity="0.3"
        mask="url(#mask)" 
        clip-path="url(#highlight-clip-{slice.data.category})"
      />
    {/each}
  </g>
  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice}
      <path class="arc"
        d={wheelArc(slice)} 
        fill={colours[slice.data.category]}
      />
    {/each}
  </g>

  <g class="labels"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice, i}
      {#each slice.data.labels as label, k}
        <text
          x="8"
          dy="0.35em"
          fill={colours[slice.data.category]}
          transform="rotate({slice.startAngle * RADIANS + 360/NUM_NODES/2 - 90 + (360/NUM_NODES * k)}) translate({outerRadius}, 0)" 
        >
          {label}
        </text>
      {/each}
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
      transform="rotate({nodeScale(node)})" 
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