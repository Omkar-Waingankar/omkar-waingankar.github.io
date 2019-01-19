import React from 'react'
import Home from "./components/Home.js"
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path={'/'} component={Home} />
    </div>
  )
}

export default App
