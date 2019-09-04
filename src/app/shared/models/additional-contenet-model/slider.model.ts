import {Module} from "./module";

export interface Slider extends Module {
  images: string;
  displayArrows: boolean;
  displayDots: boolean;  
}
