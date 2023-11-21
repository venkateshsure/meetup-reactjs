import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'
import Register from './components/Register'
import Home from './components/Home'
import MeetupContext from './context/MeetupContext'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {name: '', topic: topicsList[0].id}

  onChangeName = value => {
    this.setState({name: value})
  }

  onChangeTopic = value => {
    this.setState({topic: value})
  }

  render() {
    const {name, topic} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}
export default App
