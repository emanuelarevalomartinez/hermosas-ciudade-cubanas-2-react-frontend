import { NavBar } from "./NavBar"
import { AppRoutes } from "./routes"


function App() {

  return (
    <div className="flex-col min-h-screen w-screen bg-[#DDF2FD]">
       <NavBar/>
     <AppRoutes/>
     </div>
  )
}

export default App
