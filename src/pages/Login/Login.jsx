import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthContext';
import logo from "../../assets/Link - Bacola Store.png"

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('dummyUser'));

    if (
      savedUser &&
      form.username === savedUser.username &&
      form.password === savedUser.password
    ) {
      login(savedUser); // Update context
      toast.success('Logged in successfully!');
      navigate('/');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (<>
 <div className='bg-[#35AFA0] text-center w-[100%] px-0'>

<p className='text-white '>Due to current circumstances, there may be slight delays in order processing</p>
</div>
<div className='flex justify-center p-8 m-auto'>
<img src={logo}></img>

</div>
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-blue-200 to-teal-100 shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center bg-transparent p-4 rounded-md text-teal-600">Login Now</h2>
      <form onSubmit={handleLogin} className="space-y-4">
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
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </>);
}
