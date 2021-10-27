import React from 'react'
import { connect } from 'react-redux'
import { getAllRepresentatives } from '../actions/representatives'
import {updateZipcodeForm } from '../actions/zipcodeForm'

const SearchBar = ({updateZipcodeForm, getAllRepresentatives, zipcodeFormData}) => {

    const handleChange = event => {
        const { name, value } = event.target
        // debugger
        const newZipcode = {
          ...zipcodeFormData,
          [name]: value
        }
        updateZipcodeForm(newZipcode)  
    }
    const handleSubmit = e => {
        e.preventDefault()
        getAllRepresentatives(zipcodeFormData.zipcode)

    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder= "Enter Zipcode" name ="zipcode" value = {zipcodeFormData.zipcode} onChange={handleChange}/>  
            < input type = "submit" value = "Submit" />
        </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
      zipcodeFormData: state.zipcodeForm,
      
    }
  }
export default connect (mapStateToProps,{updateZipcodeForm, getAllRepresentatives} )(SearchBar)