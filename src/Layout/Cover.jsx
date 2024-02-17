import React from "react";
import "../CSS/cover.css";

//icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import Header from "./Header";

const Cover = () => {
  return (
    <>
      <section className="cover">
        <Header />

        <div className="cover_content"> 
          <div className="left">

            <div className="">
              <h2 className="identity">
                <span>Hello my name is </span> Mizanur Rahman Sazu and I am a
                <span> Front-End</span> developer
              </h2>
              <Link className="cover_btn">see my works</Link>
            </div>

            <div className="icons">
              <Link to={"https://www.facebook.com/sazu2441"} target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </Link>
              <Link to={
                  "https://www.linkedin.com/in/mizanur-rahman-sazu-3a139828b"
                } target="_blank"

              >
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </Link> 
              <Link to={"https://github.com/coder-mizan01"} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon" />
              </Link>
            </div>
            
          </div>


          <div className="right">
            <div>
               <div className="img"></div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Cover;
