import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../components/context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home">
      <h1 className="charity">YOU CAN DO IT CHARITY </h1>
      {user && <h4>Welcome {user.username}</h4>}
      <p>
        <strong>About Us:</strong> We at You Can Do It Charity work across the
        spectrum of health, poverty, water, housing, education and other social
        issues faced by the low-income group. Some of the few areas we focus on
        are:
      </p>

      <p>
        <strong>Poverty:</strong> Breaking the Cycle: Empowering Women in
        Poverty" Description: Providing vocational training, microloans, and
        mentorship programs to women in poverty-stricken communities to achieve
        financial independence. Delivering food packages and essential supplies
        to families in extreme poverty, providing immediate relief and a
        foundation for rebuilding.
      </p>

      <p>
        <strong>Water:</strong> Wells of life: Clean Water for rural communities
        Building sustainable wells in undeserved areas to provide access to
        clean drinking water and improve health outcomes.
      </p>

      <p>
        <strong>Health:</strong> Care Clinics: Mobile Health Service. Deploying
        mobile clinics to deliver essential medical care to remote communities
        lacking healthcare access.
      </p>

      <p>
        <strong>Housing:</strong> Shelter Beyond Walls: Transitional Housing"
        Providing temporary housing and support services to individuals
        transitioning from homelessness, helping them rebuild their lives.
      </p>

      <p>
        <strong>Education:</strong> Hope on Wheels: Mobile Classrooms for Rural
        Areas" Bringing education to remote areas via mobile classrooms, this
        project ensures that children without access to schools can still learn
        and grow.
      </p>

      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> Tempelhofer Damm 133-137, Berlin, Germany
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+4917631388428">(0176) 31388428</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ccogberlin@gmail.com">ccogberlin@gmail.com</a>
        </p>
        <p>
          <strong>Facebook:</strong>{" "}
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christ Church Of God
          </a>
        </p>
      </div>
    </div>
  );
};
export default Home;
