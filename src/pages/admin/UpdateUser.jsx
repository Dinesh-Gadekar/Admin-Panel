import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    roles: [],
    image: '',
  });

  useEffect(() => {
    if (state?.user) {
      setForm(state.user);
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user:', form);
    navigate('/admin/user');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📝 Update User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />

        <input type="email" placeholder="Email" className="w-full border p-2"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />

        <input type="text" placeholder="Mobile" className="w-full border p-2"
          value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} required />

        <label className="block">Select Roles:</label>
        <select multiple className="w-full border p-2"
          value={form.roles} onChange={(e) => setForm({ ...form, roles: Array.from(e.target.selectedOptions, o => o.value) })}>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="hr">HR</option>
          <option value="employee">Employee</option>
        </select>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
