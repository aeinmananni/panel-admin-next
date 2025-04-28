import { AuthGuard } from "@/components/authGuard";
import { Dashbaord } from "@/components/panel/dashboard";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthGuard>
      <div className="flex flex-col h-full w-full">
        <Dashbaord>{children}</Dashbaord>
      </div>
    </AuthGuard>
  );
}
