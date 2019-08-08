import expenses from "../tests/fixtures/expenses";

export default (expenses) => {
    let sum = 0;
    expenses.forEach(exp => {
        sum = sum + exp.amount;
    });
    return sum;
};
