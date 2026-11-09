import { useEffect, useState } from "react";
import BudgetSummary from "./BudgetSummary";
import Header from "./Header";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

// const initialExpenses = [
//   { id: 1, title: "Groceries", amount: 50, category: "Food" },
//   { id: 2, title: "Electricity Bill", amount: 100, category: "Utilities" },
//   { id: 3, title: "Gas", amount: 30, category: "Transport" },
//   { id: 4, title: "Movie Night", amount: 30, category: "Entertainment" },
//   { id: 5, title: "Rent", amount: 1000, category: "Housing" },
//   { id: 6, title: "Other Expense", amount: 150, category: "Others" },
// ];

function App() {
  // eslint-disable-next-line
  const [budget, setBudget] = useState(5000);

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Persist expenses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function handleAddExpense(expense) {
    setExpenses((expenses) => [...expenses, expense]);
  }

  function handleDeleteExpense(expenseId) {
    setExpenses((expenses) =>
      expenses.filter((expense) => expense.id !== expenseId),
    );
  }

  return (
    <div className="app">
      <div className="container">
        <Header />
        <BudgetSummary budget={budget} expenses={expenses} />
        <div className="form-list-grid">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
