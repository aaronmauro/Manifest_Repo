import React, {useState} from 'react';
import Layout from './components/Layout/Layout';
import NavExpand from './components/NavExpand/NavExpand';
import {Switch, Route} from 'react-router-dom';
import Boards from './containers/Boards/Boards';
import NewNote from './containers/NewNote/NewNote';
import MainPage from './containers/Main/Main';
import 'react-bootstrap';
import 'bootswatch/dist/lux/bootstrap.min.css'; // quick style provided here
import './App.css';

function App() {

  const [notes,setNotes] = useState([])

  return (
    <div className="App">
      <Layout>
        <NavExpand />
        <p>{notes.text}</p>
      </Layout>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/newnote">
          <NewNote setNotes={setNotes}/>
        </Route>
        <Route path="/boards">
          <Boards notes={notes} setNotes={setNotes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
