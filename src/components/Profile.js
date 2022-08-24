import React from "react";

export default function Profile() {
    return(
        <div className="profile-wrapper">
        <div className="profile-image">
        </div>
        <div className="name">Tyavbee Victor</div>
        <div className="job">Web Developer</div>
        <div className="website">Iamtsquare07.com</div>
        <div className="buttons">
            <button className="email"><a href="emailto:victor@Iamtsquare07.com">
                <i class="fa fa-envelope" aria-hidden="true"></i> <span id="email-span">Email</span></a></button>
            <button className="linkedIn"><a href="https://www.linkedin.com/in/victor-tyavbee" target={"_blank"}>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i> <span id="linkedIn-span">LinkedIn</span></a></button>
        </div>
        </div>
    )
}