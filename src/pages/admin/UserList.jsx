import React from 'react';
import { Popconfirm, message } from 'antd';

const UserList = ({ users, handleDelete }) => {
  const confirm = (id) => {
    handleDelete(id);
  };

  const cancel = () => {
    message.error('Delete cancelled');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <table className="w-full bg-white shadow rounded overflow-hidden text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Roles</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.mobile}</td>
              <td className="p-2">{user.roles.join(', ')}</td>
              <td className="p-2 space-x-2">
                <button className="text-yellow-600 hover:underline">Edit</button>
                <Popconfirm
                  title="Are you sure to delete this user?"
                  onConfirm={() => confirm(user.id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="text-red-600 hover:underline">Delete</button>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
