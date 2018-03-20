import { ofType, combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as types from 'src/MakeMyMeal/ActionsType';
import * as obj from 'src/Common/Menu';
import {
  LoadMenuAction,
  LoadMenuCompleteAction,
  LoadMenuFailAction,
  loadMenuComplete,
  loadMenuFail,
} from 'src/Common/action';

export const menuLoadEpic: Epic<
  LoadMenuAction | LoadMenuCompleteAction | LoadMenuFailAction,
  never
> = action$ =>
  action$.pipe(
    ofType<LoadMenuAction>(types.LOAD_MENU),
    switchMap(() =>
      obj
        .getMenu()
        .pipe(
          map(menuAction => loadMenuComplete(menuAction)),
          catchError(() => of(loadMenuFail('menu fail'))),
        ),
    ),
  );

export const menuEpic = combineEpics(menuLoadEpic);
