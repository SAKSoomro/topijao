import { Search, Gear, Bell, PersonCircle } from 'react-bootstrap-icons';
import './App.css';
import logo from './logo.png'
import ProgressBar from "react-customizable-progressbar";

function App() {
  return (
    <div className="container">
      <div className='side-module'>
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='side-links'>
          <ul>
            <li className='fa fa-active fa-th-large'><i>Dashboard</i></li>
            <li className='fa fa-credit-card'><i>Apply for loan</i></li>
            <li className='fa fa-user-o'><i>My Account</i></li>
            <li className='fa fa-sticky-note-o'><i>History</i></li>
            <li className='fa fa-bell-o'><i>Notifications</i></li>
            <li className='fa fa-gear'><i>Settings</i></li>
            <li className='fa fa-question-circle'><i>Help</i></li>
          </ul>
        </div>
        <div className='footer-buttons'>
          <a href='#'>Switch Account</a>
          <a href='#'>Log out</a>
        </div>
      </div>
      <div className='verticle-content'>
        <header>
          <div className='search-input'>
          <input type='text' placeholder='Search for anything'/>
          </div>
          <div className='icons'>
            <Bell className='icon'/>
            <Gear className='icon'/>
            <PersonCircle className='icon'/>
          </div>          
        </header>
        <div className='content-title'>
          <p>Patient Dashboard</p>
        </div>
        <div className='horizontal-card financial-summary'>
            <div className='fs-card-top'>
              <h4>financing summary</h4>
              <p>Application ID:548712468</p>
            </div>
            <div className='fs-card-body'>
              <div className='fs-result-card orange'>
                <h3>25,000</h3>
                <p>Loan Amount</p>
              </div>
              <div className='fs-result-card green'>
                <h3>10,000</h3>
                <p>Already Paid</p>
              </div>
              <div className='fs-result-card red'>
                <h3>15,000</h3>
                <p>Remaining</p>
              </div>
            </div>
        </div>
        <div className='horizontal-card financing-tracker'>
            <div className='fs-card-top'>
              <h4>financing tracker</h4>
            </div>
            <div className='ft-card-body'>
              <div className='percentage-bar'>
              <ProgressBar
              className='progress'
      radius={60}
      progress={90}
      cut={180}
      rotate={-180}
      strokeWidth={34}
      strokeColor="purple"
      strokeLinecap="square"
      trackStrokeWidth={34}
      trackStrokeColor="#ffd2ff"
      trackStrokeLinecap="square"
      pointerRadius={0}
      initialAnimation={true}
      transition="1.5s ease 0.5s"
      trackTransition="0s ease"
    > 
      </ProgressBar>
              
              <div className='card-bottom-list'>
                <div>
                <p>•Days</p>
              <p>•Hours</p>
              <p>•Days</p>
              <p>•Hours</p>
                </div>
                <div className='day-time'>
                  25:06:21:32
                </div>
                </div>
              </div>
              <div className='ft-side-cards'>
                  <div className='ft-side-card'>
                    <p className='side-card-title'>Collected Date</p>
                    <p className='side-card-duration'>10 June 2022</p>
                  </div>
                  <div className='ft-side-card'>
                    <p className='side-card-title'>Payment Date</p>
                    <p className='side-card-duration'>20 July 2022</p>
                  </div>
                  <div className='ft-side-card'>
                    <p className='side-card-title'>Financing Period</p>
                    <p className='side-card-duration'>10 Months</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
   
  );
}

export default App;
