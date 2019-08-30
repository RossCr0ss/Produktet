import {Site} from "./site.model";
import {GeneralData} from "./general-data.model";
import {Menu} from "./menu.model";

export interface Configuration {
  mainComponents: Site;
  generalData: GeneralData;
  menus: Menu[]
}
