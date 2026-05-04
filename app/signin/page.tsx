'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: '', password: '', general: '' });
    
    let isValid = true;
    const newErrors = { email: '', password: '', general: '' };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Success
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      router.push('/');
      router.refresh();
    } catch (err: any) {
      setErrors(prev => ({ ...prev, general: err.message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your details to access your account</p>
        </div>

        {errors.general && (
          <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-xl">
            <p className="text-red-600 text-xs font-bold text-center uppercase tracking-wide">
              {errors.general}
            </p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              disabled={isLoading}
              className={`w-full h-12 px-4 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-transparent'} focus:bg-white focus:border-gray-200 transition-all outline-none text-sm font-medium disabled:opacity-50`}
            />
            {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase tracking-wider">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={isLoading}
              className={`w-full h-12 px-4 rounded-xl bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-transparent'} focus:bg-white focus:border-gray-200 transition-all outline-none text-sm font-medium disabled:opacity-50`}
            />
            {errors.password && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase tracking-wider">{errors.password}</p>}
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-black text-white rounded-xl font-bold text-sm transition-all duration-200 hover:bg-black/90 active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
