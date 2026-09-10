import { Moon, Sun, Trash2 } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Settings() {
  const { darkMode, setDarkMode } = useApp();
  const reset = () => { localStorage.removeItem("devtrack_tasks"); window.location.reload(); };
  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">PREFERENCES</p><h2>Settings</h2><p className="muted">Customize your DevTrack workspace.</p></div></div>
      <section className="panel settings">
        <div className="setting"><div><h3>Appearance</h3><p>Switch between dark and light mode.</p></div><button className="secondary-btn" onClick={()=>setDarkMode(!darkMode)}>{darkMode?<Sun size={17}/>:<Moon size={17}/>} {darkMode?"Light mode":"Dark mode"}</button></div>
        <div className="setting danger-row"><div><h3>Reset demo data</h3><p>Restore the original tasks stored in this browser.</p></div><button className="danger-btn" onClick={reset}><Trash2 size={17}/> Reset</button></div>
      </section>
    </>
  );
}