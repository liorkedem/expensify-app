import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense(
//     {
//         description: 'water bill',
//         note: 'late paid',
//         amount: 550,
//         createdAt: 1000
//     }));

// store.dispatch(addExpense(
//     {
//         description: 'gas bill',
//         note: 'on time paid',
//         amount: 9050,
//         createdAt: 200
//     }));

//  store.dispatch(setTextFilter(
//      'bill'
//  ));

//  store.dispatch(setTextFilter(
//      'water'
//  ));

// console.log(store.getState());

// console.log(getVisibleExpenses(
//     store.getState().expenses,
//     store.getState().filters));

const jsx = (
    <Provider store={store} >
        <AppRouter/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));

//ReactDOM.render(<AppRouter />, document.getElementById('app'));