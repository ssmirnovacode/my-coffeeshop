const validate = (values) => {
    const errors = {};
  
    if (values.firstname && values.firstname.length > 0 && !/^[A-Za-z]+$/ig.test(values.firstname)) {
        errors.firstname = 'Name can only contain letters';
      }
      
    if (values.name && values.name.length > 0 && !/^[A-Za-z]+$/ig.test(values.name)) {
      errors.name = 'Name can only contain letters';
    }

    if (values.tel && values.tel.length > 0 && !/([+]\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{3}/i.test(values.tel)) {
    errors.tel = 'Invalid phone number: must contain at least 9 digits';
    }
  
    return errors;
  };

  export default validate;