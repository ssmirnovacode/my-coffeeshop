const validate = (values) => {
    const errors = {};
  
    if (values.firstname.length > 0 && !/^[A-Za-z]+$/ig.test(values.firstname)) {
        errors.firstname = 'Name can only contain letters';
      }

    if (values.tel.length > 0 && !/([+]\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/i.test(values.tel)) {
    errors.tel = 'Invalid phone number';
    }
  
    return errors;
  };

  export default validate;