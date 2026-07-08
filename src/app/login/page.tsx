"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Invalid password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-w-bg)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-w-purple)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(107,33,168,0.1)]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/5 rounded-2xl mx-auto flex items-center justify-center border border-white/10 mb-6">
              <Lock className="w-8 h-8 text-[var(--color-w-orange)]" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-400 text-sm">Enter the password to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-400">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-w-purple)] transition-colors"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black hover:bg-gray-200 transition-colors py-3 rounded-xl font-medium flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:bg-white"
            >
              {loading ? "Verifying..." : "Login to Admin"}
              {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
