function Message(props) {
    return (
      <section style={{ background: props.backgroundProps }}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </section>
    );
  }
  
  export default Message;