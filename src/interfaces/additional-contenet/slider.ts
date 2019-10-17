import {IModule} from "./module";

export interface ISlider extends IModule {
  images: string;
  displayArrows: boolean;
  displayDots: boolean;  
}
