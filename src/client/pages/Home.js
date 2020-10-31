import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = ({history, message}) => {

  const cta = (user) => {
		history.push("/signup");
	};

  return (
    <React.Fragment>
      <div className="Home">
  			<div className="container">
  				{/* TOP SECTION  */}
  				<div className="top">
  					<div className="left">
  						<h3 className="welcome">
  							Welcome to{" "}
  							<div className="logo">
  								<h1>Pied Piper</h1>
  							</div>
  						</h3>
  						<p>
  							A service to connect patients and doctors.
  							<br />Patients can book appointments
  							and can get themeselves checked online and get prescribed.
  						</p>
  						<button className="primary cta" onClick={() => cta()}>
  							"Get Started"
  						</button>
  					</div>
  					<div className="right">
  						<img src={require("../assets/svg/doc3.svg")} alt="" />
  					</div>
  				</div>

  				<div className="middle">
  					<h2>Features</h2>
  					<div className="cards">
  						<div className="card">
  							<img
  								src={require("../assets/icons/heart.png")}
  								alt="Heart Icon"
  							/>
  							<div className="content">
  								<h4>Disease Predicition</h4>
  								<p>
  									Predicition of Breast Cancer and Pneumonia from X-RAY Scans and also
  									patients can know the health status of their heart too.
  								</p>
  							</div>
  						</div>
  						<div className="card">
  							<img
  								src={require("../assets/icons/medicine.png")}
  								alt="Heart Icon"
  							/>
  							<div className="content">
  								<h4>General Name of Medicines</h4>
  								<p>
  								Making brand names of medicines available to the patient
  								by providing a generic name of the medicine, which are far cheaper and easily available
  								</p>
  							</div>
  						</div>
  						<div className="card">
  							<img
  								src={require("../assets/icons/doctor.png")}
  								alt="Heart Icon"
  							/>
  							<div className="content">
  								<h4>Book Appointment</h4>
  								<p>
  								Patients can book online appointments with a specific doctor and can get prescription afterwards
  								</p>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
    </React.Fragment>
  )

}

export default Home;
