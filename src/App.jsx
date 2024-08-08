import React, { useState } from 'react';
import './App.css';
import logo from "./assets/images/logo.png";
import Corousel from './Components/Corousel/Corousel';
import profile from './assets/images/Profile (1).png';
import social from './assets/images/Social Handles (1).png';


const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(true); // State variable to track sign-in status

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        setIsSignedIn(true);
    };

    return (
        <>
            <div className="allcontainer">
                <div className="container">
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <p className="textcontainer2">
                        Welcome to StartWSmall, a dynamic community where learning, innovation, and networking come together. Join us to fuel your personal and professional growth. Let's embark on an exploration of endless possibilities together. 🚀🌱💡
                    </p>
                </div>
                <button className='button1'>Join Now</button>
            </div>
            <div className="rousel">
            <Corousel />
            </div>
            
            {isSignedIn ? (
                <div className="allcontainer2">
                    <div className='newcontain'>
                        <div>
                            <p className='challenge'>TAKE UP THE CHALLENGE</p>
                            <p className='textcontainer'>Join the Challenge to test your boundaries and grow personally. Register and log in for enrollment opportunities. Finish the challenge to gain premium access, podcasting opportunities, content sharing, exclusive networking, and more benefits to enhance your experience!” 🚀🎙️📲🌟</p>
                        </div>
                        <div>
                            <div className="img">
                                <img src={profile} alt="Profile" />
                            </div>
                            <div className='name'>
                                <p className='textcontainer'>Your Name</p>
                            </div>
                            <div className='signinbuttons'>
                                <button className='button2'>Dashboard</button>
                                <button className='button3' onClick={handleSignOut}>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                
                <div className="signin-form">
                    <div>
                            <p className='challenge'>TAKE UP THE CHALLENGE</p>
                            <p className='textcontainer'>Join the Challenge to test your boundaries and grow personally. Register and log in for enrollment opportunities. Finish the challenge to gain premium access, podcasting opportunities, content sharing, exclusive networking, and more benefits to enhance your experience!” 🚀🎙️📲🌟</p>
                        </div>
                    <form onSubmit={handleSignIn}>
                        <div>
                            <input type="text" required placeholder='Enter Your Name'/>
                            <p className='bottomfield'></p>
                        </div>
                        <div>
                            <input type="email" required placeholder='Enter Email'/>
                            <p className='bottomfield'></p>
                        </div>
                        <div>
                           
                            <input type="password" required placeholder='Enter Password'/>
                            <p className='bottomfield'></p>
                        </div>
                        <button type="submit">Sign In</button>
                        
                    </form>
                </div>
            )}
            <div className="allcontainer3">
                <div className="newcontainname">
                <div className='credits'>
                        <p className='credits'>Aryan Wattamwar</p>
                        
                    </div>
                    
                    <div className="community">
                    
                    <div>
                    <p className='footer'>Join the Community ?</p>
                    <p className='textcontainer'>Set sail on a voyage of discovery! 🚀 Join our circle of innovators and let your dreams take wing. Register, meet the criteria, and together, we’ll soar to success! 🌟🛫</p>
                    </div>
                        
                        <div className="social">
                        <img src={social} alt="Social Handles" />
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default App;
