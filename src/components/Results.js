import React from 'react'
import { connect } from 'react-redux'

const Results = ({representatives}) => {

    
    return (
        <>
        {representatives.officials ? representatives.officials.map (r => <div> {r} </div>  ) : null}
        </>
    )
}

const mapStateToProps = state => {
    return {
      representatives: state.representatives,
      
    }
  }
export default connect (mapStateToProps)(Results)