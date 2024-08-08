"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from 'react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      {session?.user ? (
        <div className="grid grid-cols-8 gap-4 pt-6 sm:grid-cols-10">
          {/* Sidebar */}
          <div className="col-span-2 hidden sm:block">
            <ul>
              <Link href={"/"}>
                <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
                  Home
                </li>
              </Link>
              <Link href={"/accountsettings"}>
                <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                  Account settings
                </li>
              </Link>
              <Link href={"/dashboard"}>
                <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                  Dashboard
                </li>
              </Link>

              <button
                className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-red-600 hover:text-red-600"
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  });
                }}
              >
                Logout
              </button>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-span-8 sm:col-span-8">
            <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>

            {/* Calendar */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Your Calendar</h2>
              <div className="border rounded-lg mt-4 p-4 bg-white shadow-sm">
                {/* Aquí iría el componente de calendario */}
                <p>Calendar component will be here</p>
                
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <ul className="mt-4 space-y-4">
                {/* Aquí irían los eventos próximos */}
                <li className="border p-4 rounded-lg shadow-sm bg-white">
                  <h3 className="font-semibold">Event Title</h3>
                  <p className="text-gray-600">Event Date and Time</p>
                </li>
                <li className="border p-4 rounded-lg shadow-sm bg-white">
                  <h3 className="font-semibold">Event Title</h3>
                  <p className="text-gray-600">Event Date and Time</p>
                </li>
              </ul>
            </div>

            {/* Create New Event Button */}
            <div className="mt-8">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition">
                Create New Event
              </button>
            </div>
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
