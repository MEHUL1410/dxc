import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';

class login extends Component {
    constructor(props){
        super(props)
    
        this.state = ({
            userId:'',
            name: '',
            email:'',
            password:'',
            confirmPassword:'',
            phone:'',
            pinCode:'',
            signUp:''
        })
        
    }

    validateForm(values){
        let errors={}
        if(!values.userId){
            errors.userId = 'please enter id'
        }
        else if(!values.userId.isInteger){
            errors.userId ='please enter number in user id'
        }
        else if(!values.name){
            errors.name = 'please enter name'
        }
        else if(!values.email){
            errors.email='please enter email'
        }
        else if(!values.password){
            errors.password='please enter password'
        }
        else if(values.password.length < 6){
            errors.password="password should not be less than 6"
        }
        else if(values.confirmPassword !== values.password){
            errors.confirmPassword = "confirm password and password should match"
        }
        
        else if(!values.phone){
            errors.phone='please enter your mobile number'
        }
        
        else if(values.phone.length !== 10 ){
            errors.phone = "mobile number should be of 10 digits"
        }
        else if(!values.pinCode){
            errors.pinCode='please enter pincode'
        }
        else if(values.pinCode.length !== 6 ){
            errors.pinCode = "pin code should be of 6 digits"
        }
        else if(!values.signUp){
            errors.signUp='please select any one of the options'
        }
        console.log(errors)
        return errors
      }
    render() {
        let { userId ,name, email, password,confirmPassword, phone, pinCode,signUp } = this.state
      return (
          
        <div className="container"> 
          <h1>App</h1>
        
              <div class = "col-md-4" align="center">
                 
                  <Formik
                   initialValues={{ userId,name, email, password, phone, pinCode,signUp, confirmPassword }}
                  enableReinitialize = "true"
                  validateOnChange={false}
                  validateOnBlur={false}
                  validate ={this.validateForm}
                  onSubmit={this.onSubmit}
                  >
                  
                      <Form>
                        <h2>Vehicle App</h2>
                        <ErrorMessage name="userId" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                      <ErrorMessage name="name" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="email" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="password" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="confirmPassword" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="phone" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="pinCode" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="signUp" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        
                    

                       <fieldset className="form-group">
                              <label>userId</label>
                                 <Field className="form-control"  type="integer" name="userId" placeholder="enter id"></Field>
                      </fieldset>
                      <fieldset className="form-group">
                              <label>Name</label>
                                 <Field className="form-control"  type="text" name="name" placeholder="enter your name"></Field>
                      </fieldset>
                          <fieldset className="form-group">
                              <label>Email</label>
                              <Field className="form-control" type="email" name="email"placeholder="enter your email"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Password </label>
                              <Field className="form-control" type="password" name="password" placeholder="enter your password"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label> Confirm Password </label>
                              <Field className="form-control" type="password" name="confirmPassword" placeholder="enter your password again"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Mobile Number</label>
                              <Field className="form-control" type="text" name="phone" placeholder="enter your mobile number"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Pincode</label>
                              <Field className="form-control" type="text" name="pinCode" placeholder = "enter pincode"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Sign up as</label>
                              <Field className="form-control" id="myClass" as="select" name="signUp"  placeholder="please select">
                              <option value="option">Please select an option</option>
                              <option value="dealer">Dealer</option>
                              <option value="user">User</option>    
                            </Field>
                            
                          </fieldset>
         
                        <div>
                          <button className="btn btn-success" id="button" type="submit">Sign up</button>
                        </div> 
                      </Form>
                      
                  </Formik>
                </div>
              </div>
              
             
      );
}
}

export default login;
