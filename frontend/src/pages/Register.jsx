import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = () => {};

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
       
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
      
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              value={password2}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>
        </form>
      </section>
      Register
    </>
  );
};

export default Register;
