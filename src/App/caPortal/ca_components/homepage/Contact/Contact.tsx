import React from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
        <div className="main">
            <div className="container">
                <div className="profile">
                    <div className="card1">
                        <div className="imgBx">
                            <img src={require('./contact_images/shobitSingh.jpg')} alt = "avatar"/>
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>Shobit Singh<br/><span>Coordinator, Hospitality</span></h2>
                            </div>
                        </div>
                    </div>

                    <div className="card2">
                        <div className="imgBx">
                            <img src={require('./contact_images/mayankSarwa.jpg')} alt = "avatar"/>
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>Mayank Sarwa<br/><span>Coordinator, Hospitality</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;