import AuthLayout from "./AuthLayout";

function ForgotPassword() {
  return (
    <AuthLayout>
      <h3>Forgot Password</h3>
      <form>
        <input type="email" />
        <button type="submit">Request reset</button>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;