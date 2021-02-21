import React from "react";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../index.css';
import '../App.css';


// home page
class Phishing extends React.Component {

    render() {
        return (
            <div>
                <h1>Learning Modules for</h1>
                <h1 style={{ color: "#6246EA"}}>Internet Security</h1>
                <div class="group col-md-12" >
                    <div style={{ width: "605px", display: "inline-block" }}>
                        <div style={{ display: "inline-flex" }}>
                            <button type="button" class="btn btn-primary ml-3 subject-toggles" onclick="location.href = 'https://www.google.com/';">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#5CB85C" class="bi bi-star-half" viewBox="0 0 16 16">
                                    <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                                </svg>
                                <br></br>
                                Phishing</button>
                            <button type="button" class="btn btn-primary ml-3 subject-toggles">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#68F2D2" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                                <br></br>
                            Topic 2</button>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <button type="button" class="btn btn-primary ml-3 subject-toggles">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#68F2D2" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                                <br></br>
                        Topic 3</button>
                            <button type="button" class="btn btn-primary ml-3 subject-toggles"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#68F2D2" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                                <br></br>
                        Topic 4</button>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <button type="button" class="btn btn-primary ml-3 subject-toggles"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#68F2D2" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                                <br></br>
                            Topic 5</button>
                            <button type="button" class="btn btn-primary ml-3 subject-toggles"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#68F2D2" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                                <br></br>
                        Topic 7</button>
                        </div>
                    </div>
                </div>
                <div className="progress-align-items">
                    <div style={{ width: 400 }}>
                        <ProgressBar striped variant='success' animated now={45} />
                    </div>
                </div>
            </div>

        )
    }
}


export default Phishing;