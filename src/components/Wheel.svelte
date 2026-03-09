<script>
  import { arc, pie } from "d3-shape";
  import { range } from "d3-array";
  import { scaleLinear } from "d3-scale";
  import { data, NUM_NODES } from "$data/data.js";
  import colours from "$data/colours.json";

  let { width, height, highlight = "" } = $props();

  const MARGIN = 160;
  const ARC_WIDTH = 24;
  const NODE_RADIUS = 6;
  const labelStartAngle = 360/NUM_NODES/2 - 90;

  const toDegrees = (radians) => radians * 180/Math.PI;

  const nodeScale = scaleLinear()
    .domain([0, NUM_NODES])
    .range([-90, 270]);

  const outerRadius = $derived(Math.min(width, height) * 0.5 - MARGIN);
  const innerRadius = $derived(outerRadius - ARC_WIDTH);

  const wheelArc = $derived.by(() => {
    const d = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(0.015)
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
    .value((d) => d.labels.length);
  const wheelData = wheelPie(data);

  // console.log(wheelData);
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
    {@const category = slice.data.category}
      <rect class="highlight {category}"
        x=0 y=0 width={width} height={height} 
        fill={colours[category]} 
        fill-opacity="0.3"
        opacity={category === highlight ? 1 : 0}
        mask="url(#mask)" 
        clip-path="url(#highlight-clip-{category})"
      />
    {/each}
  </g>
  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice}
    {@const centroid = slice.startAngle + (slice.endAngle - slice.startAngle)/2}
    {@const category = slice.data.category}
      <path class="arc {category}"
        d={wheelArc(slice)} 
        fill={colours[category]}
      />
      <text class="category {category}"
        x="-14"
        dy="-0.5em"
        fill={colours[category]}
        opacity={category === highlight ? 1 : 0}
        text-anchor="end"
        transform="rotate({toDegrees(centroid) + labelStartAngle}) translate({innerRadius}, 0)" 
      >
        {slice.data.name}
      </text>
    {/each}
  </g>

  <g class="labels"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice, i}
    {@const category = slice.data.category}
      {#each slice.data.labels as label, k}
        <text class="label {category}"
          x="8"
          dy="0.35em"
          style="--label-colour: {category === highlight  || highlight === "all" ? colours[category] : 'inherit'}"
          fill="var(--label-colour)"
          transform="rotate({toDegrees(slice.startAngle) + (360/NUM_NODES * k) + labelStartAngle}) translate({outerRadius}, 0)" 
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
    
    --gray: rgb(125, 137, 155);
    --label-colour: var(--gray);
  }
  
  .node {
    fill: white;
  }

  text {
    font-size: 1rem;
    font-weight: 500;

    &.category {
      font-size: 1.25rem;
      font-weight: 700;
    }

    &.label {
      fill: var(--label-colour);
    }
  }

</style>