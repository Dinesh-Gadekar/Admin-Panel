import React, { useState } from 'react';

const CreateUser = ({ setUserList, userList, closeModal }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
    roles: [],
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...form, id: Date.now() };
    setUserList([...userList, newUser]);
    setForm({ id: '', name: '', email: '', mobile: '', roles: [], image: '' });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Name" className="w-full border p-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} required />

      <input type="email" placeholder="Email" className="w-full border p-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} required />

      <input type="text" placeholder="Mobile" className="w-full border p-2"
        value={form.mobile}
        onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />

      <label className="block">Select Roles:</label>
      <select multiple className="w-full border p-2"
        value={form.roles}
        onChange={(e) =>
          setForm({ ...form, roles: Array.from(e.target.selectedOptions, o => o.value) })
        }>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="hr">HR</option>
        <option value="employee">Employee</option>
      </select>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
