import { NavBar } from "./NavBar"
import { AppRoutes } from "./routes"


function App() {

  return (
    <div className="flex-col min-h-screen w-screen bg-[#DDF2FD] dark:bg-[#121212]">
       <NavBar/>
     <AppRoutes/>
     </div>
  )
}

export default App
