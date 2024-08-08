"use client";

import Link from "next/link"
import { signIn, useSession, signOut } from "next-auth/react"
import Dropdown from "./Dropdown";

function Navbar() {

  const { data: session } = useSession()

  return (
    <nav className="bg-slate-950 flex items-center py-3 text-white justify-between px-24">
      <Link href={"/"}>
        <h1>Agenda Master</h1>
      </Link>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          {/* <Link href={"/dashboard"} className="text-sky-400">
            Dashboard
          </Link> */}
          {/* <p>{session.user.email}</p> */}
          <img
            src={session.user.image || ""} // Asegúrate de que src siempre sea un string
            alt="User profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <Dropdown />
        </div>
      ) : (
        <button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">
          Sign In
        </button>
      )}
    </nav>
  )
}

export default Navbar
