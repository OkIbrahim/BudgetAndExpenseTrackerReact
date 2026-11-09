function BudgetSummary({ budget, expenses }) {
  // Derived State
  const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);
  const balance = budget - totalExpenses;

  return (
    <div className="stats-grid">
      <div className="budget">
        <h4>Total Budget</h4>
        <h3>${budget.toFixed(2)}</h3>
      </div>
      <div className="expenses">
        <h4>Total Expenses</h4>
        <h3>${totalExpenses.toFixed(2)}</h3>
      </div>
      <div className="balance">
        <h4>Remaining Balance</h4>
        <h3>${balance.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default BudgetSummary;
