export const updateZipcodeForm = (zipcode) => {
    return {
      type: "UPDATE_ZIPCODE_FORM",
      zipcode
    }
  }
  
  export const resetZipcodeForm = () => {
    return {
      type: "RESET_ZIPCODE_FORM"
    }
  }