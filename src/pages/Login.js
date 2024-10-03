import React from "react";

const Login = () => {
  return(
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">Login</h2>
          <p className="text-center">Solo para usuarios autenticados</p>
        </div>
      </section>
      <section className="formulario rojo">
        <form id="loginForm">

          <div className="form-item">
            <label htmlFor="user">User:</label>
            <input type="text" id="user" name="user" />
          </div>
          <br></br>
          <div className="form-item">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <br></br>
          <button className="form-button" type="submit">Acceder</button>
        </form>
      </section>
    </>
  )
}

export default Login;
