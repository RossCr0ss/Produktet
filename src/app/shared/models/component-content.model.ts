export interface ComponentContent {

  //text
  markup: string;
  //image
  src: string;
  alt: string;

  //video
  mp4Url: string;
  oggUrl: string;
  isAutoplay: boolean;
  isLoop: boolean;
  isMuted: boolean;
  showControls: boolean;

  //general
  name: string;
  key: string;
  nodeid: number;
}
