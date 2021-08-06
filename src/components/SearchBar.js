import React from 'react'
import { connect } from 'react-redux'
import { getAllRepresentatives } from '../actions/representatives'

const SearchBar = ({}) => {

    const handleSubmit = e => {
        e.preventDefault()
        getAllRepresentatives(zipcode)

    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder= "Enter Zipcode" value = {zipcode} onChange={handleChange}/>  
            < input type = "submit" value = "Submit" />
        </form>
        </>
    )
}

export default (SearchBar)