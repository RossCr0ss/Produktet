import { IModule } from 'src/interfaces/additional-contenet/module';

export class Menu {
  name: string;
  subname: string;
  path: string;
  navigationHide: boolean;
  menuIcon: string;
  menuImg: string;
  menuMp4: string;
  menuWebm: string;
  subMenu: Array<Menu>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaImage: string;
  favicon: string;
  content: IModule[];

  constructor(menu?: any) {
    this.name = menu && menu.name || '';
    this.subname = menu && menu.subname || '';
    this.path = menu && menu.path || '';
    this.navigationHide = menu && menu.navigationHide || false;
    this.menuIcon = menu && menu.menuIcon || '';
    this.menuImg = menu && menu.menuImg || '';
    this.menuMp4 = menu && menu.menuMp4 || '';
    this.menuWebm = menu && menu.menuWebm || '';
    this.subMenu = menu && menu.subMenu || [];
    this.metaTitle = menu && menu.metaTitle || '';
    this.metaDescription = menu && menu.metaDescription || '';
    this.metaKeywords = menu && menu.metaKeywords || '';
    this.metaImage = menu && menu.metaImage || '';
    this.favicon = menu && menu.favicon || '';
    this.content = menu && menu.content || [];
  }
}
