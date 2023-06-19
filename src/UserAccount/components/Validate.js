
const Validate = (values) => {

    const errors = {};
    const regexE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!values.firstName) {
      errors.firstName = "Firstname is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexE.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Your Phone Number is required!";
    }else if (!phoneno.test(values.phoneNumber)) {
      errors.phoneNumber = "This is not a valid phone format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }else if (values.confirmPassword && values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match confirm password";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please enter confirm password";
    } else if (values.password && values.confirmPassword !== values.password) {
      errors.password = "Password does not match confirm password";
    } 
    return errors;
  }

export default Validate