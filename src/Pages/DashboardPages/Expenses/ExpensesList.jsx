// ExpensesList.js
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ExpensesList() {
  const expenses= [
    { id: 1, name: 'Electricity Bill', amount: 50, date: '2023-11-01', category: 'Utilities' },
    { id: 2, name: 'Groceries', amount: 120, date: '2023-11-03', category: 'Food' },
    { id: 3, name: 'Internet', amount: 30, date: '2023-11-05', category: 'Utilities' },
    { id: 4, name: 'Gym Membership', amount: 25, date: '2023-11-07', category: 'Health' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Expenses List</h2>
      
      {/* Create Expense Button */}
      <div className="flex justify-end mb-4">
        <Link
          to="/dashboard/dashboard/CreateExpenses"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Expense
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Expense Name</th>
              <th className="px-4 py-2 border-b">Amount</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{expense.name}</td>
                <td className="px-4 py-2 border-b">${expense.amount.toFixed(2)}</td>
                <td className="px-4 py-2 border-b">{expense.date}</td>
                <td className="px-4 py-2 border-b">{expense.category}</td>
                <td className="px-4 py-2 border-b text-right">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpensesList;
