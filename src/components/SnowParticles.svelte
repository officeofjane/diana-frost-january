<script>
  import { onMount } from 'svelte';

  let canvas;
  let animationFrame;

  const CANVAS_HEIGHT = 0.6;
  const SNOWFLAKE_AMOUNT = 80;
  const SNOWFLAKE_SIZE = { min: 1, max: 5 };
  const SNOWFLAKE_SPEED = { min: 0.2, max: 1.2 };

  onMount(() => {
    drawCanvas(canvas);
  });

  function drawCanvas(c) {
    startSnowAnimation();
  }

  const startSnowAnimation = () => {
    const setup = setUpCanvas();
    if (!setup) { return }
    const { canvas, ctx } = setup;

    const snowflakes = Array(SNOWFLAKE_AMOUNT)
      .fill(undefined)
      .map((_event, index) => createSnowflake(canvas, true, index));

    const animate = () => {

    }
  };

  const createSnowflake = (canvas, isAnimated = true, index = 0) => {
    return {
      x: Math.random() * canvas.width,
      y: isAnimated
        ? -20 - (index * canvas.height) / SNOWFLAKE_AMOUNT
        : Math.random() * canvas.height,
      size:
        Math.random() * (SNOWFLAKE_SIZE.max - SNOWFLAKE_SIZE.min) +
        SNOWFLAKE_SIZE.min,
      speed:
        Math.random() * (SNOWFLAKE_SPEED.max - SNOWFLAKE_SPEED.min) +
        SNOWFLAKE_SPEED.min,
      opacity: isAnimated ? null : Math.random() * 0.5 + 0.2
    }
  };

  const setUpCanvas = () => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * CANVAS_HEIGHT;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    return { canvas, ctx };
  }

</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>