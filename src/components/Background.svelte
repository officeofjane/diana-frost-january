<script>
  let { bgColours = [] } = $props();
</script>

<svg width="0" height="0" aria-hidden="true">
  <!-- use units relative to input size-->
  <!-- sRGB is what we normally want (but not default)-->
  <filter id="grain" color-interpolation-filters="sRGB" primitiveUnits="objectBoundingBox">
    <!-- generate fine noise-->
    <feTurbulence type="fractalNoise" baseFrequency=".713" numOctaves="4"></feTurbulence>
    <!-- use noise as displacement map-->
    <feDisplacementMap in="SourceGraphic" scale=".1" xChannelSelector="R"></feDisplacementMap>
    <!-- place filter input underneath to cover transparent edge pixels-->
    <feBlend in2="SourceGraphic"></feBlend>
  </filter>
</svg>

<svg class="bg">
  <linearGradient id="g01">
    <stop stop-color={bgColours[0]} offset=".2"></stop>
    <stop stop-color={bgColours[1]} offset="1"></stop>
  </linearGradient>
  <g>
    <rect width="100%" height="100%" fill="#E4EAE4" fill-opacity="0.1" />
    <circle r="25%" fill="url(#g01)"></circle>
  </g>
</svg>

<style>
  /* noise background gradient */
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }

  .bg g { 
    filter: url(#grain) 
  }

  .bg rect, circle {
    transform-box: fill-box;
    transform-origin: 50%
  }

  .bg circle {
    cx: 50%;
    cy: 50%;
    filter: blur(calc(4vmin + 4vmax))
  }

  .bg {
    
    &:nth-child(1) {
      circle {
        cy: 57.5%;
        rotate: 45deg;
        translate: -10% -5%;
      }
    }
    
    &:nth-child(3) {
      circle {
        cx: 37.5%;
        cy: 25%;
        rotate: 45deg;
        
        &:first-of-type {
          cx: 62.5%;
          cy: 62.5%
        }
      }
    }
    
    &:nth-child(4) {
      circle {
        cx: 65%;
        cy: 65%
      }
    }
    
    &:nth-child(6) {
      circle {
        cy: 100%;
        
        &:nth-of-type(2) { cx: 100% }
        
        &:nth-of-type(3) {
          cx: 30%;
          cy: 65%
        }
      }
    }
    
    &:nth-child(7) {
      circle {
        cx: 20%;
        cy: 60%;
        rotate: 135deg;
        
        &:nth-of-type(2) {
          cx: 42.5%;
          cy: 30%;
          rotate: -45deg
        }
        
        &:nth-of-type(3) {
          cx: 105%;
          cy: 35%;
          rotate: 240deg
        }
        
        &:nth-of-type(4) {
          cx: 99%;
          cy: 85%;
          rotate: 90deg
        }
      }
    }
    
    &:nth-child(10) {
      circle {
        cx: 75%;
        cy: 25%;
        rotate: -45deg;
        
        &:nth-of-type(2) {
          cx: 57.5%;
          cy: 57.5%;
          rotate: -60deg
        }
      }
    }
  }
</style>