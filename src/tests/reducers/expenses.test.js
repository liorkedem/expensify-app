import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});


test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: -1
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses]);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'description',
            note: 'note',
            amount: 1000,
            createdAt: 5000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[0].id,
        expense: {
            updates: {
                id: expenses[0].id,
                amount: 5
            }
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(5);
});


test('shouldnot edit an expense if not exist', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id:-1,
        expense: {
            updates: {
                id: expenses[0].id,
                amount: 5
            }
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses]);
});
