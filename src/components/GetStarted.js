import React from "react";
import Button from 'react-bootstrap/Button';
import '../index.css';
import '../App.css';
import { ReactComponent as Lock } from '../components/assets/lock.svg';
import { ReactComponent as Envelope } from '../components/assets/envelope.svg';
import { ReactComponent as Video } from '../components/assets/video.svg';
import { ReactComponent as Social } from '../components/assets/social-friends.svg';
import { ReactComponent as Briefcase } from '../components/assets/briefcase.svg';
import { ReactComponent as Games } from '../components/assets/games.svg';
import { ReactComponent as Owl } from '../components/assets/owl.svg';
import { ReactComponent as Laptop } from '../components/assets/laptop.svg';
import {ReactComponent as OwlLaptop} from '../components/assets/owl-laptop.svg';


// home page
class GetStarted extends React.Component {

    render() {
        return (
           
            <div>
                
                <h1 className="page-title">What would you like to learn?</h1>
                <div class="group col-md-12" >
                    <div style={{ width: "605px", display: "inline-block" }}>
                        <div style={{ display: "inline-flex" }}>
                            <button type="button" class="btn btn-default ml-3 subject-toggles">
                            <Lock/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                                </svg> */}
                                <br></br>
                                <h3 className="module-title">Internet Security</h3> </button>
                            <button type="button" class="btn btn-default ml-3 subject-toggles">
                            <Envelope/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                            </svg> */}
                                <br></br>
                                <h3 className="module-title"> Video Calling </h3></button>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <button type="button" class="btn btn-default ml-3 subject-toggles">
                            <Video/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
                            </svg> */}
                                <br></br>
                                <h3 className="module-title"> Email </h3></button>
                            <button type="button" class="btn btn-default ml-3 subject-toggles">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg> */}
                            <Social/>
                                <br></br>
                                <h3 className="module-title"> Social Media </h3></button>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <button type="button" class="btn btn-default ml-3 subject-toggles">
                            <Briefcase/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                            </svg> */}
                                <br></br>
                                <h3 className="module-title"> Office Skills </h3></button>
                            <button type="button" class="btn btn-default ml-3 subject-toggles">
                            <Games/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dice-6-fill" viewBox="0 0 16 16">
                                <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                            </svg> */}
                                <br></br>
                                <h3 className="module-title"> Games to Play </h3></button>
                        </div>
                    </div>
                </div>
                <div className="owl-wrapper">
                <OwlLaptop/>
                </div>
                
            </div>
            

        )
    }
}


export default GetStarted;