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
          <CreateQuiz  />
        </Route>
        <Route path="/landing">
          <Landing  />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
