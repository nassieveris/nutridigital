import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "123456") {
      navigate("/dataform");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">Login</h2>
          <p className="text-center">Solo para usuarios autenticados</p>
        </div>
      </section>
      <section className="formulario rojo">
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="user">User:</label>
            <input
              type="text"
              id="user"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <br />
          <div className="form-item">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button className="form-button" type="submit">
            Acceder
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
