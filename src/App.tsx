/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Coffee,
  Sparkles,
  Sliders,
  Play,
  Pause,
  Camera,
  Check,
  Copy,
  Heart,
  Share2,
  Bookmark,
  Music,
  Maximize2,
  Minimize2,
  Info,
  Layers,
  Zap,
  Eye,
  ArrowRight
} from "lucide-react";
import {
  IMAGES,
  DRINK_BASES,
  MILK_TYPES,
  GARNISHES,
  CUP_STYLES,
  PHOTO_FILTERS,
  SOUNDSCAPES
} from "./data";
import { DrinkBase, MilkType, Garnish, CupStyle, PhotoFilter, Soundscape } from "./types";

export default function App() {
  // Image Viewer state
  const [activeImageKey, setActiveImageKey] = useState<"interior" | "coffee">("interior");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filter & Adjustment state
  const [selectedFilter, setSelectedFilter] = useState<PhotoFilter>(PHOTO_FILTERS[0]);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [blur, setBlur] = useState(0);

  // Update slider variables when pre-set filter changes
  useEffect(() => {
    setBrightness(selectedFilter.brightness);
    setContrast(selectedFilter.contrast);
    setSaturation(selectedFilter.saturate);
    setBlur(0);
  }, [selectedFilter]);

  // Social Stats & Caption Copied state
  const [likes, setLikes] = useState(2405);
  const [hasLiked, setHasLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Creative Brew Lab state
  const [selectedBase, setSelectedBase] = useState<DrinkBase>(DRINK_BASES[0]);
  const [selectedMilk, setSelectedMilk] = useState<MilkType>(MILK_TYPES[0]);
  const [selectedGarnish, setSelectedGarnish] = useState<Garnish>(GARNISHES[0]);
  const [selectedCup, setSelectedCup] = useState<CupStyle>(CUP_STYLES[0]);
  const [createdOrders, setCreatedOrders] = useState<string[]>([]);
  const [showOrderToast, setShowOrderToast] = useState(false);
  const [lastCreatedDrinkName, setLastCreatedDrinkName] = useState("");

  // Ambiance Soundscape Player state
  const [activeSoundscape, setActiveSoundscape] = useState<Soundscape>(SOUNDSCAPES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  // Active accordion state for design notes
  const [activeAccordion, setActiveAccordion] = useState<string | null>("walls");

  // Interaction handlers
  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setHasLiked(!hasLiked);
  };

  const currentCaption = `Golden hours and velvety foams. Experiencing the pure, unhurried luxury of the ${selectedBase.name} paired with textured ${selectedMilk.name} and topped with magnificent ${selectedGarnish.name}. Wrapped elegantly in our custom ${selectedCup.name}. ☕️🍃✨ \n\n#modernluxury #instagramcafe #masterpiececoffee #viralcoffeeshop #parisianescapes`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentCaption);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleOrderSubmit = () => {
    const drinkLabel = `${selectedBase.name} (${selectedMilk.name})`;
    setLastCreatedDrinkName(drinkLabel);
    setCreatedOrders([drinkLabel, ...createdOrders.slice(0, 5)]);
    setShowOrderToast(true);
    setTimeout(() => setShowOrderToast(false), 3500);
  };

  // Aesthetic Rating Calculation (Dynamic based on ingredient pairing)
  const calculateAestheticScore = () => {
    let baseScore = 90;
    // Add points for premium / high contrast matches
    if (selectedBase.id === "rose-velvet" && selectedCup.id === "pink-gold") baseScore += 8;
    if (selectedBase.id === "charcoal-mocha" && selectedCup.id === "matte-obsidian") baseScore += 9;
    if (selectedBase.id === "golden-saffron" && selectedGarnish.id === "gold") baseScore += 7;
    if (selectedGarnish.id === "gold") baseScore += 2;
    if (selectedMilk.id === "oat") baseScore += 1; // standard premium foam
    return Math.min(baseScore, 100);
  };

  const calculateViralityChance = (score: number) => {
    if (score >= 98) return { label: "Elite Celestial 📈", color: "text-rose-500 bg-rose-50" };
    if (score >= 95) return { label: "Highly Viral ✨", color: "text-amber-600 bg-amber-50" };
    return { label: "Premium Post Ready 📷", color: "text-emerald-600 bg-emerald-50" };
  };

  const aestheticScore = calculateAestheticScore();
  const viralStatus = calculateViralityChance(aestheticScore);

  // Simulated Visual Style For Drink Rendering
  const getDrinkVisualColor = () => {
    return selectedBase.color;
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2d2a26] font-sans antialiased relative overflow-x-hidden selection:bg-[#ffd7ba]/50 selection:text-[#2d2a26]">
      {/* Frosted Glass Floating Ambient Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8edeb] via-[#fdfcfb] to-[#ece9e6] pointer-events-none z-0"></div>
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#ffd7ba] rounded-full mix-blend-multiply filter blur-[90px] opacity-25 pointer-events-none z-0"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#d8e2dc] rounded-full mix-blend-multiply filter blur-[70px] opacity-35 pointer-events-none z-0"></div>

      {/* Toast popup */}
      <AnimatePresence>
        {showOrderToast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-[#2d2a26]/90 text-[#fdfcfb] border border-white/20 px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3"
          >
            <div className="bg-[#ffd7ba]/20 p-1.5 rounded-full text-[#ffd7ba]">
              <Coffee className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="font-serif text-sm tracking-wide">Aesthetic Recipe Transmitted</p>
              <p className="text-xs text-stone-300 mt-0.5">Your bespoke {lastCreatedDrinkName} is saved.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual Header */}
      <header className="sticky top-0 backdrop-blur-md bg-white/30 border-b border-white/40 z-40 px-6 py-4 shadow-sm transition-all duration-300 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="font-mono text-[9px] tracking-widest text-[#2d2a26] uppercase border border-[#2d2a26]/20 px-2 py-0.5 rounded-full bg-white/30">
              AURUM Aesthete
            </span>
          </div>

          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light text-[#2d2a26] text-center select-none uppercase">
            AURUM L’Aura
          </h1>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono text-[#2d2a26]/60">
            <span>Mayfair Studio</span>
            <span className="opacity-40">•</span>
            <span>Natural Cinematic Soft Light</span>
          </div>
        </div>
      </header>

      {/* Primary Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative z-10">
        
        {/* Intro */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-[#2d2a26]/60 uppercase mb-3 font-bold">The Heritage of Soft Light</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-wide text-[#2d2a26] mb-5">
            Cinematic Frames & <br />
            <span className="italic font-normal text-[#2d2a26]/75">Bespoke Artisan Craft</span>
          </h2>
          <p className="text-[#2d2a26]/70 text-sm md:text-base leading-relaxed">
            Every angle at Aurum L'Aura is designed for the frame. Step inside, experiment with real-time photographic filters, play soft acoustic atmospheres, and formulate signature coffees with gold-leaf accents.
          </p>
        </div>

        {/* Combined Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 5 COLUMNS: Photo Viewfinder & Influencer Controls */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Camera Viewfinder Card */}
            <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-3xl p-5 space-y-4 shadow-xl">
              
              {/* Card Header & Controls */}
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-[#2d2a26]/75" />
                  <span className="font-serif text-sm font-medium tracking-wide text-[#2d2a26]">Aurum Lens Viewfinder</span>
                </div>
                
                {/* Image Toggle Tabs */}
                <div className="flex space-x-1 bg-white/45 p-0.5 rounded-xl text-xs border border-white/20">
                  <button
                    onClick={() => setActiveImageKey("interior")}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                      activeImageKey === "interior"
                        ? "bg-[#2d2a26] text-white font-medium shadow-sm"
                        : "text-[#2d2a26]/60 hover:text-[#2d2a26]"
                    }`}
                  >
                    Space
                  </button>
                  <button
                    onClick={() => setActiveImageKey("coffee")}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                      activeImageKey === "coffee"
                        ? "bg-[#2d2a26] text-white font-medium shadow-sm"
                        : "text-[#2d2a26]/60 hover:text-[#2d2a26]"
                    }`}
                  >
                    Pour
                  </button>
                </div>
              </div>

              {/* Cinematic View Container */}
              <div className="relative overflow-hidden rounded-2xl bg-stone-950 aspect-[4/5] shadow-inner group border border-white/30">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageKey}
                    src={activeImageKey === "interior" ? IMAGES.interior : IMAGES.coffee}
                    alt={activeImageKey === "interior" ? "Luxury Cafe Interior" : "Aesthetic Coffee Close-up"}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover select-none transition-all duration-300"
                    style={{
                      filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px)`
                    }}
                  />
                </AnimatePresence>

                {/* Aesthetic HUD Overlay */}
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className="bg-[#2d2a26]/80 text-[#fdfcfb] text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                    {selectedFilter.name}
                  </span>
                  <span className="bg-white/90 text-[#2d2a26] text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded font-semibold shadow-xs">
                    RAW 8K
                  </span>
                </div>

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/75 text-white p-2 rounded-lg backdrop-blur-xs transition-all shadow-md group border border-white/10"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                {/* Custom watermark badge */}
                <div className="absolute bottom-3 left-3 bg-black/20 text-white/90 text-[10px] font-serif tracking-widest px-3 py-1 rounded-full backdrop-blur-md pointer-events-none uppercase">
                  A U R U M
                </div>
              </div>

              {/* Feed Likes and Quick Actions */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLike}
                    className="flex items-center space-x-1.5 group transition-colors focus:outline-none"
                  >
                    <Heart
                      className={`w-5 h-5 transition-transform duration-300 scale-100 active:scale-125 ${
                        hasLiked
                          ? "fill-rose-500 text-rose-500"
                          : "text-[#2d2a26]/60 group-hover:text-rose-500"
                      }`}
                    />
                    <span className="text-xs font-mono font-medium text-[#2d2a26]/80">
                      {likes.toLocaleString()}
                    </span>
                  </button>

                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1 text-[#2d2a26]/60 hover:text-[#2d2a26] group transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs font-mono">Share</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="text-[#2d2a26]/60 hover:text-[#2d2a26] transition-colors focus:shadow-none"
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? "fill-[#2d2a26] text-[#2d2a26]" : ""}`} />
                </button>
              </div>
            </div>

            {/* Filter Selection Panel */}
            <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-3xl p-5 shadow-xl space-y-4">
              <div className="flex items-center space-x-2 border-b border-white/20 pb-2.5">
                <Sliders className="w-4 h-4 text-[#2d2a26]/80" />
                <h3 className="font-serif text-sm font-medium tracking-wide text-[#2d2a26]">Filter Calibration</h3>
              </div>

              {/* Preset Buttons Grid */}
              <div className="grid grid-cols-2 gap-2">
                {PHOTO_FILTERS.map((f) => {
                  const isActive = selectedFilter.id === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFilter(f)}
                      className={`text-left p-2.5 rounded-xl border transition-all text-xs flex flex-col justify-between h-16 ${
                        isActive
                          ? "border-[#2d2a26] bg-[#2d2a26] text-white shadow-sm font-medium"
                          : "border-white/40 bg-white/20 hover:bg-white/40 text-[#2d2a26]/80 hover:border-white/60"
                      }`}
                    >
                      <span className="font-medium truncate">{f.name}</span>
                      <span className={`text-[10px] truncate w-full ${isActive ? "text-stone-300" : "text-[#2d2a26]/50"}`}>{f.description}</span>
                    </button>
                  );
                })}
              </div>

              {/* Manual Adjustments Panel */}
              <div className="border-t border-white/20 pt-4 space-y-3">
                <span className="text-xs font-serif font-medium text-[#2d2a26]/80">Analog Calibration</span>
                
                <div className="space-y-3 pt-1">
                  {/* Brightness */}
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-[#2d2a26]/60">
                      <span>Refractive Luminosity</span>
                      <span>{brightness}%</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="135"
                      value={brightness}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      className="w-full h-1 bg-white/40 rounded-lg cursor-pointer accent-[#2d2a26]"
                    />
                  </div>

                  {/* Contrast */}
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-[#2d2a26]/60">
                      <span>Shadow Contrast</span>
                      <span>{contrast}%</span>
                    </div>
                    <input
                      type="range"
                      min="75"
                      max="130"
                      value={contrast}
                      onChange={(e) => setContrast(Number(e.target.value))}
                      className="w-full h-1 bg-white/40 rounded-lg cursor-pointer accent-[#2d2a26]"
                    />
                  </div>

                  {/* Saturation */}
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-[#2d2a26]/60">
                      <span>Color Vibrancy</span>
                      <span>{saturation}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value={saturation}
                      onChange={(e) => setSaturation(Number(e.target.value))}
                      className="w-full h-1 bg-white/40 rounded-lg cursor-pointer accent-[#2d2a26]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Post Text Copy Card */}
            <div className="backdrop-blur-md bg-white/25 border border-white/40 rounded-3xl p-5 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-xs font-semibold tracking-wider text-[#2d2a26]/80 uppercase">
                  Social Copywriter
                </h4>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 text-[11px] font-mono text-[#2d2a26]/80 hover:text-[#2d2a26] bg-white/40 hover:bg-white/75 border border-white/40 px-2.5 py-1 rounded-lg"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 animate-scale" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#2d2a26]/70" />
                      <span>Copy Caption</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-[#2d2a26]/75 text-[11px] leading-relaxed line-clamp-4 bg-white/20 p-2.5 rounded-lg border border-dashed border-white/50 select-all font-mono">
                {currentCaption}
              </p>
            </div>

          </div>

          {/* RIGHT 7 COLUMNS: Artisan Brew Lab, Soundscapes & Ambiance Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Drink Creator / Brew Lab */}
            <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
              
              <div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-[#2d2a26]/60 uppercase mb-1 font-bold">Interactive Artisan Lab</p>
                <h3 className="font-serif text-xl md:text-3xl font-light text-[#2d2a26]">The Velvet Mixology Bar</h3>
                <p className="text-[#2d2a26]/60 text-xs mt-1">
                  Craft a beautifully balanced latte recipe to maximize index scores and presentation aesthetic.
                </p>
              </div>

              {/* Selector Steps */}
              <div className="space-y-6">
                
                {/* 1. Coffee / Blend Base */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2d2a26]/50 uppercase tracking-widest text-[10px]">Step 1. Selection Base Blend</span>
                    <span className="text-[#2d2a26] font-medium">{selectedBase.name}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {DRINK_BASES.map((base) => {
                      const isActive = selectedBase.id === base.id;
                      return (
                        <button
                          key={base.id}
                          onClick={() => setSelectedBase(base)}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            isActive
                              ? "border-[#2d2a26] bg-[#2d2a26] text-white shadow-lg"
                              : "border-white/40 bg-white/20 hover:bg-white/40 text-[#2d2a26]"
                          }`}
                        >
                          <div className="flex justify-center mb-1">
                            <span
                              className="w-3 h-3 rounded-full border border-white/20 inline-block shadow-sm"
                              style={{ backgroundColor: base.color }}
                            />
                          </div>
                          <span className="text-[11px] font-mono leading-tight block truncate">{base.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Milky Cream Texture */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2d2a26]/50 uppercase tracking-widest text-[10px]">Step 2. Artisan Microfoam</span>
                    <span className="text-[#2d2a26] font-medium">{selectedMilk.name}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MILK_TYPES.map((milk) => {
                      const isActive = selectedMilk.id === milk.id;
                      return (
                        <button
                          key={milk.id}
                          onClick={() => setSelectedMilk(milk)}
                          className={`px-2 py-2.5 rounded-xl border text-center transition-all ${
                            isActive
                              ? "border-[#2d2a26] bg-[#2d2a26] text-white shadow-lg"
                              : "border-white/40 bg-white/20 hover:bg-white/40 text-[#2d2a26]"
                          }`}
                        >
                          <span className="text-[11px] font-mono leading-tight block truncate">{milk.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Luxury Garnishes */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2d2a26]/50 uppercase tracking-widest text-[10px]">Step 3. Gourmet Garnish</span>
                    <span className="text-[#2d2a26] font-medium">{selectedGarnish.name}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {GARNISHES.map((g) => {
                      const isActive = selectedGarnish.id === g.id;
                      return (
                        <button
                          key={g.id}
                          onClick={() => setSelectedGarnish(g)}
                          className={`p-2 rounded-xl border text-center transition-all flex flex-col justify-center items-center h-[52px] ${
                            isActive
                              ? "border-[#2d2a26] bg-[#2d2a26] text-white shadow-lg"
                              : "border-white/40 bg-white/20 hover:bg-white/40 text-[#2d2a26]"
                          }`}
                        >
                          <span className={`text-[9px] block mb-0.5 uppercase tracking-wide truncate ${isActive ? "text-stone-300" : "text-stone-400"}`}>{g.premiumFactor}</span>
                          <span className="text-[11px] font-mono leading-tight font-medium block truncate w-full">{g.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Luxury Cup Styles */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2d2a26]/50 uppercase tracking-widest text-[10px]">Step 4. Curated Vessels</span>
                    <span className="text-[#2d2a26] font-medium">{selectedCup.name}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {CUP_STYLES.map((cup) => {
                      const isActive = selectedCup.id === cup.id;
                      return (
                        <button
                          key={cup.id}
                          onClick={() => setSelectedCup(cup)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isActive
                              ? "border-[#2d2a26] bg-[#2d2a26] text-white shadow-lg"
                              : "border-white/40 bg-white/20 hover:bg-white/40 text-[#2d2a26]"
                          }`}
                        >
                          <span className="text-[11px] font-mono font-medium block">{cup.name}</span>
                          <span className={`text-[9px] mt-0.5 block ${isActive ? "text-[#ffd7ba]" : "text-[#2d2a26]/50"}`}>{cup.vibe}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* DYNAMIC PRESENTATION POST-CARD PREVIEW */}
              <div className="backdrop-blur-md bg-white/20 border border-white/40 rounded-2xl p-5 mt-6 relative overflow-hidden flex flex-col sm:flex-row items-center gap-5">
                
                {/* Simulated Coffee Representation */}
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center rounded-2xl overflow-hidden shadow-inner bg-gradient-to-br from-white/30 to-white/10 border border-white/40">
                  {/* Decorative Ripple Layers */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute w-20 h-20 rounded-full border border-dashed border-[#2d2a26]/20 flex items-center justify-center"
                  />
                  <div className="absolute w-16 h-16 rounded-full bg-white/30 opacity-40 blur-xs" />
                  
                  {/* Glowing main drink container representer */}
                  <div
                    className="w-14 h-14 rounded-full shadow-lg relative flex items-center justify-center transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${selectedBase.color}D0, ${selectedBase.color})`
                    }}
                  >
                    {/* Latte Foam Art Representation */}
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center relative justify-center">
                      {/* Heart foam or spiral */}
                      <Heart className="w-4 h-4 text-white/75 fill-white/10" />
                      
                      {/* Animated Gold particle */}
                      {selectedGarnish.id === "gold" && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                          className="absolute -top-1 -right-1 text-amber-200"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <span className="absolute bottom-1.5 font-mono text-[8px] uppercase tracking-widest text-[#2d2a26] select-none font-semibold">
                    BREWED
                  </span>
                </div>

                {/* Custom Card Detailed Text Output */}
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  
                  {/* Score & Vibe Indicators */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <div className="flex items-center space-x-1 border border-white/30 bg-white/40 px-2.5 py-0.5 rounded-full text-xs font-mono">
                      <span>Aesthetic Index:</span>
                      <span className="text-[#2d2a26] font-semibold">{aestheticScore}/100</span>
                    </div>

                    <div className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-white/30 ${viralStatus.color}`}>
                      {viralStatus.label}
                    </div>
                  </div>

                  {/* Summary Recipe Title */}
                  <h4 className="font-serif text-lg font-medium text-[#2d2a26] tracking-wide mt-1">
                    The Aurum {selectedBase.name.split(" ")[0]} Infusion
                  </h4>
                  
                  {/* Description */}
                  <p className="text-[#2d2a26]/70 text-xs leading-relaxed max-w-md">
                    Bespoke <span className="text-[#2d2a26] font-medium">{selectedBase.name}</span> base foam textured with velvety <span className="text-[#2d2a26] font-medium">{selectedMilk.name}</span>, intricately dusted with <span className="text-[#2d2a26] font-medium">{selectedGarnish.name}</span>, curated in custom <span className="text-[#2d2a26] font-medium">{selectedCup.name}</span>.
                  </p>

                  {/* Sensory notes */}
                  <div className="pt-2 flex flex-wrap gap-1 items-center justify-center sm:justify-start">
                    <span className="text-[10px] font-mono text-[#2d2a26]/40 mr-1 uppercase">Scent Layers:</span>
                    {selectedBase.sensoryNotes.map((note) => (
                      <span key={note} className="text-[10px] bg-white/40 border border-white/40 text-[#2d2a26]/80 px-2 py-0.5 rounded-md font-sans">
                        {note}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Order/Export Menu */}
              <div className="border-t border-white/20 pt-5 flex items-center justify-between gap-4">
                <div className="hidden sm:block text-xs font-mono text-[#2d2a26]/55">
                  Artisan recipe specs are free-use.
                </div>

                <button
                  onClick={handleOrderSubmit}
                  className="bg-[#2d2a26] hover:bg-[#1a1917] text-white hover:text-[#ffd7ba] transition-all font-serif px-6 py-3 rounded-2xl text-xs tracking-widest uppercase flex items-center space-x-2 shadow-md w-full sm:w-auto justify-center cursor-pointer border border-white/20"
                >
                  <span>Transmit Recipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Custom Interactive Soundscapes Player */}
            <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-3xl p-6 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <div className="flex items-center space-x-2">
                  <Music className="w-4 h-4 text-[#2d2a26]/70" />
                  <h3 className="font-serif text-sm font-medium tracking-wide text-[#2d2a26]">Ambiance Acoustic Simulator</h3>
                </div>
                
                <span className="text-[9px] font-mono tracking-widest text-[#2d2a26]/40 uppercase font-bold">
                  Ambient comfort
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {SOUNDSCAPES.map((sound) => {
                  const isActive = activeSoundscape.id === sound.id;
                  return (
                    <button
                      key={sound.id}
                      onClick={() => {
                        setActiveSoundscape(sound);
                        setIsPlaying(true);
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-[104px] ${
                        isActive
                          ? "border-[#2d2a26] bg-[#2d2a26]/10 shadow-sm font-medium"
                          : "border-white/40 bg-white/20 hover:bg-white/40 text-[#2d2a26]"
                      }`}
                    >
                      <div>
                        <span className="font-serif text-xs font-medium block text-stone-900">{sound.name}</span>
                        <span className="text-[10px] text-stone-500 block mt-1 leading-snug">{sound.subtitle}</span>
                      </div>
                      
                      {/* Interactive indicator */}
                      <div className="mt-4 flex items-center justify-between text-[10px] font-mono">
                        <span className={isActive ? "text-[#2d2a26]" : "text-[#2d2a26]/50"}>
                          {isActive && isPlaying ? "Ambient Active" : "Play Vibe"}
                        </span>
                        {isActive && isPlaying && (
                          <span className="flex space-x-0.5 items-end h-3">
                            <span className="w-0.5 bg-[#2d2a26] animate-[bounce_0.8s_infinite_100ms] h-2" />
                            <span className="w-0.5 bg-[#2d2a26] animate-[bounce_0.8s_infinite_300ms] h-3" />
                            <span className="w-0.5 bg-[#2d2a26] animate-[bounce_0.8s_infinite_200ms] h-1.5" />
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Master Audio Controller Visualizer */}
              <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center space-x-3.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-[#2d2a26] hover:bg-[#1a1917] text-white flex items-center justify-center transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white text-white" /> : <Play className="w-4 h-4 fill-white text-white ml-0.5" />}
                  </button>

                  <div>
                    <span className="font-serif text-xs font-medium block text-[#2d2a26]">
                      {isPlaying ? `Atmospheric: ${activeSoundscape.name}` : "Atmosphere Quiet"}
                    </span>
                    <span className="text-[10px] font-mono text-[#2d2a26]/50 mt-0.5 block">
                      Audio elements: {activeSoundscape.audioFeatures.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Volume slider */}
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  <span className="text-[10px] font-mono text-[#2d2a26]/60">Volume</span>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="accent-[#2d2a26] w-24 h-1 bg-white/40 rounded-lg cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-[#2d2a26]/80 w-6 text-right">{volume}%</span>
                </div>

              </div>

            </div>

            {/* Design secrets & artistic pillars section */}
            <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-3xl p-6 shadow-xl space-y-5">
              
              <div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-[#2d2a26]/60 uppercase mb-1 font-bold">
                  Space Architecture Design
                </p>
                <h3 className="font-serif text-lg font-medium text-[#2d2a26]">
                  Aesthetic Blueprint Structure
                </h3>
              </div>

              <div className="border-t border-white/10 pt-2 space-y-2 text-xs">
                
                {/* Accordion Item 1 */}
                <div className="border-b border-stone-200/40 py-3">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "walls" ? null : "walls")}
                    className="w-full flex items-center justify-between text-left font-serif text-sm font-medium text-[#2d2a26] hover:text-[#2d2a26]/80 transition-colors"
                  >
                    <span>1. Floral Plaster Moldings & Wallpaper</span>
                    <span className="text-[#2d2a26]/70 font-mono text-xs">{activeAccordion === "walls" ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === "walls" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-2 text-[#2d2a26]/70 leading-relaxed text-xs space-y-1.5"
                      >
                        <p>
                          Our signature salon walls are dressed in hand-detailed Italian floral plaster carvings, merging seamlessly with soft pastel floral wallpapers. The artistic design gives high-contrast depth, allowing sunlight casting warm rays to form cinematic shadows.
                        </p>
                        <p className="font-mono text-[10px] text-[#2d2a26]/90 font-bold">
                          Configuration Tip: Preset "Ethereal Pearl Dream" unlocks pure warm shadows on textured plaster.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion Item 2 */}
                <div className="border-b border-stone-200/40 py-3">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "furniture" ? null : "furniture")}
                    className="w-full flex items-center justify-between text-left font-serif text-sm font-medium text-[#2d2a26] hover:text-[#2d2a26]/80 transition-colors"
                  >
                    <span>2. Curved Furniture Design & Travertine grids</span>
                    <span className="text-[#2d2a26]/70 font-mono text-xs">{activeAccordion === "furniture" ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === "furniture" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-2 text-[#2d2a26]/70 leading-relaxed text-xs space-y-1.5"
                      >
                        <p>
                          Meticulously curated with curved seating upholstered in raw unbleached boucle, accented with deep emerald forest velvet. Circular travertine tables provide natural, earth-toned matte grids that contrast perfectly with glossy tableware and pastel-topped drinks.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion Item 3 */}
                <div className="py-3 pb-1">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "lighting" ? null : "lighting")}
                    className="w-full flex items-center justify-between text-left font-serif text-sm font-medium text-[#2d2a26] hover:text-[#2d2a26]/80 transition-colors"
                  >
                    <span>3. Pure Natural Soft Light Refraction</span>
                    <span className="text-[#2d2a26]/70 font-mono text-xs">{activeAccordion === "lighting" ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === "lighting" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-2 text-[#2d2a26]/70 leading-relaxed text-xs space-y-1.5"
                      >
                        <p>
                          Large floor-to-ceiling glass archways face south-west, securing pure uninterrupted soft sunlight during the golden hours. Fluted crystal glass accessories scatter rays into delicate, rainbow prisms across the space, elevating real-time photorealism during photo capture.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Dynamic history log of recent artisan creations */}
        <div className="my-14 border-t border-white/20 pt-10">
          <div className="max-w-xl mx-auto text-center space-y-2 relative">
            <p className="font-mono text-[9px] tracking-[0.3em] text-[#2d2a26]/60 uppercase font-bold">Studio Recipes</p>
            <h4 className="font-serif text-2xl font-light text-[#2d2a26]">Active Formulation Queue</h4>
            <p className="text-xs text-[#2d2a26]/60">
              Your generated design recipes are queued below for reference and reproduction.
            </p>

            <div className="pt-6 flex flex-col gap-2.5">
              {createdOrders.length === 0 ? (
                <div className="p-6 border border-dashed border-white/40 bg-white/10 rounded-2xl text-[#2d2a26]/50 text-xs">
                  No formulations designed yet. Experiment at L'Aura Mixology Bar.
                </div>
              ) : (
                createdOrders.map((order, i) => (
                  <motion.div
                    key={`${order}-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="backdrop-blur-sm bg-white/35 border border-white/40 py-3 px-4 rounded-xl flex items-center justify-between text-xs shadow-xs"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d2a26]" />
                      <span className="font-mono text-[#2d2a26] font-medium">{order}</span>
                    </div>
                    <span className="text-[10px] text-[#2d2a26]/60 font-mono">Formula Saved</span>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 bg-white/20 backdrop-blur-md py-14 px-6 mt-16 text-center space-y-5 relative z-10">
        <h3 className="font-serif text-xl tracking-[0.25em] uppercase text-[#2d2a26] font-light">AURUM L’Aura</h3>
        <p className="font-mono text-[10px] text-[#2d2a26]/60 max-w-sm mx-auto leading-relaxed uppercase tracking-widest">
          EXPERIENCE SOFT ELEGANCE • PURE LIGHTING • MASTERPIECE COFFEE CRAFT
          <br />
          London • Paris • Milan
        </p>
      </footer>
    </div>
  );
}
