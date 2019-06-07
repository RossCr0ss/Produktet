export class Menu {
  id: string;
  name: string;
  path: string;
  navigationHide: boolean;
  menuIcon: string;
  menuImg: string;
  menuMp4: string;
  menuWebm: string;
  subMenu: Array<Menu>;

  constructor(menu?: any) {
    this.id = menu && menu.id || '';
    this.name = menu && menu.name || '';
    this.path = menu && menu.path || '';
    this.navigationHide = menu && menu.navigationHide || false;
    this.menuIcon = menu && menu.menuIcon || '';
    this.menuImg = menu && menu.menuImg || '';
    this.menuMp4 = menu && menu.menuMp4 || '';
    this.menuWebm = menu && menu.menuWebm || '';
    this.subMenu = menu && menu.subMenu || [];
  }
}
