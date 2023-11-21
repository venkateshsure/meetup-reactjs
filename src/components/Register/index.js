import {Component} from 'react'

import './index.css'

import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

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

class Register extends Component {
  state = {isError: false}

  onSubmitForm = event => {
    event.preventDefault()
    const {history} = this.props
    history.replace('/')
  }

  changeName = (event, onChangeName) => {
    onChangeName(event.target.value)
  }

  changeTopic = (event, onChangeTopic) => {
    onChangeTopic(event.target.value)
  }

  render() {
    const {isError} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {name, topic, onChangeName, onChangeTopic} = value
          return (
            <>
              <Header />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <div>
                  <h1>Let us join</h1>
                  <form onSubmit={this.onSubmitForm}>
                    <label htmlFor="name">NAME</label>
                    <input
                      value={name}
                      placeholder="Your name"
                      type="text"
                      id="name"
                      onChange={event => this.changeName(event, onChangeName)}
                    />
                    <label htmlFor="topics">TOPICS</label>
                    <select
                      onChange={event => this.changeTopic(event, onChangeTopic)}
                      value={topic}
                      id="topics"
                    >
                      {topicsList.map(each => (
                        <option value={each.id} key={each.id}>
                          {each.displayText}
                        </option>
                      ))}
                    </select>
                    <button type="submit">Register Now</button>
                    {isError && <p>Please enter your name</p>}
                  </form>
                </div>
              </div>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
