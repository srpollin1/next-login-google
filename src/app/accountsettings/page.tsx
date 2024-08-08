"use client";
import { signIn, useSession, signOut } from "next-auth/react"
import Link from "next/link"
import React from 'react'

function AccountSettings() {
  const { data: session } = useSession()

  return (
    <div>
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        {/* <h1 className="border-b py-6 text-4xl font-semibold">Profile</h1> */}
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
              </Link>
              <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
                Account settings
              </li>
              <Link href={"/dashboard"}>
                <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
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
          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div className="pt-4">
              {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Email Address</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-600">
                Your email address is <strong>{session?.user?.email}</strong>
              </p>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Fullname</p>
            <div className="flex items-center">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                <p className="text-gray-600">
                  Your fullname is <strong>{session?.user?.name}</strong>
                </p>
              </div>
            </div>

            <hr className="mt-4 mb-8" />
            {/* <div className="mb-10">
              <p className="py-2 text-xl font-semibold">Delete Account</p>
              <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Proceed with caution
              </p>
              <p className="mt-2">
                Make sure you have taken backup of your account in case you ever need
                to get access to your data. We will completely wipe your data. There
                is no way to access your account after this action.
              </p>
              <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
                Continue with deletion
              </button>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default AccountSettings
