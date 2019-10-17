import { IModule } from './module';

export interface IVideo extends IModule {
  mp4Url: string;
  oggUrl: string;
  isAutoplay: boolean;
  isLoop: boolean;
  isMuted: boolean;
  showControls: boolean;
}