class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowerCaseMessage = message.toLowerCase()

    if(this.state.init) {
      this.actionProvider.questions();
    }
    else {
      if (lowerCaseMessage.includes("start")) {
        this.actionProvider.greet();
      }
    }
  }
}

export default MessageParser;
