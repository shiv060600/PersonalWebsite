import './App.css'
import NavBar from './ui/navBarTop'
function Home() {

  return (
    <>
      <NavBar/>
      <div className="pt-16">
        {/* Your main content goes here */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">Welcome to my website</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>
      </div>
    </>
  )
}

export default Home
