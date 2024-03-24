import { Movie } from '../interfaces';

export const initialMoviesState = {
  loading: false,
  data: [],
  error: '',
} as {
  loading: boolean;
  data: Movie[];
  error: string;
};
type ReducerActionTypes =
  | 'FETCH_MOVIES_START'
  | 'FETCH_MOVIES_SUCCESS'
  | 'FETCH_MOVIES_ERROR';
export function moviesReducer(
  state: typeof initialMoviesState = initialMoviesState,
  action: { type: ReducerActionTypes; payload?: Movie[] | string }
): typeof initialMoviesState {
  switch (action.type) {
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload as Movie[],
      };
    case 'FETCH_MOVIES_ERROR':
      return {
        ...state,
        error: action.payload as string,
      };

    default:
      break;
  }
  return state;
}
