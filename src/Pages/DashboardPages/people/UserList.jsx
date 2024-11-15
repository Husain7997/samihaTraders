// UserList.js
import  { useState, useEffect } from "react";
import axios from "axios";
import UserModal from "../../../Components/dashboard/UserModal";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchUserRole();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUserRole = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/current-role");
      setUserRole(response.data.role);
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  const handleCreateOrUpdateUser = async (user) => {
    if (editingUser) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/users/${editingUser.id}`,
          user
        );
        setUsers((prev) =>
          prev.map((u) => (u.id === editingUser.id ? response.data : u))
        );
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/users", user);
        setUsers((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }

    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        {userRole === "Admin" && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        )}
      </div>

      <table className="w-full text-left bg-white border-collapse rounded-lg shadow">
        <thead>
          <tr>
            {["Name", "Email", "Role", "Action"].map((header) => (
              <th key={header} className="border p-3 font-medium text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">
                {(userRole === "Admin" || userRole === "Editor") && (
                  <button
                    onClick={() => {
                      setEditingUser(user);
                      setIsModalOpen(true);
                    }}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                )}
                {userRole === "Admin" && (
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {userRole !== "Viewer" && (
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreateOrUpdate={handleCreateOrUpdateUser}
          editingUser={editingUser}
        />
      )}
    </div>
  );
};

export default UserList;
