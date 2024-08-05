function AuthLayout(props) {
    return (
      <section
        style={{ background: "#011b33", padding: "60px", height: "100vh" }}
      >
        <img
          src="https://dashboard.paystack.com/assets/img/logo.svg"
          alt="website logo"
        />
  
        {props.children}
      </section>
    );
  }
  
  export default AuthLayout;