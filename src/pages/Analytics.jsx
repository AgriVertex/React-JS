import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, GitCommitHorizontal, Timer, TrendingUp } from "lucide-react";
import { useApp } from "../context/AppContext";

const data = [
  {day:"Mon",tasks:4}, {day:"Tue",tasks:6}, {day:"Wed",tasks:3}, {day:"Thu",tasks:8}, {day:"Fri",tasks:5}, {day:"Sat",tasks:7}, {day:"Sun",tasks:4}
];

export default function Analytics() {
  const { stats } = useApp();
  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">INSIGHTS</p><h2>Analytics</h2><p className="muted">Understand your development habits and progress.</p></div></div>
      <div className="stats-grid">
        <Stat icon={TrendingUp} title="Completion rate" value={`${stats.rate}%`} note="This week"/>
        <Stat icon={GitCommitHorizontal} title="Commits" value="47" note="+18% this week"/>
        <Stat icon={Timer} title="Focus time" value="18.4h" note="Across 5 sessions"/>
        <Stat icon={Activity} title="Consistency" value="92%" note="Excellent"/>
      </div>
      <section className="panel chart-panel"><div className="panel-head"><div><h3>Tasks completed</h3><p>Weekly productivity overview</p></div></div><div className="chart"><ResponsiveContainer width="100%" height={320}><BarChart data={data}><CartesianGrid vertical={false}/><XAxis dataKey="day"/><YAxis/><Tooltip/><Bar dataKey="tasks" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer></div></section>
    </>
  );
}
function Stat({icon:Icon,title,value,note}) { return <div className="stat-card"><div className="stat-icon"><Icon size={20}/></div><div><p>{title}</p><h3>{value}</h3><small>{note}</small></div></div> }