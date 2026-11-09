function ExpenseItem({ expense, onDeleteExpense }) {
  return (
    <li className="expense-item">
      <span>${expense.amount}</span>
      <span>{expense.title}</span>
      <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
