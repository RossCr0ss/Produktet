import {Module} from "./module";

export interface Video extends Module {
  mp4Url: string;
  oggUrl: string;
  isAutoplay: boolean;
  isLoop: boolean;
  isMuted: boolean;
  showControls: boolean;
}
