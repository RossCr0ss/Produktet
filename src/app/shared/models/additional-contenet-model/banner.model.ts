import {Module} from "./module";

export interface Banner extends Module {
  mp4Url: string;
  oggUrl: string;
  src: string;
  overlayMarkup: string;
  bgColor: string;
  posterSrc: string;
  displayOverlay: boolean;
  fullOverlay: boolean;
}
