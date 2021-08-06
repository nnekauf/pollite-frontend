const initialState = {
    username: "",
    password: ""
  }
  
  
  const zipcodeForm = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_ZIPCODE_FORM":
        return action.formData
      case "RESET_ZIPCODE_FORM":
        return initialState
      default:
        return state
    }
  }
  export default zipcodeForm