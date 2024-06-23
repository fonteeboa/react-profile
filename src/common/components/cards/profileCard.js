import React from 'react';
import img from './profilePicture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src={img} alt="Profile 3" />
                </div>
                <div className="content">
                    <div className="contentBx">
                        <h1>João Victor Fonte<br /><span>Full Stack Developer</span></h1>
                    </div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}><a href="https://github.com/fonteeboa"> <FontAwesomeIcon icon={faGithub} /></a></li>
                        <li style={{ '--i': 2 }}><a href="https://www.linkedin.com/in/galvao845/?locale=en_US"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
