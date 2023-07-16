import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {  Link } from "react-router-dom";
import Endpoints from "../apis/Endpoints";

const RegisterPage = () => {

  const [requestResponse, setRequestResponse] = useState({
    textMesssage: '',
    alertClass: ''
  })

  const initialValues = {
    firstName: '',
    email: '',
    mobile: '',
    password: ''
  }
  const onSubmit = (values) => {
    // console.log(values)
    axios.post(Endpoints.REGISTER_URL, values)
      .then((response) => {
        console.log(response.data);
        setRequestResponse({
          textMesssage: response.data.message,
          alertClass: 'alert alert-success'
        })
      },
        (error) => {
          console.log(error);
          setRequestResponse({
            textMesssage: error.response.data.message,
            alertClass: 'alert alert-danger'
          })
        })
      .catch((error) => { console.log(error) })
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    email: Yup.string().required('email is required').email('email must be valid'),
    mobile: Yup.string().required('mobile is required'),
    password: Yup.string().required('password is required').min(6, 'password must be atleast 6 characters')
  });

  //  const validate=(values)=>{
  //   let errors={}
  //   if(!values.firstName){
  //     errors.firstName='first name is required';
  //   }
  //   if (!values.email) {
  //     errors.email = 'Email is required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = 'Email must be a valid email address';
  //   }

  //   if(!values.mobile){
  //     errors.mobile='mobile is required'
  //   }
  //   if(!values.password){
  //     errors.password='password is required'
  //   }
  //  return errors;
  //  }


  const Formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
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
            <h2>Register</h2>
            <hr />

            <form onSubmit={Formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">FirstName</label>
                <input type="text"
                  name="firstName"
                  id="firstName"
                  className={Formik.touched.firstName && Formik.errors.firstName ? "form-control is-invalid" : "form-control"}
                  value={Formik.values.firstName}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.firstName && Formik.errors.firstName ? (
                  <small className="text-danger">{Formik.errors.firstName}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                  name="email"
                  id="email"
                  className={Formik.touched.email && Formik.errors.email ? "form-control is-invalid" : "form-control"}
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.email && Formik.errors.email ? (
                  <small className="text-danger">{Formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="text"
                  name="mobile"
                  id="mobile"
                  className={Formik.touched.mobile && Formik.errors.mobile ? "form-control is-invalid" : "form-control"}
                  value={Formik.values.mobile}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.mobile && Formik.errors.mobile ? (
                  <small className="text-danger">{Formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="text"
                  name="password"
                  id="password"
                  className={Formik.touched.password && Formik.errors.password ? "form-control is-invalid" : "form-control"}
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.password && Formik.errors.password ? (
                  <small className="text-danger">{Formik.errors.password}</small>
                ) : null}
              </div>
              <input type="submit" value="Register" className="btn btn-primary btn-block" disabled={!Formik.isValid}/>
            </form>
            <br />
            <p className="text-center">
              Already registered? <Link to="/login">Click here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;