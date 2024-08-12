"use client";

import Sidebar from "@/components/Sidebar";
import { signIn, useSession, signOut } from "next-auth/react";
import React from 'react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      {session?.user ? (
        <div className="grid grid-cols-8 gap-4 pt-6 sm:grid-cols-10">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div>
            <h1>contenido</h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-semibold">Welcome to the Agenda App</h1>
          <p className="mt-4">Please sign in to access your calendar and events.</p>
          <button
            onClick={() => signIn("google")}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition"
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}
