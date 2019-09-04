import {Module} from "./module";

export interface Teaser extends Module {
  markup: string;
  sortingLeftRight: boolean;
  src: string;
  
}
