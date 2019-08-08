import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpensesSummary with 3 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={2000} />);
    expect(wrapper).toMatchSnapshot();
});