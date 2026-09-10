import { Activity, CheckCircle2, Clock3, Flame, Plus, Target } from "lucide-react";
import { useApp } from "../context/AppContext";
import StatCard from "../components/StatCard";
import TaskRow from "../components/TaskRow";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { stats, tasks, projects } = useApp();
  const recent = tasks.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div><p className="eyebrow">THURSDAY, SEPTEMBER 10</p><h2>Build something great today. <span>🚀</span></h2><p className="muted">Stay focused, ship faster, and keep your development goals on track.</p></div>
        <Link className="primary-btn" to="/tasks"><Plus size={18}/> New task</Link>
      </section>

      <section className="stats-grid">
        <StatCard icon={Target} label="Total tasks" value={stats.total} detail="+12% from last week"/>
        <StatCard icon={CheckCircle2} label="Completed" value={stats.completed} detail={`${stats.rate}% completion rate`}/>
        <StatCard icon={Clock3} label="In progress" value={stats.active} detail="Keep the momentum"/>
        <StatCard icon={Flame} label="Current streak" value="7 days" detail="Personal best: 14 days"/>
      </section>

      <div className="two-col">
        <section className="panel">
          <div className="panel-head"><div><h3>Recent tasks</h3><p>Latest updates across your workspace</p></div><Link to="/tasks">View all</Link></div>
          <div>{recent.map(task => <TaskRow key={task.id} task={task}/>)}</div>
        </section>
        <section className="panel activity-panel">
          <div className="panel-head"><div><h3>Today's focus</h3><p>Your productivity snapshot</p></div><Activity size={19}/></div>
          <div className="focus-score"><div className="score-ring"><strong>{stats.rate}%</strong><span>done</span></div><div><h4>Great progress!</h4><p>Complete one more high-priority task to stay ahead of schedule.</p></div></div>
          <div className="focus-item"><span>Deep work</span><strong>3h 42m</strong></div>
          <div className="focus-item"><span>Tasks completed</span><strong>{stats.completed}</strong></div>
        </section>
      </div>

      <section className="panel">
        <div className="panel-head"><div><h3>Active projects</h3><p>Projects currently in development</p></div><Link to="/projects">View all</Link></div>
        <div className="projects-grid">{projects.map(p => <ProjectCard key={p.id} project={p}/>)}</div>
      </section>
    </>
  );
}