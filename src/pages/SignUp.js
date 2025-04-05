import { useState } from "react";

export default function SignUp() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white/5 backdrop-blur-lg border-b border-white/10 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {isSignIn ? "Welcome Back" : "Create Your Account"}
      </h2>

      <div className="space-y-4">
        {!isSignIn && (
          <InputField label="Full Name" placeholder="John Doe" type="text" />
        )}

        <InputField
          label="Email Address"
          placeholder="john@example.com"
          type="email"
        />

        <InputField label="Password" placeholder="••••••••" type="password" />

        {!isSignIn && (
          <InputField
            label="Confirm Password"
            placeholder="••••••••"
            type="password"
          />
        )}
      </div>

      <button className="w-full mt-6 bg-amber-400 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
        {isSignIn ? "Sign In" : "Continue"}
      </button>

      <p className="mt-6 text-center text-sm text-white">
        {isSignIn ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="text-amber-400 hover:underline focus:outline-none"
        >
          {isSignIn ? "Sign up instead" : "Sign in instead"}
        </button>
      </p>

      <div className="mt-6 pt-4 border-t border-white">
        <p className="text-xs text-center text-white">
          By continuing, you agree to our{" "}
          <a href="#" className="text-amber-400 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-amber-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

const InputField = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-white mb-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 border bg-transparent border-white rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition-all"
    />
  </div>
);
