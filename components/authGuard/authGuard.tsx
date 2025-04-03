"use client";
import { useRouter } from "next/navigation";
import { usePanelAdminStore } from "@/store";
import { useEffect, useState } from "react";

type AuthGuardProps = {
  children?: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const account = usePanelAdminStore((s) => s.account);

  useEffect(() => {
    if (!account.userName || !account.password) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [account, router]);

  if (isAuthenticated === null) return null;

  return <>{children}</>;
}
