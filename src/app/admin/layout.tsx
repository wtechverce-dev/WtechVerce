import LogoutButton from "./LogoutButton";

export const metadata = {
  title: 'Admin Panel | WTechVerce',
  description: 'Admin panel for managing WTechVerce website data',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[var(--color-w-purple)] selection:text-white font-sans">
      <nav className="border-b border-white/10 bg-[#0A0A0A] px-6 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-[var(--color-w-orange)]">W</span>Tech
            <span className="text-gradient-primary">Admin</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-400 hidden sm:block">
              Secure Area
            </div>
            <LogoutButton />
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
