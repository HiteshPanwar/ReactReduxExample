// Initial State
const initialState = {
    itemList: [
        { itemName: 'Item 1', itemDescription: 'item 1 description' },
        { itemName: 'Item 2', itemDescription: 'item 2 description' },
        { itemName: 'Item 3', itemDescription: 'item 3 description' },
    ]
};

// Reducer
const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            
            return {
                ...state,
                itemList: [action.payload].concat(
                    state.itemList
                )
            }
        }
        default: {
            return state;
        }
    }
};


export default itemReducer;