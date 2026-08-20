import { useState } from "react";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8000/api/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const message =
          data.username?.[0] ||
          data.email?.[0] ||
          data.password?.[0] ||
          "Registration failed.";

        throw new Error(message);
      }

      onRegister({
        username,
        email,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="auth-card">
      <h2>Create an Account</h2>

      {error && <p className="auth-error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password (minimum 8 characters)"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={8}
          required
        />

        <button type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
}

export default Register;
