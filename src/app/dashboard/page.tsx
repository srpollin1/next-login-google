"use client";
import { signIn, useSession, signOut } from "next-auth/react"
import Link from "next/link"
import React from 'react'

function Dashboard() {
  const { data: session } = useSession()

  return (
    <div>
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        {/* <h1 className="border-b py-6 text-4xl font-semibold">Dashboard</h1> */}
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="relative my-4 w-56 sm:hidden">
          </div>
          <div className="col-span-2 hidden sm:block">
            <ul>
              <Link href={"/"}>
                <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                  Home
                </li>
              </Link>
              <Link href={"/accountsettings"}>
                <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                  Account settings
                </li>
              </Link>
              <Link href={"/dashboard"}>
                <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
                  Dashboard
                </li>
              </Link>

              <button className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-red-600 hover:text-red-600" onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                })
              }}>
                Logout
              </button>
              {/* <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Users
              </li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Profile
              </li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Billing
              </li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Notifications
              </li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Integrations
              </li> */}
            </ul>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Dashboard
