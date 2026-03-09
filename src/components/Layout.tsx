import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/progress', label: 'Progress' },
    { to: '/history', label: 'History' },
    { to: '/admin', label: 'Admin' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-indigo-700 text-white shadow">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-6 h-14">
          <Link to="/" className="font-bold text-lg tracking-tight">NSF Quiz</Link>
          <div className="flex gap-4 ml-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  location.pathname === link.to
                    ? 'bg-white/20 text-white'
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
