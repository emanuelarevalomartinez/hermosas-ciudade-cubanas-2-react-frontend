import { createContext, ReactNode, useState } from "react";

interface ContextPros{
     languageEs: boolean;
     setLanguageEs: (e: boolean) => void;
     lightTheme: boolean;
     setLightTheme: (e: boolean) => void;
     handleChangeLightStatus: () => void;
}

interface GlobalContextProps {
    children: ReactNode;
  }

const defaultContext: ContextPros = {
   languageEs: true,
   setLanguageEs: () => {},
   lightTheme: true,
   setLightTheme: () => {},
   handleChangeLightStatus: () => {},
}

export const Context = createContext<ContextPros>(defaultContext);

export function GlobalContext({children}:GlobalContextProps){

  const [lightTheme, setLightTheme] = useState(() => {
    const storedTheme = localStorage.getItem("lightTheme");
    if (storedTheme !== null) {
      return storedTheme === "true";
    }
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  

    const [languageEs, setLanguageEs] = useState(() => {
      const storedLanguage = localStorage.getItem("language");
      return storedLanguage === null || storedLanguage === "true";
    });

    const handleChangeLightStatus = () => {
      const newTheme = !lightTheme;
      setLightTheme(newTheme);
      localStorage.setItem("lightTheme", newTheme.toString()); 
    };

return(
    <Context.Provider
    value={{
        languageEs: languageEs,
        setLanguageEs: setLanguageEs,
        lightTheme: lightTheme,
        setLightTheme: setLightTheme,
        handleChangeLightStatus: handleChangeLightStatus,
    }}
    >
       {children}
    </Context.Provider>
)

}