import {Link} from 'react-router-dom'

import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, topic} = value

      return (
        <>
          <Header />
          {name.length !== 0 ? (
            <div>
              <h1>Hello {name}</h1>
              <p>Welcome to {topic}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </div>
          )}
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
