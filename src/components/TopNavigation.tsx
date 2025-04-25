import Image from "next/image";
import Link from "next/link";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema/users";
import { count } from "drizzle-orm";

import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopNavigation = async () => {
  const userCount = (await db.select({count: count()}).from(users))[0].count;

  return <nav className="grid grid-cols-[auto_1fr_auto] gap-4 items-center justify-center p-4">
    <Link href="/">
      <h1 className="text-3xl font-bold grid grid-cols-[auto_auto] gap-4 items-center"><Image src="/justjelly-logo.png" alt="JustJelly Logo" width="50" height="50"/> Just Jelly</h1>
    </Link>
    <div className="max-w-full">
      <input
        type="text"
        placeholder="Search for your favourite movies, shows, music, etc..."
        className="rounded-lg p-2 w-full outline-none bg-[rgba(64,210,255,0.25)]"
      />
    </div>
    <Link href="/login" className="text-m font-bold bg-[rgb(26,110,136)] p-2 rounded-lg" aria-disabled={!userCount}>
      <FontAwesomeIcon icon={faArrowRightToBracket} className="fa-fw" /> Log In
    </Link>
  </nav>
}

export default TopNavigation;