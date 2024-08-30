// import { BackgroundBeams } from './components/ui/background-beams'
import Dept from './Screens/DepartmentPage/Dept'
import Events from './Screens/Events/Events'
import FormScreen from './Screens/FormPage/FormScreen'
import FirstPage from './Screens/LandingPage/FirstPage'
import NavBar from './Screens/LandingPage/NavBar'

const Home = () => {
  return (
    <div className='h-screen'>
    <NavBar/>
    <FirstPage/>
    <Dept/>
    <Events className="z-10"/>
    <FormScreen/>
    </div>
  )
}

export default Home