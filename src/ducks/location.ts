import { hen, Hen } from '../util/createReducer';
import { createSelector } from 'reselect';
import { RootState } from './state';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { url } from '../util/url';

export type Location = {
    id: number,
    title: string,
    content: string,
    opened: boolean,
    mask: string,
    towel: string,
    fountain: string,
    lockerRoom: string,
    schedules: Array<{weekdays: string, hour: string}>
};

export interface LocationState {
  locations: Location[];
  filteredLocations: Location[];
  loading: boolean;
  error: string | null;
}

export type InitialState = LocationState;

const initialState: InitialState = {
  locations: [],
  filteredLocations: [],
  loading: false,
  error: null,
};

const mainSelector = (state: RootState) => state.location;

export const getLocations = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    locations: state.locations,
    filteredLocations: state.filteredLocations,
    error: state.error
  };
});

class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  setLocations(locations: Location[]){
      this.state.locations = locations.filter((item) => item.content);
  }

  setFilter(timeInit: number, timeEnd: number, closedLocations: boolean){
      this.setLoading(true);
      this.state.filteredLocations = this.state.locations.filter((item) => {
        return item.schedules.find(schedule => {
          const hourInit = parseInt(schedule.hour.substring(0, 2));
          const hourEnd = parseInt(schedule.hour.substring(7, 9));
          if(timeInit > hourInit && timeEnd <= hourEnd){
            return true;
          }
        })
      }
      );

      if(closedLocations === false){
        this.state.filteredLocations = this.state.filteredLocations.filter((item) => 
          item.opened
        );
      }
      this.setLoading(false);
  }

  setClean(){
    this.state.filteredLocations = [];
  }

  setError(message?: string){
    this.state.error = message ?? null;
  }
}

//Reducers
export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function filter(
  timeInit: number, timeEnd: number, closedLocations: boolean
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setFilter(timeInit, timeEnd, closedLocations));
    dispatch(actions.setError());
  };
}

export function clean(): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.setClean());
    dispatch(actions.setLoading(false));
    dispatch(actions.setError());
  };
}

export function fetchLocations(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(url)
      .then((result: any) => {
        dispatch(actions.setLocations(result.data.locations));
        dispatch(actions.setLoading(false));
      })
      .catch((e) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setError(e.message));
      });
  };
}

