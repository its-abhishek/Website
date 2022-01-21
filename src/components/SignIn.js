import React, { Component } from "react";

function Contact(){
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User ID:</label>
                    <input type="text" className="UserID" placeholder="Enter Id" />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="Password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot Password?</a>
                </p>
            </form>
        );
    }

export default Contact;