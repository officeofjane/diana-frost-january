<script>
  import { arc, pie } from "d3-shape";
  import { range } from "d3-array";
  import { scaleLinear } from "d3-scale";
  import { data, NUM_NODES, SHORT_CATEGORY_NAMES } from "$data/data.js";
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

  const labelsArc = $derived.by(() => {
    const d = arc()
      .innerRadius(innerRadius - ARC_WIDTH)
      .outerRadius(innerRadius)
      .padAngle(0.01)
    return d;
  });

  const wheelPie = pie()
    .sort(null)
    .value((d) => d.labels.length);
  const wheelData = wheelPie(data);

  console.log(wheelData);
</script>

<svg viewBox="0, 0, {width}, {height}">
  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice, i}
    {@const centroid = slice.startAngle + (slice.endAngle - slice.startAngle)/2}
    {@const category = slice.data.category}
      <path class="arc {category}"
        d={wheelArc(slice)} 
        fill={colours[category]}
      />
      <path class="labels-arc {category}" id="path-{category}"
        d={labelsArc(slice)} 
        fill="none"
      />
      <text class="category-label {category}"
        x="4"
        dy="18"
        opacity="1"
        fill={colours[category]}
      >
        <textPath href="#path-{category}"
          text-anchor="start"
        >
          {SHORT_CATEGORY_NAMES[i]}
        </textPath>
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

  .category-label {
    font-weight: 700;
    letter-spacing: 0.5px;
  }

</style>