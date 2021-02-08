import React from "react";

const User = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 login-section-wrapper">
            <div className="login-wrapper my-auto">
              <h1>Login</h1>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="email" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control"></input>
                </div>
                <div className="">
                  <label for="password">Password</label>
                  <input type="password" className="form-control"></input>
                </div>
                <input
                  name="login"
                  id="login"
                  class="btn btn-block login-btn"
                  type="button"
                  value="Login"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
