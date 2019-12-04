import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';

class main extends Component {

    constructor(props){
        super(props)
    
        this.state = ({
            email:'',
            password:'',
            signUp:''
        })
        this.maintenanceClicked=this.maintenanceClicked.bind(this)
    }

    maintenanceClicked(){
            this.props.history.push(`/adddetails`)
    }
        
    onSubmit(){

    }

    validateForm(values){
        let errors={}
        
        if(!values.email){
            errors.email='please enter email'
        }
        else if(!values.password){
            errors.password='please enter password'
        }
        else if(!values.signUp){
            errors.signUp='please select any one of the options'
        }
        console.log(errors)
        return errors
      }
    render() {
        let {  email, password,signUp} = this.state
        return (
            <div className="hello">
            <div className="container">
                <h1>Welcome</h1>
                <div class ="col-md-4 " align="center">
                   

                
                <Formik
                initialValues={{ email, password,signUp}}
                enableReinitialize = "true"
                validateOnChange={false}
                validateOnBlur={false}
                validate ={this.validateForm}
                onSubmit={this.onSubmit}>
                    <Form>
                    <h2>Login </h2>
 
                <ErrorMessage name="email" component="div"
                className = "alert alert-warning"></ErrorMessage>
                <ErrorMessage name="password" component="div"
                className = "alert alert-warning"></ErrorMessage>
                <ErrorMessage name="signUp" component="div"
                className = "alert alert-warning"></ErrorMessage>


                    <fieldset className="form-group">
                              <label>Email</label>
                              <Field className="form-control" type="email" name="email"placeholder="enter your email"></Field>
                    </fieldset>

                    <fieldset className="form-group">
                              <label>Password </label>
                              <Field className="form-control" type="password" name="password" placeholder="enter your password"></Field>
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
                         <td>
                               <button className="btn btn-success"id="button" type="submit" onClick ={() => this.maintenanceClicked()}>Login</button>
                          </td>
                          {/* <td>
                               <button className="btn-btn-primary" id="button" onClick = {() => this.Redirect()}>Sign Up</button>
                          </td> */}
                     </div> 
                     
                         
                     
                    </Form>
                </Formik>
                </div>  
            </div>
            </div>
        );
    }
}

export default main;