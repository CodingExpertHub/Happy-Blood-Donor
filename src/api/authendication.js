import api from "../config/axios";


// user full login and register modules //
// user signup module

export const UsersignUp = async (firstName, lastName, gender, dob, bloodGroup, mobile, email, otp, user_Type, lastdonationdate, location) => {
    try {
      const response = await api.post(`/user/register`, {
        fname: firstName,
        lname:lastName,
        gender:gender,
        dob:dob,
        bloodgroup:bloodGroup,
        mobile:mobile,
        email: email,
        otp: otp,
        user_type: user_Type,
        lastdonationdate : lastdonationdate,
        location:location 
      });
      return response.data;
    } catch (error) {
      error.message = error.response && error.response.data.message;
      throw error;
    }
  };

  export const UserSignUpsendOTP = async (email) => {
    try {
      const response = await api.post(`/user/registersendotp`, {
        email: email,
      });
      return response.data;
    } catch (error) {
      error.message = error.response && error.response.data.message;
      throw error;
    }
  };


  // user login module

  export const Userlogin = async (email, otp) => {
    try {
      const response = await api.post(`/user/login`, {
        email: email,
        otp: otp,
      });
      return response.data;
    } catch (error) {
      error.message = error.response && error.response.data.message;
      throw error;
    }
  };

  export const UserloginsendOTP = async (email) => {
    try {
      const response = await api.post(`/user/sendotp`, {
        email: email,
      });
      return response.data;
    } catch (error) {
      error.message = error.response && error.response.data.message;
      throw error;
    }
  };




  /// organiastion login and signup full modules ///

  // org signup modules

  export const OrgsignUp = async (orgName, category, email, otp, mobile, user_Type, location) => {
    try {
      const response = await api.post(`/org/orgregister`, {
        orgname: orgName,
        category: category,
        email: email,
        otp: otp,
        mobile:mobile,
        user_type: user_Type,
        location:location 
      });
      return response.data;
    } catch (error) {
      error.message = error.response && error.response.data.message;
      throw error;
    }
  };

  export const OrgSignUpsendOTP = async (email) => {
    try {
      const response = await api.post(`/org/registersendotp`, {
        email: email,
      });
      return response.data;
    } catch (error) {
      error.message = error.response && error.response.data.message;
      throw error;
    }
  };


    // org login module

    export const Orglogin = async (email, otp) => {
      try {
        const response = await api.post(`/org/orglogin`, {
          email: email,
          otp: otp,
        });
        return response.data;
      } catch (error) {
        error.message = error.response && error.response.data.message;
        throw error;
      }
    };
  
    export const OrgloginsendOTP = async (email) => {
      try {
        const response = await api.post(`/org/loginsendotp`, {
          email: email,
        });
        return response.data;
      } catch (error) {
        error.message = error.response && error.response.data.message;
        throw error;
      }
    }