"use client";
import { usePathname, useRouter } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/") {
    router.push(
      process.env.NEXT_PUBLIC_ROLS === "admin"
        ? "/dashboard/Tickets-Sold"
        : "/user-dashboard/active-or-pending-tickets"
    );
  }

  return null;
}
