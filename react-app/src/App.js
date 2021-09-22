import './App.css';
import Signup from './components/signup';
import Login from "../src/components/login"
import view from "../src/components/view"
import post from "../src/components/createpost"
import Updatepost from "../src/components/updatepost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
  


    <Router>
  <Route exact path="/" component={Login} />
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/posts" component={view} />
  <Route exact path="/post" component={post} />

  </Router>
      
    </div>

  );
}

export default App;
