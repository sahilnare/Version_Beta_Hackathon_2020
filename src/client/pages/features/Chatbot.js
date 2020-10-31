import React, { useState } from "react";
// import Axios from "axios";
import Chatbot from "react-chatbot-kit";

import config from "../../components/chatbot/config";
import MessageParser from "../../components/chatbot/MessageParser";
import ActionProvider from "../../components/chatbot/ActionProvider";

const ChatbotPrediction = () => {

	return (
		<div className="Chatbox">
			<div className="container">
				<div>
					<h1>Chatbot for Disease Prediction</h1>
					<p className="content">
						Prediction of Diseases from answering questions about the symptoms.
					</p>
				</div>
        <div className="chatboxcontainer">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
			</div>
		</div>
	);
};

export default ChatbotPrediction;
