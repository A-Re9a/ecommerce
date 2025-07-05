import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from "../../assets/Link - Bacola Store.png"


export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      toast.error('Username and password are required');
      return;
    }

    // Save user data to localStorage
    localStorage.setItem('dummyUser', JSON.stringify(form));

    toast.success('Account created successfully!');
    navigate('/login');
  };

  return (<>
   <div className='bg-[#35AFA0] text-center w-[100%] px-0'>

<p className='text-white '>Due to current circumstances, there may be slight delays in order processing</p>
</div>
<div className='flex justify-center p-8 m-auto'>
<img src={logo}></img>

</div>
    <div className="max-w-md mx-auto bg-gradient-to-r from-blue-200 to-teal-100 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center bg-transparent p-4 rounded-md text-teal-600">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-2 rounded font-semibold hover:bg-teal-400"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
 </> );
}
