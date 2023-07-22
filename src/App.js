import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DateAndTime from "./components/DateAndTime/DateAndTime";
import Main from "./components/Main/Main";
import Recording from "./components/Recording/Recording";
import Services from "./components/Services/Services";
import Specialists from "./components/Specialists/Specialists";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Specialists' element={<Specialists />} />
          {/* <Main /> */}
          {/* <Specialists /> */}
          {/* <Services /> */}
          {/* <DateAndTime /> */}
          {/* <Recording /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
