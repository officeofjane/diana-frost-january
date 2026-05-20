import colours from "$data/colours.json";
import { symbolPlus } from "d3-shape";

const narrative = [
  { step: 1, 
    highlight: "studio", 
    rotation: 8.5
  },
  { step: 2, 
    highlight: "experiences", 
    rotation: 2.5
  },
  { step: 3, 
    highlight: "content-sales", 
    rotation: -2.5
  },
  { step: 4, 
    highlight: "music", 
    rotation: -6
  },
  { step: 5, 
    highlight: "games", 
    rotation: -8.5
  },
  { step: 6, 
    highlight: "channel", 
    rotation: -12
  },
  { step: 7, 
    highlight: "fan", 
    rotation: -15
  },
  { step: 8, 
    highlight: "publishing", 
    rotation: -17.5
  },
  { step: 9, 
    highlight: "entertainment", 
    rotation: -21.5
  },
  { step: 10, 
    highlight: "stores", 
    rotation: -25
  },
  { step: 11, 
    highlight: "products", 
    rotation: -29
  },
  { step: 12, 
    highlight: "disney-plus", 
    rotation: -35
  }
];

export default narrative;
