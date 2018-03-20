import * as types from 'src/MakeMyMeal/ActionsType';
import { Menu } from 'src/Common/Menu';

export interface LoadMenuAction {
  type: typeof types.LOAD_MENU;
}

export interface LoadMenuCompleteAction {
  menuAction: Menu;
  type: typeof types.LOAD_MENU_SUCCESS;
}

export interface LoadMenuFailAction {
  error: string;
  type: typeof types.LOAD_MENU_FAIL;
}

export const loadMenu = (): LoadMenuAction => ({
  type: types.LOAD_MENU,
});

export const loadMenuComplete = (menuAction: Menu): LoadMenuCompleteAction => ({
  menuAction,
  type: types.LOAD_MENU_SUCCESS,
});

export const loadMenuFail = (error: string): LoadMenuFailAction => ({
  error,
  type: types.LOAD_MENU_FAIL,
});
