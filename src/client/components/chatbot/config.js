import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: 'Piperbot',
  initialMessages: [createChatBotMessage(`Hello there! Are you ready for the questions? Enter 'start' to proceed.`)]
}

export default config;
