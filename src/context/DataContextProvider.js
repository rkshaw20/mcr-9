import { createContext, useContext, useReducer, useState } from 'react';
import { DataReducer, dataInitialState } from '../reducer/DataReducer';

const DataContext = createContext({
  categories: [],
  videos: [],
  watchLater: [],
  playlist:[],
  notes:[],
});

export const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);
  return (
    <DataContext.Provider
      value={{
        categories: state.categories,
        videos: state.videos,
        watchLater: state.watchLater,
        playlist:state.playlist,
        notes:state.notes,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
