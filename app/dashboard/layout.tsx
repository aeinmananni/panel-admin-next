import { AuthGuard } from "@/components/authGuard";
import { Dashbaord } from "@/components/panel/dashboard";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthGuard>
      <Dashbaord>{children}</Dashbaord>
    </AuthGuard>
  );
}
