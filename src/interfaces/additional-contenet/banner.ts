import {IModule} from "./module";

export interface IBanner extends IModule {
  mp4Url: string;
  oggUrl: string;
  src: string;
  overlayMarkup: string;
  bgColor: string;
  posterSrc: string;
  displayOverlay: boolean;
  fullOverlay: boolean;
}
