import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, CheckSquare, FolderKanban, LayoutDashboard, Settings, Code2, Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/tasks", label: "Tasks", icon: CheckSquare },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings }
];

export default function Layout() {
  const { darkMode, setDarkMode } = useApp();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-icon"><Code2 size={20}/></span><span>DevTrack</span></div>
        <nav>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === "/"} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <Icon size={19}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="mini-profile"><div className="avatar">PK</div><div><strong>Developer</strong><small>Pro workspace</small></div></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div><p className="eyebrow">WORKSPACE</p><h1>Developer Hub</h1></div>
          <div className="top-actions">
            <button className="icon-btn" onClick={() => setDarkMode(!darkMode)} title="Toggle theme">{darkMode ? <Sun size={18}/> : <Moon size={18}/>}</button>
            <div className="avatar large">PK</div>
          </div>
        </header>
        <div className="content"><Outlet /></div>
      </main>
    </div>
  );
}