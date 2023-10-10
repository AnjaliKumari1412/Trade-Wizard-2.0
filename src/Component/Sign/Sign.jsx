import React from 'react'
import "./Sign.css"
export default function SignIn() {
    return (
        <>
            <div className="sign">
                <div class="container">
                    <input type="checkbox" id="signup_toggle" />
                    <form class="form">
                        <div class="form_front">
                            <div class="form_details" data-text="web_text">SignIn with Tradewizard</div>
                            <input data-text="web_text" data-div="web_div" placeholder="Username" class="input" type="text" />
                            <input data-text="web_text" data-div="web_div" placeholder="Password" class="input" type="text" />
                            <button class="btn">Login</button>
                            <p class="switch" data-text="web_text">Don't have an account?
                                <label class="signup_tog" for="signup_toggle" >
                                    Sign Up
                                </label>
                            </p>
                        </div>
                        <div class="form_back">
                            <div class="form_details">SignUp with Trade Wizard</div>
                            <input placeholder="Firstname" class="input" type="text" />
                            <input placeholder="Username" class="input" type="text" />
                            <input placeholder="Password" class="input" type="text" />
                            <input placeholder="Confirm Password" class="input" type="text" />
                            <button class="btn">Signup</button>
                            <p class="switch">Already have an account?
                                <label class="signup_tog" for="signup_toggle">
                                    Sign In
                                </label>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
