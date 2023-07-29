import { TYPE, categories, videos } from '../utils/constants';

const localWatchLater = localStorage.getItem('watchLater');

export const dataInitialState = {
  categories: categories,
  videos: videos,
  watchLater: localWatchLater ? JSON.parse(localWatchLater) : [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case TYPE.Get_ALL_CATEGORY: {
      return {
        ...state,
        categories: [...action.payload],
      };
    }
    case TYPE.GET_ALL_VIDEOS: {
      return {
        ...state,
        videos: [...action.payload],
      };
    }
    case TYPE.ADD_TO_WATCH_LATER: {
      const newWatchLater = [...state.watchLater, action.payload];
      localStorage.setItem('watchLater', JSON.stringify(newWatchLater));
      return {
        ...state,
        watchLater: newWatchLater,
      };
    }
    case TYPE.REMOVE_FROM_WATCH_LATER: {
      const newWatchLater = state.watchLater.filter(
        video => video._id !== action.payload._id
      );
      localStorage.setItem('watchLater', JSON.stringify(newWatchLater));
      return {
        ...state,
        watchLater: newWatchLater,
      };
    }
    default:
      return;
  }
};
