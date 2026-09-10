import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-head"><div className="project-logo">{project.name.slice(0,2).toUpperCase()}</div><ArrowUpRight size={18}/></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="progress-label"><span>Progress</span><strong>{project.progress}%</strong></div>
      <div className="progress"><span style={{width: `${project.progress}%`}} /></div>
      <div className="project-meta"><span>{project.tasks} tasks</span><div>{project.stack.map(x => <span className="tech" key={x}>{x}</span>)}</div></div>
    </div>
  );
}