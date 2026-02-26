<script>
  import { arc, pie } from "d3-shape";
  import { range } from "d3-array";
  import { scaleLinear } from "d3-scale";
  import { data, NUM_NODES, SHORT_CATEGORY_NAMES } from "$data/data.js";
  import colours from "$data/colours.json";

  let { width, height } = $props();

  const MARGIN = 50;
  const ARC_WIDTH = 18;
  const NODE_RADIUS = 4;
  const labelStartAngle = 360/NUM_NODES/2 - 90;

  const toDegrees = (radians) => radians * 180/Math.PI;

  const outerRadius = $derived(Math.min(width, height) * 0.5 - MARGIN);
  const innerRadius = $derived(outerRadius - ARC_WIDTH);

  const nodeScale = scaleLinear()
    .domain([0, NUM_NODES])
    .range([-90, 270]);

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
    // .value((d) => d.labels.length);
    .value((d, i) => SHORT_CATEGORY_NAMES[i].length + 10);

  const wheelData = wheelPie(data);
</script>

<svg 
  viewBox="0, 0, {width}, {height}"
  width={width}
  height={height}
>
  <g 
    class="pie"
    transform="translate({width/2}, {height/2})"
  >
    {#each wheelData as slice, i}
    {@const centroid = slice.startAngle + (slice.endAngle - slice.startAngle)/2}
    {@const category = slice.data.category}
      <path class="arc {category}" id="path-{category}"
        d={wheelArc(slice)} 
        fill={colours[category]}
      />
      <!-- TO DO: textpath for labels along an arc -->
      <text class="category {category}"
        x="11"
        dy="-8"
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
  <!-- <g class="nodes"
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
  </g> -->
</svg>

<style>
  .node {
    fill: white;
  }

  text {
    font-size: 0.875rem;
    font-weight: 700;
  }
</style>