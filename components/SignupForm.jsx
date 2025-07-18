import React, { useState } from 'react';

export default function SignupForm() {
  const [form, setForm] = useState({ name: '', role: 'runner' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Signed up as ${form.role}: ${form.name}`);
  }

  return (
    <form id="signup" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="runner">Runner</option>
        <option value="volunteer">Volunteer</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
