import Message from "./Message";

function WelcomeMessage() {
    return (
      <Message
        backgroundProps="green"
        title="Welcome"
        text="Thank you for visiting our spacecraft"
      />
    );
  }
  
  export default WelcomeMessage;