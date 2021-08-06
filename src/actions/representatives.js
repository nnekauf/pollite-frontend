
export const showAllRepresentatives = representatives => {
    return {
        type: "ALL",
        representatives
    }
}

export const getAllRepresentatives = (zipcode) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/representatives/", {
            credentials: "include",
            method: "GET",
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
