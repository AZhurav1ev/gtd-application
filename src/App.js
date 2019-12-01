import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TaskDetails from './components/tasks/TaskDetails'
import CreateTask from './components/tasks/CreateTask'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CompletedTasks from './components/tasks/CompletedTasks'
import PriorityTasks from './components/tasks/PriorityTasks'
import EditTask from './components/tasks/EditTask'
import About from './components/about/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/task/:id" component={TaskDetails} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateTask} />
          <Route path="/completed" component={CompletedTasks} />
          <Route path="/priority" component={PriorityTasks} />
          <Route path="/edit/:id" component={EditTask} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


