import AuthLayout from "./AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <form>
        <input type="email" />
        <input type="password" />
        <button>Submit</button>
      </form>
    </AuthLayout>
  );
}

export default Login;