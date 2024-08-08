"use client";

import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { signIn, useSession, signOut } from "next-auth/react"
import Link from "next/link"


function Dropdown() {


    const { data: session } = useSession()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Profile
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                </MenuButton>
            </div>
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <Link className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900' href={"/accountsettings"}>
                        <h1>Account settings</h1>
                    </Link>
                    <MenuItem>
                        <button className="block w-full px-4 py-2 text-left text-sm text-red-600 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={async () => {
                            await signOut({
                                callbackUrl: "/",
                            })
                        }}>
                            Logout
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}

export default Dropdown
