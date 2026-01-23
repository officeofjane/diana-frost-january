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

    .bg rect, ellipse, circle {
      transform-box: fill-box;
      transform-origin: 50%
    }

    .bg ellipse, circle {
      cx: 50%;
      cy: 50%;
      filter: blur(calc(4vmin + 4vmax))
    }

    .bg {
    
    &:nth-child(1) {
      ellipse {
        translate: -10% -5%;
        rotate: -22.5deg
      }
      
      circle {
        cy: 57.5%;
        rotate: 45deg;
        translate: -10% -5%;
      }
    }
    
    &:nth-child(2) {
      ellipse {
        rotate: -22.5deg;
        mix-blend-mode: color-dodge;
        
        &:nth-of-type(2) {
          cx: 62.5%;
          rotate: 45deg
        }
        
        &:nth-of-type(3) {
          cy: 37.5%;
          rotate: -75deg
        }
      }
    }
    
    &:nth-child(3) {
      ellipse {
        translate: 5%;
        rotate: -30deg
      }
      
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
      ellipse { cx: 40% }
      circle {
        cx: 65%;
        cy: 65%
      }
    }
    
    &:nth-child(5) {
      ellipse {
        cx: 45%;
        cy: 45%;
        rotate: -22.5deg;
        
        &:nth-of-type(2) { rotate: -35deg }
      }
    }
    
    &:nth-child(6) {
      ellipse {
        cx: 15%;
        cy: 85%;
        rotate: 45deg;
        
        &:nth-of-type(2) {
          cx: 70%;
          cy: 50%;
          rotate: -35deg
        }
        
        &:nth-of-type(3) {
          cx: 45%;
          cy: 35%;
          rotate: 50deg
        }
      }
      
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
    
    &:nth-child(8) {
      ellipse {
        cx: 55%;
        cy: 75%;
        rotate: -22.5deg
      }
    }
    
    &:nth-child(9) {
      ellipse {
        cy: 75%;
        rotate: 9deg
      }
      
      circle { cy: 52.5% }
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