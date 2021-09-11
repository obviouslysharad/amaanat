import React from 'react';
import {Formik, Form} from 'formik';

function Signin() {
    return (
        <Formik initialValues = {{
            username: '',
            password: ''
        }} >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Login</h1>
                    <div>
                        <label className="form-control">Username</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    

                </div>
            )
            }
        </Formik>
    )
}

export default Signin
