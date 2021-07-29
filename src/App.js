import './App.css';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Switch,
  Route
} from 'react-router-dom';
import Landing from './Landing';
import CreateQuiz from './CreateQuiz/CreateQuiz';
import CreateQuestion from './CreateQuiz/CreateQuestion/CreateQuestion';


String.prototype.hashCode = function () {
  var hash = 0;
  if (this.length === 0) {
    return hash;
  }
  for (var i = 0; i < this.length; i++) {
    var char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push('/landing')
  }, []);



  return (
    <div className="App">
      <Switch>

        <Route path="/create-question" >
          <CreateQuestion />
        </Route>
        <Route path="/create-quiz">
          <CreateQuiz />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
