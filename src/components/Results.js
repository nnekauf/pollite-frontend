import React from 'react'
import { connect } from 'react-redux'

const Results = ({representatives}) => {

    
    return (
        <>
        {representatives.map (r => <div> {r} </div>  )}
        </>
    )
}

const mapStateToProps = state => {
    return {
      representatives: state.representatives,
      
    }
  }
export default connect (mapStateToProps)(Results)