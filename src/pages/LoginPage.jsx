import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import Endpoints from "../apis/Endpoints";

const LoginPage = () => {


    const [requestResponse, setRequestResponse] = useState({
        textMesssage: '',
        alertClass: ''
    })

    const initialValues = {
        email: '',
        password: ''
    }
    const navigate = useNavigate();
    const onSubmit = (values) => {
        // console.log(values)
        axios.post(Endpoints.LOGIN_URL, values)
            .then((response) => {
                const token = response.data.token; // Assuming the API response contains a 'token' property
                localStorage.setItem('token', token);
                console.log(response.data);
                setRequestResponse({
                    textMesssage: "Login Sucessfull",
                    alertClass: 'alert alert-success'
                });
                navigate("/");
            },
                (error) => {
                    console.log(error);
                    setRequestResponse({
                        textMesssage: "Login not sucessfull",
                        alertClass: 'alert alert-danger'
                    })
                })
            .catch((error) => { console.log(error) })

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email must be a valid email'),
        password: Yup.string().required('password is required').min(6, 'password must be atleast 6 characters')
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div className={requestResponse.alertClass} role="alert">
                            {requestResponse.textMesssage}
                        </div>
                        <h2>Login</h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount
                        >
                            {
                                (formik) => {
                                    return (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"}
                                                />
                                                <ErrorMessage name="email">
                                                    {(ErrorMessage) => (
                                                        <small className="text-danger">{ErrorMessage}</small>
                                                    )}
                                                </ErrorMessage>

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">password</label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"}
                                                />
                                                <ErrorMessage name="password">
                                                    {(ErrorMessage) => (
                                                        <small className="text-danger">{ErrorMessage}</small>
                                                    )}
                                                </ErrorMessage>

                                            </div>
                                            <input type="submit"
                                                value="login"
                                                className="btn btn-primary btn-block"
                                                disabled={!formik.isValid}
                                            />
                                        </Form>
                                    )
                                }
                            }

                        </Formik>

                        <br />
                        <p className="text-center">
                            New User? <Link to="/register">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>


        </div>
    )
}

export default LoginPage;