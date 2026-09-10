import ProjectCard from "../components/ProjectCard";
import { useApp } from "../context/AppContext";

export default function Projects() {
  const { projects } = useApp();
  return (
    <>
      <div className="page-heading"><div><p className="eyebrow">WORKSPACE</p><h2>Projects</h2><p className="muted">Track progress across your development projects.</p></div></div>
      <div className="projects-grid large-grid">{projects.map(p => <ProjectCard key={p.id} project={p}/>)}</div>
    </>
  );
}