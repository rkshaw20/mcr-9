import { createContext, useContext, useState } from "react";

const DataContext=createContext({
    data:''
})

export const useDataContext=()=>useContext(DataContext);

const DataContextProvider=({children})=>{
    const [data,setData]=useState('');
    return(
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider