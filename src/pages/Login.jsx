import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-28 gap-4">
        <h1 className=" text-3xl font-thin mb-10">East Africa Tours</h1>
        <h1 className="text-4xl font-bold ">Welcome Back</h1>
        <p className="text-2xl font-thin">Sign in to your account</p>
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="You@example.com" />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" placeholder="***********" />
          </div>
          <div>
            <div>
              <input type="check" />
              <h1>Remeber me</h1>
            </div>
            <a href="forget password?"></a>
          </div>
          <div>
            <button>Sing in</button>
          </div>
          <div>
            <p>Don't have an account?</p>
            <a href="">Sing up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
