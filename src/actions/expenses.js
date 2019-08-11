import uuid from 'uuid';
import database from '../firebase/firebase';

//OLD CONCEPT (NO DB)
// component calls action generator
// action generator returns OBJECT
// component dispatches object
// redux store changes

//NEW CONCEPT (WITH DB)
// component calls action generator
// action generator returns FUNCTION
// component dispatches function
// function runs (has the ability to dispatch other actions and do whatever it wants)

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};


export const removeExpense = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id: id
    }
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
