import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 100,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

const removeExpense = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id: id
    }
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(exp => exp.id !== action.expense.id);
        case 'EDIT_EXPENSE':
            return state.map((exp) => {
                if (exp.id === action.id) {
                    return {
                        ...exp,
                        ...action.updates
                    }
                } else {
                    return exp;
                }
            });
        default:
            return state;
    }
};



const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    startDate: date
});

const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    endDate: date
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisisbleExpenses = (expenses, filters) => {
    return expenses.filter((exp) => {
        const startDateMatch = isNaN(filters.startDate) || exp.createdAt >= filters.startDate;
        const endDateMatch = isNaN(filters.endDate) || exp.createdAt <= filters.endDate;
        const textMatch = exp.description.toLowerCase().includes(filters.text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (filters.sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else      if (filters.sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visisbleExpenses = getVisisbleExpenses(state.expenses, state.filters);
    console.log(visisbleExpenses);
});


const exp1 = store.dispatch(addExpense(
    {
        description: 'rent',
        amount: 550,
        createdAt:-21000
    }));

const exp2 = store.dispatch(addExpense(
    {
        description: 'coffee',
        amount: 150,
        createdAt:-1000
    }));

// console.log(exp1);
// console.log(exp2);


// store.dispatch(removeExpense(
//     {
//         id: exp1.expense.id
//     }));

// store.dispatch(editExpense(
//     exp2.expense.id,
//     {
//         amount: 500
//     }));

//store.dispatch(setTextFilter('FFE'));

// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//  store.dispatch(setStartDate(0));
//  store.dispatch(setStartDate());
//  store.dispatch(setEndDate(0));


const demoState = {
    expenses: [{
        id: 'lalala345lal',
        description: 'January rent',
        note: 'this was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
