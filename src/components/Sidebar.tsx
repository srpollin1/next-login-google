"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from 'react';

export default function Sidebar() {
  return (
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
  );
}
