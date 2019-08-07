import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note', amount: 650 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note',
            amount: 650
        }
    });
});


test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'desc1',
        note: 'note1',
        amount: 200,
        createdAt: 300
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});