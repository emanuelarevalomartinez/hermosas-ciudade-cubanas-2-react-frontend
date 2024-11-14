import { createContext, ReactNode, useState } from "react";

interface ContextPros{
     numero:number;
     lightTheme: boolean;
     setLightTheme: (e: boolean) => void;
}

interface GlobalContextProps {
    children: ReactNode;
  }

const defaultContext: ContextPros = {
   numero: 2,
   lightTheme: true,
   setLightTheme: () => {},
}

export const Context = createContext<ContextPros>(defaultContext);

export function GlobalContext({children}:GlobalContextProps){

    const [numero] = useState(12);
    const [lightTheme, setLightTheme] = useState(()=> {
        if(window.matchMedia("(prefers-color-scheme: dark").matches){
             return false;
        }
      return true;
    });

return(
    <Context.Provider
    value={{
        numero: numero,
        lightTheme: lightTheme,
        setLightTheme: setLightTheme,
    }}
    >
       {children}
    </Context.Provider>
)

}