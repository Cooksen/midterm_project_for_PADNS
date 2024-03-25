import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components"  

function VisitCounter() {
    const [visits, setVisits] = useState(0);
  
    // Loading from localStorage
    useEffect(() => {
      const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
      setVisits(storedVisits + 1);
    }, []);
  
    // Saving in localStorage
    useEffect(() => {
      localStorage.setItem("visitCounter", visits);
    }, [visits]);
  
    return <p > Web Visit Count: {visits} </p>;
  }


const Home = () => {
  const Button = styled.div`
    width: fit-content;
    display: flex;
    height: fit-content;
    background-color: gray;
    padding: 2%;
    text-decoration: none;
    color: white;
    cursor: pointer;
    border-radius: 0px;

    transition: 0.5s;
    transform: translateY(20px);
    margin-right: auto;

    &:hover{
      transform: translateY(20px);
      /* transform: scale(1.05); */
      background-color: black;

    }
  `
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(./assets/img/logo/senchao.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <VisitCounter />

            <h3 className="name">Sen Chao</h3>
            <p className="job">
            A master student in the Department of Electronic Engineering, EECS(Cyber Security Group) at National Taiwan University.<br/><br/>
            Internet Research Lab: Fucous on 5g/b5g and LEO-SAT communications. i.e. modulation techniques, machine learning applications.
            </p>
            {/* END JOB */}
            <br />
            {/* <a href={ExampleDoc} download="SenChao's Resume" target='_blank' style={{textDecoration:"none", marginTop:"5%", width:"100%"}}>
              <Button >Download my CV</Button>
            </a> */}
          </div>
          {/* END DETAILS */}
          
        </div>
        {/* END HOME CONTENT */}
        
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
