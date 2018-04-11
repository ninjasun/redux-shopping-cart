
const initialState = {
    addedIds: [],
    quantityById: {}
}


const cart = (state = initialState, action) => {
    switch (action.type) {

        default:
            return {
                addedIds: null,
                quantityById: null
            }
    }
}

export default cart
