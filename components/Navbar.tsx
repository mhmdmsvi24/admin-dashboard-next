import * as Avatar from "@radix-ui/react-avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";
import logoDark from "../img/logo-dark.png";

export default function Navbar() {
  return (
    <nav className="bg-primary dark:bg-slate-700 text-white">
      <div className="container mx-auto flex py-2 px-5 justify-between items-center">
        <Link href="/">
          <Image src={logoDark} alt="Technews" width={110} height={40} />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full bg-primary align-middle">
              <Avatar.Image
                className="h-full w-full object-cover"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <Avatar.Fallback className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium text-primary">
                TN
              </Avatar.Fallback>
            </Avatar.Root>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
