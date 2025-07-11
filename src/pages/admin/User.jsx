import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import CreateUser from './CreateUser';
import UserList from './UserList';

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState([]);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleDelete = (id) => {
    setUserList(userList.filter(user => user.id !== id));
    message.success('User deleted successfully');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-700">👤 User Management</h2>
        <Button
          onClick={showModal}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Create User
        </Button>
      </div>

      <Modal
        title="Create User"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CreateUser
          setUserList={setUserList}
          userList={userList}
          closeModal={handleCancel}
        />
      </Modal>

      <UserList users={userList} handleDelete={handleDelete} />
    </div>
  );
};

export default User;
