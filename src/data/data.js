const data = [
  { category: "studio", 
    name: "Studio",
    labels: ["Disney Live Action", "Disney Animation", "Pixar", "Marvel Studios", "Lucasfilm", "20th Century", "Searchlight Pictures"]
  },
  { category: "experiences", 
    name: "Experiences",
    labels: ["Tokyo Disneyland", "Tokyo Disneysea", "Hotels", "Disney Resort Line", "Disney Cruise Line"]
  },
  { category: "content-sales", 
    name: "Content Sales",
    labels: ["DVD/Blu-ray", "SVOD", "TVOD", "EHV", "Linear"]
  },
  { 
    category: "music", 
    name: "Music",
    labels: ["Album Releases", "Playlists"]
  },
  { 
    category: "games", 
    name: "Games",
    labels: ["Mobile Devices", "Console Games", "Computer Games"]
  },
  { 
    category: "channel", 
    name: "Channel",
    labels: ["Disney Channel", "Disney Junior", "D Life", "National Geographic"]
  },
  { 
    category: "fan", 
    name: "Fan",
    labels: ["Fan Fest", "Conventions"]
  },
  { 
    category: "publishing", 
    name: "Publishing",
    labels: ["Digital Asset Licensing", "Learning Books", "Books and Magazines"]
  },
  { 
    category: "entertainment",
    name: "Live Entertainment",
    labels: ["Disney Music & Fireworks", "Disney On Ice", "Shiki Musicals", "Concerts", "Immersive Exhibitions"]
  },
  { 
    category: "stores", 
    name: "Stores",
    labels: ["Shop Disney (Online)", "Disney Store Japan"]
  },
  { 
    category: "products", 
    name: "Consumer Products",
    labels: ["Beauty", "Food/Pet", "Fashion", "Home", "Stationery", "Toys"]
  },
  { 
    category: "disney-plus", 
    name: "Disney+",
    labels: ["Disney", "Pixar", "Marvel", "Star Wars", "National Geographic", "Star"]
  }
];

const NUM_NODES = data.map(d => d.labels).flat().length;

export { data, NUM_NODES };