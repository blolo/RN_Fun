import { get } from 'src/Api';

export interface Menu {
  mainItems: MenuItem[];
  sides: MenuItem[];
  drinks: MenuItem[];
}

export interface MenuItem {
  displayName: string;
  imageUrl: string;
  isSelected: boolean;
  type: number;
}

export const getMenu = () => get('');
