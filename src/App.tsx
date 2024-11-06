import image from '../public/cuba/banderas/wp8347532-flag-cuba-wallpapers.jpg'

function App() {

  return (
    <>
     <div className="flex min-h-screen w-screen bg-[#3572EF] text-[#A7E6FF]">
     <p>hola</p>
     <div>
      <img 
      className='h-40'
      src={image} alt="It is no t possible to view the image" />
     </div>
     </div>
    </>
  )
}

export default App
