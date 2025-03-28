'use client'

import { createContext, useContext, useState } from "react";

interface DataInterface {
    name: string,
    setName : (name: string)=>void;
    }

// orginal name of the data con
const NameContext =createContext<DataInterface>({name:'',setName:name=>name})

export function AppWrapper ({children}:{children:React.ReactNode}){
    const [name, setName]=useState<string>('1');

    return(
        <NameContext.Provider value={{name,setName}}>
        {children}
        </NameContext.Provider>
    )
}

export function useNameContext(){
    return useContext(NameContext);
}