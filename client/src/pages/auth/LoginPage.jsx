import React, { useRef } from "react";
import { useNavigate } from "react-router";
// import SampleForm from "../../components/others/SampleForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    });
    if (!response.ok) {
      console.log(`login fail`);
    }
    const data = await response.json();
    if (data.mess === "success") {
      // console.log(data);
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <section>
        <h4 className="text-center text-2xl text-red-600">Login Page</h4>
        <div className="grid grid-cols-3 gap-3 mt-10">
          <form
            className="col-start-2 border  p-6 rounded border-red-400"
            onSubmit={loginSubmit}
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 border border-amber-200 w-full rounded-2xl my-2"
              ref={passwordRef}
            />
            <input
              type="submit"
              value="Login"
              className="w-full my-2 bg-blue-500 hover:bg-blue-600 px-2 py-2 text-white rounded-2xl"
            />
          </form>
          {/* <SampleForm /> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginPage;
