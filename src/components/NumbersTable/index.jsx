import React, { useState } from "react";

const index = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Zohaib",
      phoneNumber: "1234567890",
      flow: " Flow Data 1",
      capability: "My Data",
      created: "2023-06-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      phoneNumber: "9876543210",
      flow: " Flow Data 2",
      capability: "My Data",
      created: "2023-06-02",
    },

    {
      id: 3,
      name: "Jane Smith",
      phoneNumber: "9876543210",
      flow: " Flow Data ",
      capability: "My Data",
      created: "2023-06-02",
    },
    // Add more hardcoded data as needed
  ]);
  const [editingRowId, setEditingRowId] = useState(null);

  const handleEdit = (id) => {
    setEditingRowId(id);
  };

  const handleSave = (id) => {
    setEditingRowId(null);
    // Save the edited data
    console.log(`Save clicked for ID: ${id}`);
  };

  const handleDelete = (id) => {
    const newData = tableData.filter((row) => row.id !== id);
    setTableData(newData);
    // Delete the data
    console.log(`Delete clicked for ID: ${id}`);
  };

  const handleInputChange = (e, id, field) => {
    const newData = tableData.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [field]: field === "created" ? e.target.value : e.target.value,
        };
      }
      return row;
    });
    setTableData(newData);
  };

  const handleAddNewNumber = () => {
    const newId = Math.max(...tableData.map((row) => row.id)) + 1;
    const newRow = {
      id: newId,
      name: "",
      phoneNumber: "",
      flow: "",
      capability: "",
      created: "",
    };
    setTableData([...tableData, newRow]);
    setEditingRowId(newId);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold">Table</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddNewNumber}
        >
          Add New Number
        </button>
      </nav>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Friendly Name</th>
            <th className="px-4 py-2 border-b">Phone Number</th>
            <th className="px-4 py-2 border-b">Flow</th>
            <th className="px-4 py-2 border-b">Capability</th>
            <th className="px-4 py-2 border-b">Created</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.name}
                    onChange={(e) => handleInputChange(e, row.id, "name")}
                    className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
                  />
                ) : (
                  row.name
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.phoneNumber}
                    onChange={(e) =>
                      handleInputChange(e, row.id, "phoneNumber")
                    }
                    className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
                  />
                ) : (
                  row.phoneNumber
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.flow}
                    onChange={(e) => handleInputChange(e, row.id, "flow")}
                    className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
                  />
                ) : (
                  row.flow
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.capability}
                    onChange={(e) => handleInputChange(e, row.id, "capability")}
                    className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
                  />
                ) : (
                  row.capability
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    value={row.created}
                    onChange={(e) => handleInputChange(e, row.id, "created")}
                    className="border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-500"
                  />
                ) : (
                  row.created
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {editingRowId === row.id ? (
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleSave(row.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleEdit(row.id)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default index;
