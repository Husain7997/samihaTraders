import  { useState } from 'react';

function ExpensesCategory() {
  // State for categories
  const [categories, setCategories] = useState([
    { name: 'Electronics', description: 'All kinds of daily electronics' },
    { name: 'Laptop', description: 'MacBook Pro 2020 & 2021 Edition' },
    { name: 'Mobile Phone', description: 'Samsung & Huawei Brand' },
    { name: 'Smart Watch', description: 'All Chinese brands' },
  ]);

  // State for Add Category Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  // Handlers for modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setNewCategory({ name: '', description: '' });
    setIsModalOpen(false);
  };

  // Handle input changes for new category form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  // Handle adding a new category
  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    closeModal();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Expense Category</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search on this table"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />

      {/* Create Category Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Category
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Category Name</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{category.name}</td>
                <td className="px-4 py-2 border-b">{category.description}</td>
                <td className="px-4 py-2 border-b text-right">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button className="px-3 py-1 border rounded-l border-gray-300 bg-white hover:bg-gray-100">1</button>
        <button className="px-3 py-1 border border-gray-300 bg-white hover:bg-gray-100">2</button>
        <button className="px-3 py-1 border rounded-r border-gray-300 bg-white hover:bg-gray-100">3</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-1/3">
            <h3 className="text-lg font-semibold mb-4">Add New Category</h3>
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={handleInputChange}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newCategory.description}
              onChange={handleInputChange}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpensesCategory;
