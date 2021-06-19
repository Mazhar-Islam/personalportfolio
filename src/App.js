
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header/Navbar'
import About from '../src/components/About'
//import Text from '../src/components/Text'
import Skill from './components/Skill'
import Contact from '../src/components/Contact'

import Service from '../src/components/Service'
import Experience from '../src/components/Experience'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Navbar/>
          <About/>
           <Skill/>
           <Experience/>
          </Route>
           
           <Route exact path="/Contact">
           <Navbar/>
           <Contact></Contact>
           </Route>
           <Route exact path="/services">
           <Navbar/>
           <Service/>
           </Route>
          
        </Switch>
        
      
      {/* <Text/> */}
      </Router>
     
    
    </div>
  );
}

export default App;
