import colours from "$data/colours.json";
import { symbolPlus } from "d3-shape";

const narrative = [
  { step: 0, 
    highlight: "all", 
    rotation: 0,
    gradientColours: [colours["disney-plus"], colours["studio"]] 
  },
  { step: 1, 
    highlight: "studio", 
    rotation: 8.5,
    gradientColours: [colours["studio"], colours["experiences"]] 
  },
  { step: 2, 
    highlight: "experiences", 
    rotation: 2.5,
    gradientColours: [colours["experiences"], colours["content-sales"]] 
  },
  { step: 3, 
    highlight: "content-sales", 
    rotation: -2,
    gradientColours: [colours["content-sales"], colours["music"]] 
  },
  { step: 4, 
    highlight: "music", 
    rotation: -5,
    gradientColours: [colours["music"], colours["games"]] 
  },
  { step: 5, 
    highlight: "games", 
    rotation: -8,
    gradientColours: [colours["games"], colours["channel"]] 
  },
  { step: 6, 
    highlight: "channel", 
    rotation: -11,
    gradientColours: [colours["channel"], colours["fan"]] 
  },
  { step: 7, 
    highlight: "fan", 
    rotation: -14,
    gradientColours: [colours["fan"], colours["publishing"]] 
  },
  { step: 8, 
    highlight: "publishing", 
    rotation: -17,
    gradientColours: [colours["publishing"], colours["entertainment"]] 
  },
  { step: 9, 
    highlight: "entertainment", 
    rotation: -21,
    gradientColours: [colours["entertainment"], colours["stores"]] 
  },
  { step: 10, 
    highlight: "stores", 
    rotation: -24,
    gradientColours: [colours["stores"], colours["products"]] 
  },
  { step: 11, 
    highlight: "products", 
    rotation: -28,
    gradientColours: [colours["products"], colours["disney-plus"]] 
  },
  { step: 12, 
    highlight: "disney-plus", 
    rotation: -35,
    gradientColours: [colours["disney-plus"], colours["studio"]] 
  }
];

export default narrative;
