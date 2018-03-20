import * as types from 'src/MakeMyMeal/ActionsType';

import { Menu } from 'src/Common/Menu';

export interface LoadMenuState {
  menu?: Menu;
  error?: string;
}

const initialState: LoadMenuState = { menu: null, error: '' };

export const loadMenuReducer = (
  state: LoadMenuState = initialState,
  { type, menu = null, error = '' },
) => {
  switch (type) {
    case types.LOAD_MENU:
      return initialState;
    case types.LOAD_MENU_SUCCESS:
      return { menu };
    case types.LOAD_MENU_FAIL:
      return { error };
    default:
      return state;
  }
};
