import {IModule} from "./module";

export interface ITeaser extends IModule {
  markup: string;
  sortingLeftRight: boolean;
  src: string;
}
