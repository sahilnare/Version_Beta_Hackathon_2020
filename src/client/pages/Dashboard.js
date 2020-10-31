import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class Dashboard extends Component {

  componentDidMount() {

  }

  render() {

    const services = [
    	{
    		title: "Chatbot for Disease Prediction",
    		image: require("../assets/icons/heart.png"),
    		imageAlt: "Heart Icon",
    		desc:
    			"Answer simple questions and get to know which disease you might have based on the symptoms",
    		link: "/dashboard/chatbot",
    	},
    	{
    		title: "Communicate with Doctors",
    		image: require("../assets/icons/face.png"),
    		imageAlt: "Face Icon",
    		desc:
    			"Communicate with a doctor online through video call and sharing your medical history",
    		link: "/dashboard/doctorchat",
    	},
    	{
    		title: "Save your medical history online",
    		image: require("../assets/icons/medicine.png"),
    		imageAlt: "Medicine Icon",
    		desc:
    			"Share your medical history online so that it's easier for doctors to access it and diagnose you accordingly",
    		link: "/dashboard/medical",
    	},
    	{
    		title: "Book An Appointment",
    		image: require("../assets/icons/doctor.png"),
    		imageAlt: "Doctor Icon",
    		desc:
    			"Patients can book online appointments with a specific doctor and can get prescription afterwards.",
    		link: "/dashboard/appointment",
    	},
    ];

    return (
      <React.Fragment>
        <div className="Dashboard">
    			<div className="container">
    				<h1>Hi Sahil</h1>
    				<div className="cards">
    					{services.map(({ imageAlt, title, image, desc, link }) => (
    						<Card
    							key={title}
    							title={title}
    							image={image}
    							imageAlt={imageAlt}
    							desc={desc}
    							link={link}
    						/>
    					))}
    				</div>
    			</div>
    		</div>
      </React.Fragment>
    )
  }
}

export default Dashboard;
