import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useApp } from "../context/AppContext";
import TaskRow from "../components/TaskRow";

export default function Tasks() {
  const { tasks, addTask } = useApp();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title:"", project:"DevTrack", priority:"Medium", due:"2026-09-20", status:"Todo" });

  const filtered = tasks.filter(t => (filter === "All" || t.status === filter) && t.title.toLowerCase().includes(search.toLowerCase()));

  const submit = e => {
    e.preventDefault();
    if (!form.title.trim()) return;
    addTask(form); setForm({...form, title:""}); setShowForm(false);
  };

  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">WORKSPACE</p><h2>Tasks</h2><p className="muted">Organize, prioritize, and ship your work.</p></div><button className="primary-btn" onClick={() => setShowForm(!showForm)}><Plus size={18}/> Add task</button></div>
      {showForm && <form className="task-form panel" onSubmit={submit}><input placeholder="Task title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/><select value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})}><option>Low</option><option>Medium</option><option>High</option></select><input type="date" value={form.due} onChange={e=>setForm({...form,due:e.target.value})}/><button className="primary-btn">Create</button></form>}
      <section className="panel">
        <div className="toolbar"><div className="search"><Search size={17}/><input placeholder="Search tasks..." value={search} onChange={e=>setSearch(e.target.value)}/></div><div className="filters">{["All","Todo","In Progress","Completed"].map(x=><button key={x} className={filter===x?"filter active":"filter"} onClick={()=>setFilter(x)}>{x}</button>)}</div></div>
        {filtered.map(task => <TaskRow key={task.id} task={task}/>)}
        {!filtered.length && <div className="empty">No tasks found.</div>}
      </section>
    </>
  );
}