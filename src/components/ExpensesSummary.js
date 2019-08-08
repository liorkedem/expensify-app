import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export class ExpensesSummary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const expensesTerm = this.props.expensesCount === 1 ? 'expense' : 'expenses';

        return (
            <div>
                <p>
                    Viewing {this.props.expensesCount} {expensesTerm} totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(
        state.expenses,
        state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);