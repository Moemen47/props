import Profile from './profile/Profile'
import img from '../src/profile/m.JPG'

function App() {
  const fullname="Moemen"
  const bio="Representative customer service"
  const prof="Representative customer service"
  const hundlename=() => {
    
    return alert (`my name is: ${fullname}`)
  }
  return (
    <div className="App">
     <Profile fullname={fullname} bio={bio} profession={prof} hudle={hundlename}>{img}</Profile>
    </div>
  );
}

export default App;
