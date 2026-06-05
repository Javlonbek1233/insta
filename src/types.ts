/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DrinkBase {
  id: string;
  name: string;
  color: string;
  gradient: string;
  sensoryNotes: string[];
  description: string;
}

export interface MilkType {
  id: string;
  name: string;
  texture: string;
}

export interface Garnish {
  id: string;
  name: string;
  premiumFactor: string;
  iconName: string;
}

export interface CupStyle {
  id: string;
  name: string;
  vibe: string;
}

export interface PhotoFilter {
  id: string;
  name: string;
  cssClass: string;
  brightness: number;
  contrast: number;
  saturate: number;
  sepia: number;
  hueRotate: number;
  description: string;
}

export interface Soundscape {
  id: string;
  name: string;
  subtitle: string;
  volume: number;
  audioFeatures: string[];
}
