import React from "react";
import { Link } from "react-router-dom" 
import ProjectLink from "./ProjectLink";

const Home = () => {
  return (
    <div className="home-container">
      <div className="paper-bg">
        <nav className="about-nav">
          <Link className="nav" to="/about">
              <i>About</i>
          </Link>
        </nav>
      <ProjectLink 
            date="2021" 
            title="Now You See Me" 
            location="The Booth, Gus Fisher"
            url="iii"/>
      <ProjectLink 
          date="2020" 
          title="Activities/Inventory for Feeling Blue" 
          location="Blue Oyster Postal Project 2020"
          url="ii"/>
      <ProjectLink 
          date="2018" 
          title="Daily Exposure" 
          location="Window"
          url="i"/>
      <ProjectLink 
          date="2018" 
          title="Strange Islands" 
          location="Window Online"
          url="/strangeislands"/>
      </div>
    </div>
  );
};

export default Home;
