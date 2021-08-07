
export const showAllRepresentatives = representatives => {
    return {
        type: "ALL",
        representatives
        
    }
}

export const getAllRepresentatives = (zipcode) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/find_reps", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(zipcode)
        })
        .then (response => response.json())
        .then (r => {
            if (r.error) {
                alert(r.error)
            } else {
                
                dispatch(showAllRepresentatives(r))
    
            }
        })
        .catch(console.log)
    }
}
