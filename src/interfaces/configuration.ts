import { ISite } from './site';
import { GeneralData } from 'src/shared/models/general-data.model';
import { Menu } from 'src/shared/models/menu.model';

export interface IConfiguration {
  mainComponents: ISite;
  generalData: GeneralData;
  menus: Menu[]
}
