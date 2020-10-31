class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Cool! Please reply yes to the symptoms that you have.");
    this.updateChatbotState(greetingMessage);
    this.initBot();
    this.questions();
  }

  questions() {
    const questionMessage = this.createChatBotMessage(`Do you have cough?`);
    this.updateChatbotState(questionMessage);
  }

  initBot() {
    this.setState(prevState => ({
     	...prevState, init: true
     }))
  }

  updateChatbotState(message) {

   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
