import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tictactoe.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//components imported from MatUI
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow'
import Game from './tictactoe.js';
//icons that are used for route selectors
import HomeIcon from '@mui/icons-material/Home'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import GamepadIcon from '@mui/icons-material/Gamepad'

//NOTE: tab 3 is the tictactoe game built in part 2 and has some of the React requirements (state, props, etc.)

//entire app us implemented as a function component
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="ulContainer">
            <ul className="ul">
              {/* Have different list items link to different routes */}
              <li className="li">
                <Link to="/">Home</Link>
                &nbsp;
                <HomeIcon color="primary" />
              </li>
              <li className="li">
                <Link to="/lyrics">Lyrics</Link>
                &nbsp;
                <MusicNoteIcon color="primary" />
              </li>
              <li className="li">
                <Link to="/tictactoe">TicTacToe</Link>
                &nbsp;
                <GamepadIcon color="primary" />
              </li>
            </ul>
          </div>
        </nav>

        {/* examine children routes and render the first to match */}
        <Switch>
          <Route path="/lyrics">
            <Lyrics />
          </Route>
          <Route path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

//home route result render
class Home extends React.Component {
  render() {
    return (
      <div style={{
        // backgroundColor: "silver",
        padding: "10px",
      }}>
        <h2 className="routeHeader">Home</h2>
        <TwoHookButton></TwoHookButton>
        <h2 >ACL Tonight</h2>
        {/* MUI Table for inheritance of some basic features */}
        <Table border="1" align="center">
          <TableRow>
            <th>Artist</th>
            <th>Stage</th>
            <th>Time</th>
            <th>Genre</th>
          </TableRow>
          <TableRow align="center">
            <td>Surfaces  </td>
            <td>Honda</td>
            <td>2:30PM</td>
            <td>Pop</td>
          </TableRow>
          <TableRow align="center">
            <td>Greta Van Fleet</td>
            <td>Lady Bird</td>
            <td>6:30PM</td>
            <td>Retro Rock</td>
          </TableRow>
          <TableRow align="center">
            <td>Tyler, the Creator</td>
            <td>Lady Bird</td>
            <td>8:30PM</td>
            <td>Alternative Hip-Hop</td>
          </TableRow>
        </Table>
        {/* Non-MUI list to use more basic text */}
        <h3>A list of Dining options:</h3>
        <ul>
          <li>Black's BBQ</li>
          <li>Mighty Cone</li>
          <li>Happy Chick</li>
          <li>Blenders & Bowls</li>
          <li>Good Pop</li>
          <li>Torchy's Tacos</li>
          <li>Chi'lantro</li>
        </ul>
        <p align="left">The table above shows some information about ACL, the music festival I went to this past weekend.
          All of the shows were <b>incredible</b>. I think Greta Van Fleet was surprisingly awesome and feels like a revived Led Zeppelin.
          Here's a paragraph of info about them from Wikipedia.
          Their debut full-length studio album, Anthem of the Peaceful Army, was released on October 19, 2018, and topped the Billboard Rock Album charts in the first week after its release. The album's first single, "When the Curtain Falls", was released ahead of it in July 2018 and became the band's third number-one single on the U.S. Billboard Mainstream Rock charts. Anthem of the Peaceful Army also debuted atop the Billboard Hard Rock charts and reached the number one spot on the Billboard Top Album Sales charts in the first week after its release. A second studio album, The Battle at Garden's Gate was released on April 16, 2021.
          The link below links to the ACL lineup page.
          <a href="https://www.aclfestival.com/lineup">ACL Lineup Page</a>
        </p>
      </div>
    );
  }
}

//about route result render
function Lyrics() {
  return (
    <div>
      <h2 className="routeHeader">Lyrics</h2>
      <p className="body">
        <b>
          "Black Smoke Rising"
          <br></br>
          <br></br>

          I didn't know there was a tower
          <br></br>
          Where they look out to the land
          <br></br>
          To see the people quickly passing by
          <br></br>
          This is for their own desire
          <br></br>
          As they spit down to the earth
          <br></br>
          To feel the power boiling in their veins
          <br></br>

          Oh oh oh oh oh yeah yeah
          <br></br>
          Oh oh oh oh oh yeah yeah
          <br></br>

          And the black smoke rises
          <br></br>
          From the fires we've been told
          <br></br>
          It's the new age crisis
          <br></br>
          And we will stand up in the cold
          <br></br>
          Stand up in the cold
          <br></br>

          Many people are dividing
          <br></br>
          And a world apart
          <br></br>
          With just one heart
          <br></br>
          Is bound to keel and fade away
          <br></br>
          None of us will be deciding
          <br></br>
          And the fate of man is in the hands
          <br></br>
          Of he who stands and heeds the call
          <br></br>

          Oh oh oh oh oh yeah yeah
          <br></br>
          Oh oh oh oh oh yeah yeah
          <br></br>

          And the black smoke rises
          <br></br>
          From the fires we've been told
          <br></br>
          It's the new age crisis
          <br></br>
          And we will stand up in the cold
          <br></br>
          Stand up in the cold
          <br></br>

          Oh oh
          <br></br>
          Oh oh
          <br></br>

          We won't stand alone, we will stand up in the cold
          <br></br>
          We won't stand alone, we will stand up in the cold
          <br></br>
          We won't stand alone, we will stand up in the cold
          <br></br>

          Yeahhh
          <br></br>

          And the black smoke rises
          <br></br>
          From the fires we've been told
          <br></br>
          It's the new age crisis
          <br></br>
          And we will stand up in the cold
          <br></br>

          And the black smoke rises
          <br></br>
          From the fires we've been told
          <br></br>
          It's the new age crisis
          <br></br>
          And we will stand up in the cold
          <br></br>
          Stand up in the cold
          <br></br>
        </b>
      </p>
    </div>
  );
}

//tictactoe route result render
class TicTacToe extends React.Component {
  render() {
    return (<Game ></Game>)
  }
}

//React function component that uses hooks
//there is a hook for count, and a hook for even/odd that changes on each click
function TwoHookButton() {
  const [count, setCount] = useState(0);
  const [odd, setOdd] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1)
        setOdd(odd === 0 ? 1 : 0)
      }}>
        click to change to an {!odd ? 'odd' : 'even'} # of clicks
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));