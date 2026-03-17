import type { Game, Category } from "../types";

export const categories: Category[] = [
  { id: "all", label: "All games" },
  { id: "action", label: "Action" },
  { id: "rpg", label: "RPG" },
  { id: "puzzle", label: "Puzzle" },
  { id: "racing", label: "Racing" },
  { id: "sports", label: "Sports" },
  { id: "strategy", label: "Strategy" },
  { id: "casual", label: "Casual" },
  { id: "shooter", label: "Shooter" },
  { id: "adventure", label: "Adventure" },
  { id: "simulation", label: "Simulation" },
];

export const games: Game[] = [
  // ── Featured (5) ──────────────────────────────────────────────
  {
    id: "1",
    title: "Snack Quest",
    developer: "Brainwave Labs",
    category: "puzzle",
    rating: 4.6,
    reviewCount: 91200,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/pquest-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/pquest-banner/800/450",
    coverUrl: "https://picsum.photos/seed/pquest-cover/300/420",
    description:
      "Navigate a maze of scattered Goldfish crackers, rogue grapes, and suspicious sticky patches to reach the kitchen. Every level is a new biohazard.",
    tagline: "The floor is not a plate. Probably.",
    tags: ["Puzzle", "Adventure", "Offline"],
    badge: "Now available",
    isFeatured: true,
    themeColor: "#292933",
  },
  {
    id: "2",
    title: "Toddler Translator",
    developer: "Digit Factory",
    category: "puzzle",
    rating: 4.3,
    reviewCount: 35600,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/numcrunch-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/numcrunch-banner/800/450",
    coverUrl: "https://picsum.photos/seed/numcrunch-cover/300/420",
    description:
      'Decode cryptic toddler demands before the meltdown timer hits zero. Is "wawa baba nononono" a snack request or a critique of your driving? You have 10 seconds.',
    tagline: "Fluency not guaranteed.",
    tags: ["Puzzle", "Single player", "Offline"],
    badge: "Ends in 5 days",
    themeColor: "#7d7a7c",
  },
  {
    id: "3",
    title: "Bedtime Story Blitz",
    developer: "Lexicon Dev",
    category: "puzzle",
    rating: 4.5,
    reviewCount: 47800,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/wordstorm-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/wordstorm-banner/800/450",
    coverUrl: "https://picsum.photos/seed/wordstorm-cover/300/420",
    description:
      "Race to read the entire bedtime story before little eyes close — but every wrong word wakes them back up. Master the art of the dramatic pause.",
    tagline: "Read faster. Whisper softer.",
    tags: ["Puzzle", "Word", "Offline"],
    isFeatured: true,
    badge: "Editor's choice",
    themeColor: "#344540",
  },
  {
    id: "13",
    title: "Lego Floor Escape",
    developer: "Slide Co.",
    category: "puzzle",
    rating: 4.2,
    reviewCount: 28900,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/blockslide-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/blockslide-banner/800/450",
    coverUrl: "https://picsum.photos/seed/blockslide-cover/300/420",
    description:
      "Navigate the living room in the dark without stepping on a single Lego. One wrong move and it's game over. Barefoot mode unlocks at level 10.",
    tagline: "Silence. Precision. Suffering.",
    tags: ["Puzzle", "Single player", "Offline"],
    isFeatured: true,
    badge: "Season 2 live",
    themeColor: "#1a1a2e",
  },
  {
    id: "35",
    title: "Car Seat Kombat",
    developer: "Flow Games",
    category: "puzzle",
    rating: 4.1,
    reviewCount: 21300,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/pipedream-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/pipedream-banner/800/450",
    coverUrl: "https://picsum.photos/seed/pipedream-cover/300/420",
    description:
      "Buckle five different car seat models against the clock while a tiny human arches their back at maximum resistance. Bonus points for doing it in a parking garage.",
    tagline: "Click. Pull. Pray.",
    tags: ["Puzzle", "Casual", "Offline"],
    badge: "New season",
    isFeatured: true,
    themeColor: "#2d1b4e",
  },
  {
    id: "36",
    title: "Dad Joke Dojo",
    developer: "WarForge Studios",
    category: "strategy",
    rating: 4.5,
    reviewCount: 158000,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/clashcmd-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/clashcmd-banner/800/450",
    coverUrl: "https://picsum.photos/seed/clashcmd-cover/300/420",
    description:
      "Deploy puns, groan-worthy one-liners, and weaponized finger guns to defeat rivals in this real-time dad joke battle arena. Master the thousand-yard stare to unlock legendary tier.",
    tagline: "I used to hate facial hair. Then it grew on me.",
    tags: ["Strategy", "Multiplayer"],
    isFeatured: true,
    badge: "Free this week",
    themeColor: "#0d1117",
  },

  // ── Non-featured ──────────────────────────────────────────────
  {
    id: "4",
    title: "Galactic Strike",
    developer: "Orbit Works",
    category: "shooter",
    rating: 4.3,
    reviewCount: 56700,
    price: 2.99,
    iconUrl: "https://picsum.photos/seed/galactic-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/galactic-banner/800/450",
    coverUrl: "https://picsum.photos/seed/galactic-cover/300/420",
    description:
      "Classic arcade shooter reimagined. Defend the galaxy from relentless alien waves across 50+ hand-crafted stages.",
    tags: ["Shooter", "Arcade", "Offline"],
  },
  {
    id: "5",
    title: "Legends of Aether",
    developer: "Mythbound Games",
    category: "action",
    rating: 4.7,
    reviewCount: 201300,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/legends-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/legends-banner/800/450",
    coverUrl: "https://picsum.photos/seed/legends-cover/300/420",
    description:
      "Fast-paced action combat with a roster of 30+ unique heroes. Compete in ranked modes or team up in co-op raids.",
    tags: ["Action", "PvP", "Multiplayer"],
  },
  {
    id: "6",
    title: "Farm & Bloom",
    developer: "Cozy Pixel Co.",
    category: "casual",
    rating: 4.9,
    reviewCount: 487600,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/farm-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/farm-banner/800/450",
    coverUrl: "https://picsum.photos/seed/farm-cover/300/420",
    description:
      "Grow your dream farm in this relaxing life simulation. Plant crops, raise animals, and build a thriving community.",
    tags: ["Casual", "Simulation", "Offline"],
  },
  {
    id: "7",
    title: "Iron Citadel",
    developer: "Warlord Studio",
    category: "strategy",
    rating: 4.4,
    reviewCount: 73400,
    price: 4.99,
    iconUrl: "https://picsum.photos/seed/iron-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/iron-banner/800/450",
    coverUrl: "https://picsum.photos/seed/iron-cover/300/420",
    description:
      "Build, defend, and conquer in this deep real-time strategy game. Command armies and outwit rivals.",
    tags: ["Strategy", "RTS", "Offline"],
  },
  {
    id: "8",
    title: "Lost Isles",
    developer: "Wanderer Dev",
    category: "adventure",
    rating: 4.6,
    reviewCount: 115800,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/lost-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/lost-banner/800/450",
    coverUrl: "https://picsum.photos/seed/lost-cover/300/420",
    description:
      "Explore mysterious islands, uncover ancient secrets, and craft your way to survival in this open-world adventure.",
    tags: ["Adventure", "Survival", "Multiplayer"],
  },
  {
    id: "9",
    title: "Pixel Warriors",
    developer: "RetroForge",
    category: "action",
    rating: 4.2,
    reviewCount: 43200,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/pixel-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/pixel-banner/800/450",
    coverUrl: "https://picsum.photos/seed/pixel-cover/300/420",
    description:
      "Retro-inspired brawler with modern mechanics. Fight through pixel-art worlds in this side-scrolling action game.",
    tags: ["Action", "Retro", "Single player"],
  },
  {
    id: "10",
    title: "Space Colony",
    developer: "Orbital Games",
    category: "simulation",
    rating: 4.5,
    reviewCount: 98100,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/colony-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/colony-banner/800/450",
    coverUrl: "https://picsum.photos/seed/colony-cover/300/420",
    description:
      "Build and manage a thriving space colony. Harvest resources, research technologies, and expand your empire.",
    tags: ["Simulation", "Strategy", "Offline"],
  },
  {
    id: "11",
    title: "Dungeon Rush",
    developer: "Darklight Games",
    category: "rpg",
    rating: 4.4,
    reviewCount: 67800,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/dungeon-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/dungeon-banner/800/450",
    coverUrl: "https://picsum.photos/seed/dungeon-cover/300/420",
    description:
      "Descend into procedurally generated dungeons and battle monsters for loot in this roguelike RPG.",
    tags: ["RPG", "Roguelike", "Offline"],
  },
  {
    id: "12",
    title: "City Kart Racing",
    developer: "Nitro Games",
    category: "racing",
    rating: 4.1,
    reviewCount: 31500,
    price: 1.99,
    iconUrl: "https://picsum.photos/seed/kart-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/kart-banner/800/450",
    coverUrl: "https://picsum.photos/seed/kart-cover/300/420",
    description:
      "Fun kart racing through colorful city tracks. Collect power-ups and outrace your opponents.",
    tags: ["Racing", "Kart", "Multiplayer"],
  },
  {
    id: "14",
    title: "Brain Twist",
    developer: "MindBend Labs",
    category: "puzzle",
    rating: 4.5,
    reviewCount: 78300,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/brain-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/brain-banner/800/450",
    coverUrl: "https://picsum.photos/seed/brain-cover/300/420",
    description:
      "Challenge your mind with hundreds of logic puzzles, riddles, and brain teasers. New puzzles added weekly.",
    tags: ["Puzzle", "Casual", "Offline"],
  },
  {
    id: "15",
    title: "Hex Maze",
    developer: "Gridlock Studio",
    category: "puzzle",
    rating: 4.3,
    reviewCount: 52100,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/hex-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/hex-banner/800/450",
    coverUrl: "https://picsum.photos/seed/hex-cover/300/420",
    description:
      "Navigate intricate hexagonal mazes with twisting paths and hidden shortcuts. Over 200 hand-crafted levels.",
    tags: ["Puzzle", "Single player", "Offline"],
  },
  {
    id: "16",
    title: "City Builder Pro",
    developer: "Urban Craft Studios",
    category: "simulation",
    rating: 4.6,
    reviewCount: 134200,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/citybuilder-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/citybuilder-banner/800/450",
    coverUrl: "https://picsum.photos/seed/citybuilder-cover/300/420",
    description:
      "Design and manage a thriving metropolis. Zone districts, manage traffic, and keep your citizens happy.",
    tags: ["Simulation", "Strategy", "Offline"],
  },

  // ── Puzzle additions (to reach 9 non-featured puzzle games) ───
  {
    id: "17",
    title: "Puzzle Quest",
    developer: "Brainwave Labs",
    category: "puzzle",
    rating: 4.6,
    reviewCount: 91200,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/pquest-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/pquest-banner/800/450",
    coverUrl: "https://picsum.photos/seed/pquest-cover/300/420",
    description:
      "Embark on a quest through a land of puzzles. Solve each challenge to unlock the next chapter.",
    tags: ["Puzzle", "Adventure", "Offline"],
  },
  {
    id: "18",
    title: "Color Burst",
    developer: "Chroma Games",
    category: "puzzle",
    rating: 4.4,
    reviewCount: 63400,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/colorburst-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/colorburst-banner/800/450",
    coverUrl: "https://picsum.photos/seed/colorburst-cover/300/420",
    description:
      "Fill the board with color combos in this vibrant and addictive puzzle game.",
    tags: ["Puzzle", "Casual", "Offline"],
  },
  {
    id: "19",
    title: "Word Storm",
    developer: "Lexicon Dev",
    category: "puzzle",
    rating: 4.5,
    reviewCount: 47800,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/wordstorm-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/wordstorm-banner/800/450",
    coverUrl: "https://picsum.photos/seed/wordstorm-cover/300/420",
    description:
      "Race against the clock to find hidden words in shifting letter grids. Daily tournaments included.",
    tags: ["Puzzle", "Word", "Offline"],
  },
  {
    id: "20",
    title: "Number Crunch",
    developer: "Digit Factory",
    category: "puzzle",
    rating: 4.3,
    reviewCount: 35600,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/numcrunch-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/numcrunch-banner/800/450",
    coverUrl: "https://picsum.photos/seed/numcrunch-cover/300/420",
    description:
      "Merge, split, and chain numbers to reach the target score in this satisfying math puzzle.",
    tags: ["Puzzle", "Single player", "Offline"],
  },
  {
    id: "21",
    title: "Match Arena",
    developer: "Snap Studios",
    category: "puzzle",
    rating: 4.4,
    reviewCount: 112000,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/matcharena-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/matcharena-banner/800/450",
    coverUrl: "https://picsum.photos/seed/matcharena-cover/300/420",
    description:
      "Challenge players worldwide in real-time match-3 battles. Climb the leaderboards and earn rare rewards.",
    tags: ["Puzzle", "Multiplayer"],
  },
  {
    id: "22",
    title: "Block Slide",
    developer: "Slide Co.",
    category: "puzzle",
    rating: 4.2,
    reviewCount: 28900,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/blockslide-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/blockslide-banner/800/450",
    coverUrl: "https://picsum.photos/seed/blockslide-cover/300/420",
    description:
      "Slide blocks into place to clear each stage. Deceptively simple, endlessly tricky.",
    tags: ["Puzzle", "Single player", "Offline"],
  },
  {
    id: "23",
    title: "Pipe Dream",
    developer: "Flow Games",
    category: "puzzle",
    rating: 4.1,
    reviewCount: 21300,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/pipedream-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/pipedream-banner/800/450",
    coverUrl: "https://picsum.photos/seed/pipedream-cover/300/420",
    description:
      "Connect the pipes before the water flows. A classic puzzle game with hundreds of hand-crafted levels.",
    tags: ["Puzzle", "Casual", "Offline"],
  },

  // ── Multiplayer additions (to reach 9 non-featured multiplayer) ─
  {
    id: "24",
    title: "Clash Commanders",
    developer: "WarForge Studios",
    category: "strategy",
    rating: 4.5,
    reviewCount: 158000,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/clashcmd-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/clashcmd-banner/800/450",
    coverUrl: "https://picsum.photos/seed/clashcmd-cover/300/420",
    description:
      "Build your army, fortify your base, and crush rival commanders in this real-time strategy battle game.",
    tags: ["Strategy", "Multiplayer"],
  },
  {
    id: "25",
    title: "Battle Fleet",
    developer: "Naval Works",
    category: "strategy",
    rating: 4.3,
    reviewCount: 67200,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/bfleet-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/bfleet-banner/800/450",
    coverUrl: "https://picsum.photos/seed/bfleet-cover/300/420",
    description:
      "Command a fleet of warships and outmaneuver opponents on the high seas in this tactical strategy game.",
    tags: ["Strategy", "Multiplayer"],
  },
  {
    id: "26",
    title: "Ninja Brawl",
    developer: "Shadow Kick Games",
    category: "action",
    rating: 4.6,
    reviewCount: 134500,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/ninjabrawl-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/ninjabrawl-banner/800/450",
    coverUrl: "https://picsum.photos/seed/ninjabrawl-cover/300/420",
    description:
      "Throw down with ninjas from around the world. Master combos and special moves to dominate the dojo.",
    tags: ["Action", "Multiplayer"],
  },
  {
    id: "27",
    title: "Football Manager",
    developer: "Pitch Perfect Studios",
    category: "sports",
    rating: 4.4,
    reviewCount: 89700,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/football-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/football-banner/800/450",
    coverUrl: "https://picsum.photos/seed/football-banner/300/420",
    description:
      "Build your dream squad and compete in live seasons against managers worldwide.",
    tags: ["Sports", "Multiplayer"],
  },

  // ── Simulation additions (to reach 9 non-featured simulation games) ─
  {
    id: "28",
    title: "Planet Builder",
    developer: "Cosmos Dev",
    category: "simulation",
    rating: 4.7,
    reviewCount: 176000,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/planetbuild-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/planetbuild-banner/800/450",
    coverUrl: "https://picsum.photos/seed/planetbuild-cover/300/420",
    description:
      "Terraform alien worlds, seed life, and watch civilizations rise across the cosmos.",
    tags: ["Simulation", "Strategy", "Offline"],
  },
  {
    id: "29",
    title: "Restaurant Rush",
    developer: "Hungry Pixel",
    category: "simulation",
    rating: 4.5,
    reviewCount: 93400,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/restrush-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/restrush-banner/800/450",
    coverUrl: "https://picsum.photos/seed/restrush-cover/300/420",
    description:
      "Build and run your own restaurant empire. Hire staff, craft menus, and keep the reviews glowing.",
    tags: ["Simulation", "Casual", "Offline"],
  },
  {
    id: "30",
    title: "Zoo Empire",
    developer: "Wild Craft Studios",
    category: "simulation",
    rating: 4.4,
    reviewCount: 71200,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/zooempire-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/zooempire-banner/800/450",
    coverUrl: "https://picsum.photos/seed/zooempire-cover/300/420",
    description:
      "Design and manage a world-class zoo. Attract rare animals and keep your visitors happy.",
    tags: ["Simulation", "Casual", "Offline"],
  },
  {
    id: "31",
    title: "Pixel Town",
    developer: "Retro Sim Co.",
    category: "simulation",
    rating: 4.3,
    reviewCount: 58900,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/pixeltown-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/pixeltown-banner/800/450",
    coverUrl: "https://picsum.photos/seed/pixeltown-cover/300/420",
    description:
      "Build a retro pixel-art town with your friends. Trade resources and grow your community together.",
    tags: ["Simulation", "Multiplayer"],
  },
  {
    id: "32",
    title: "Sky Islands",
    developer: "Nimbus Games",
    category: "simulation",
    rating: 4.6,
    reviewCount: 121000,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/skyislands-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/skyislands-banner/800/450",
    coverUrl: "https://picsum.photos/seed/skyislands-cover/300/420",
    description:
      "Float across the sky building island settlements. Discover hidden biomes and ancient sky ruins.",
    tags: ["Simulation", "Strategy", "Offline"],
  },
  {
    id: "33",
    title: "Idle Civilization",
    developer: "Epoch Labs",
    category: "simulation",
    rating: 4.5,
    reviewCount: 84300,
    price: "Free",
    iconUrl: "https://picsum.photos/seed/idleciv-icon/96/96",
    bannerUrl: "https://picsum.photos/seed/idleciv-banner/800/450",
    coverUrl: "https://picsum.photos/seed/idleciv-cover/300/420",
    description:
      "Guide humanity from the stone age to the stars. An idle strategy sim spanning all of history.",
    tags: ["Simulation", "Strategy", "Offline"],
  },
];

export const featuredGames = games.filter((g) => g.isFeatured);

export const topFree = games
  .filter((g) => g.price === "Free")
  .sort((a, b) => b.reviewCount - a.reviewCount)
  .slice(0, 9);

export const topGrossing = [...games]
  .sort((a, b) => b.reviewCount - a.reviewCount)
  .slice(0, 9);

export const topPaid = games
  .filter((g) => typeof g.price === "number")
  .sort((a, b) => b.reviewCount - a.reviewCount)
  .slice(0, 9);

export const recommended = games
  .filter((g) => !g.isFeatured)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 9);

export const offlineGames = games
  .filter((g) => !g.isFeatured && g.tags.includes("Offline"))
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 9);

export const puzzleGames = games
  .filter(
    (g) =>
      !g.isFeatured && (g.category === "puzzle" || g.tags.includes("Puzzle")),
  )
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 9);

export const multiplayerGames = games
  .filter((g) => !g.isFeatured && g.tags.includes("Multiplayer"))
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 9);

export const simulationGames = games
  .filter(
    (g) =>
      !g.isFeatured &&
      (g.category === "simulation" || g.tags.includes("Simulation")),
  )
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 9);
