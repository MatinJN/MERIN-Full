import { useState } from "react";
import Header2 from "../../Components/Layout/Header/Header2";
import axios from "axios"
import "./Login.css";




const Login = () => {
  const [toggle, setToglle] = useState(1);
  const toggleTab = (index) => {
    setToglle(index);
  };



  const [registerData, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    loading,
  } = registerData;



  const handleChange = (e) => {
    setRegister({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async() => {
  try {
    const resp =await axios.post('/auth/register',{
      fullName:registerData.username,
      email:registerData.email,
      password:registerData.password,
    })
  } catch (error) {
    
  }
  }
 
  return (
    <>
      <Header2 />
      <div className="top">
        <h2
          className={toggle === 1 ? "tab-active" : "tab"}
          onClick={() => toggleTab(1)}
        >
          Login
        </h2>
        <h2
          className={toggle === 2 ? " tab-active" : "tab"}
          onClick={() => toggleTab(2)}
        >
          Register
        </h2>
      </div>
      <section
        className={toggle === 1 ? "main active" : "main"}
        onClick={() => toggleTab(1)}
      >
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">SIGN IN</button>
        </form>
      </section>

      <section
        className={toggle === 2 ? "main active" : "main"}
        onClick={() => toggleTab(2)}
      >
        <form onSubmit={handleSubmit} >
          <input
            name="username"
            value={username}
            type="text"
            placeholder="UserName"

                    onChange={handleChange}

          />
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            value={password}
            type="password"
            placeholder="Creatpassword"
            onChange={handleChange}
          />
          {/* <input
            name="password2"
            value={password2}
            type="password"
            placeholder="Confirm password"
            onChange={handleChange}
          /> */}
          <button type="submit">CREATE</button>
        </form>
      </section>
    </>
  );
};

export default Login;
