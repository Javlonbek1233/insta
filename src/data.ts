/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DrinkBase, MilkType, Garnish, CupStyle, PhotoFilter, Soundscape } from "./types";

// Dynamic relative imports of our gorgeous generated assets
export const IMAGES = {
  interior: "/src/assets/images/instagram_cafe_interior_1780653665762.png",
  coffee: "/src/assets/images/aesthetic_coffee_design_1780653683032.png"
};

export const DRINK_BASES: DrinkBase[] = [
  {
    id: "rose-velvet",
    name: "Rose Velvet Latte",
    color: "#e2a4a9",
    gradient: "from-pink-300 to-rose-400",
    sensoryNotes: ["Wild Rose Petals", "Organic Sweet Beetroot", "Madagascar Vanilla"],
    description: "An incredibly silky, pastel-pink masterpiece infused with sweet nectar of hand-sorted Damascus roses."
  },
  {
    id: "pistachio-cream",
    name: "Pistachio Cream Latte",
    color: "#b9ccb4",
    gradient: "from-emerald-200 to-green-300",
    sensoryNotes: ["Sicilian Pistachios", "Warm Cardamom", "Cream Honey"],
    description: "A gorgeous, pale-green infusion layered with cold-whipped roasted pistachio creme."
  },
  {
    id: "golden-saffron",
    name: "Golden Saffron Cappuccino",
    color: "#dfb15b",
    gradient: "from-amber-200 to-yellow-500",
    sensoryNotes: ["Kashmiri Saffron", "Smoked Amber Dust", "Ceylon Cinnamon"],
    description: "A vibrant golden-hued espresso standard styled with delicate gold marigold nuances."
  },
  {
    id: "charcoal-mocha",
    name: "Obsidian Charcoal Mocha",
    color: "#3a3a3a",
    gradient: "from-neutral-700 to-zinc-900",
    sensoryNotes: ["Activated Coconut Charcoal", "72% Belgian Dark Cocoa", "Espresso Velvet"],
    description: "A striking, deep charcoal-black cup with extreme visual contrast, balanced with dark roasted chocolate."
  }
];

export const MILK_TYPES: MilkType[] = [
  { id: "oat", name: "Oat Silk Creamer", texture: "Dense, microfoamed, slightly sweet oats" },
  { id: "coconut", name: "Whipped Coconut Milk", texture: "Fluffy, lightweight, tropical undertones" },
  { id: "almond", name: "Organic Sweet Almond", texture: "Nutty, crisp, clean, velvet liquid body" },
  { id: "dairy-cream", name: "Heavy Jersey Milk", texture: "Rich, ultra-creamy, smooth traditional foam" }
];

export const GARNISHES: Garnish[] = [
  { id: "gold", name: "24k Edible Gold Leaf", premiumFactor: "+15% Richness Score", iconName: "Sparkles" },
  { id: "rose", name: "Crystallized Rose Buds", premiumFactor: "Floral Bouquet Aroma", iconName: "Flower" },
  { id: "lavender", name: "Lavender Velvet Dusting", premiumFactor: "Ethereal Calm Release", iconName: "Feather" },
  { id: "cocoa-star", name: "Cocoa Constellation Dust", premiumFactor: "Rich Contrast Contrast", iconName: "Sun" }
];

export const CUP_STYLES: CupStyle[] = [
  { id: "pink-gold", name: "Gold-Rimmed Pastel Ceramic", vibe: "Classic High-End Editorial Style" },
  { id: "fluted-crystal", name: "Fluted Ribbed Studio Glass", vibe: "Modern Architectural Flare" },
  { id: "matte-obsidian", name: "Textured Matte Obsidian Mug", vibe: "Minimalist Brutalist Contrast" }
];

export const PHOTO_FILTERS: PhotoFilter[] = [
  {
    id: "natural",
    name: "Original 8K Raw",
    cssClass: "",
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
    description: "Crisp, balanced, soft luxury daylight look"
  },
  {
    id: "milan-gold",
    name: "Milan Golden Warmth",
    cssClass: "sepia-[15%] saturate-[115%] contrast-[105%]",
    brightness: 105,
    contrast: 105,
    saturate: 115,
    sepia: 20,
    hueRotate: 355,
    description: "Warm, luxury amber tint resembling deep golden hour rays"
  },
  {
    id: "pearl-dream",
    name: "Ethereal Pearl Dream",
    cssClass: "contrast-[90%] saturate-[95%]",
    brightness: 115,
    contrast: 92,
    saturate: 95,
    sepia: 5,
    hueRotate: 5,
    description: "Dreamy pastel whites, reduced shadows, and soft organic glow"
  },
  {
    id: "velvet-noir",
    name: "Velvet Cinematic Noir",
    cssClass: "contrast-[120%] saturate-[110%]",
    brightness: 90,
    contrast: 120,
    saturate: 85,
    sepia: 15,
    hueRotate: 0,
    description: "Moody, contrast-heavy aesthetic with rich, deep, premium black-tones"
  }
];

export const SOUNDSCAPES: Soundscape[] = [
  {
    id: "parisian",
    name: "Rainy Parisian Terrace",
    subtitle: "Distant raindrops, soft strings, and subtle porcelain clinks",
    volume: 60,
    audioFeatures: ["Soft Rain Metronome", "Acoustic Accordion Core", "Café Whispers"]
  },
  {
    id: "gardens",
    name: "Sunrise Ivy Greenhouse",
    subtitle: "Chirping morning birds, gentle summer breeze, and low wind chimes",
    volume: 45,
    audioFeatures: ["Morning Songbird Chorus", "Soft Forest Wind", "Quiet Ceramic Grinding"]
  },
  {
    id: "lounge",
    name: "Tokyo Midnight Bossa Nova",
    subtitle: "Ambient mellow jazz rhythm, smooth bassline, and warm steam sounds",
    volume: 70,
    audioFeatures: ["Warm Double Bassline", "Gentle Espresso Purge", "Relaxed Piano Improv"]
  }
];
