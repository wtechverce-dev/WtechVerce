"use client";

import { useEffect, useState } from "react";
import { Mail, RefreshCw, Calendar, MessageSquare, AlertCircle } from "lucide-react";

type Message = {
  id: string;
  name: string;
  email: string;
  company?: string;
  project?: string;
  budget?: string;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/messages", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (err) {
      setError("Could not load messages. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Mail className="w-8 h-8 text-[var(--color-w-purple)]" />
          Contact Submissions
        </h1>
        <button
          onClick={fetchMessages}
          disabled={loading}
          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 rounded-2xl flex items-center gap-3">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20 text-gray-500">
          <RefreshCw className="w-8 h-8 animate-spin" />
        </div>
      ) : messages.length === 0 ? (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center gap-4">
          <MessageSquare className="w-16 h-16 text-gray-600" />
          <h3 className="text-xl font-medium text-white">No messages yet</h3>
          <p className="text-gray-500">When users submit the contact form, their messages will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {msg.name}
                    {msg.company && <span className="text-xs font-normal text-gray-500 bg-white/5 px-2 py-0.5 rounded">@ {msg.company}</span>}
                  </h3>
                  <a href={`mailto:${msg.email}`} className="text-[var(--color-w-orange)] hover:underline">
                    {msg.email}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  {msg.budget && (
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20">
                      Budget: {msg.budget}
                    </span>
                  )}
                  <span className="bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {msg.project || "General Inquiry"}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(msg.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
