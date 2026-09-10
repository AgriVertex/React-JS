import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

const starterTasks = [
  { id: 1, title: "Build authentication flow", project: "DevTrack", priority: "High", status: "In Progress", due: "2026-09-12" },
  { id: 2, title: "Create responsive dashboard", project: "DevTrack", priority: "High", status: "Completed", due: "2026-09-08" },
  { id: 3, title: "Write API documentation", project: "Portfolio API", priority: "Medium", status: "Todo", due: "2026-09-15" },
  { id: 4, title: "Improve mobile navigation", project: "Portfolio", priority: "Low", status: "Todo", due: "2026-09-18" },
  { id: 5, title: "Review pull requests", project: "Open Source", priority: "Medium", status: "Completed", due: "2026-09-07" }
];

const starterProjects = [
  { id: 1, name: "DevTrack", description: "Developer productivity dashboard", progress: 72, tasks: 18, stack: ["React", "Tailwind", "Vite"], status: "Active" },
  { id: 2, name: "Portfolio API", description: "REST API for portfolio projects", progress: 46, tasks: 11, stack: ["Node", "Express", "MongoDB"], status: "Active" },
  { id: 3, name: "Open Source", description: "Contributions and community work", progress: 88, tasks: 24, stack: ["Git", "React"], status: "Active" }
];

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("devtrack_tasks")) || starterTasks);
  const [projects] = useState(() => JSON.parse(localStorage.getItem("devtrack_projects")) || starterProjects);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("devtrack_theme") !== "light");

  useEffect(() => localStorage.setItem("devtrack_tasks", JSON.stringify(tasks)), [tasks]);
  useEffect(() => localStorage.setItem("devtrack_projects", JSON.stringify(projects)), [projects]);
  useEffect(() => {
    localStorage.setItem("devtrack_theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const addTask = (task) => setTasks((prev) => [{ ...task, id: Date.now() }, ...prev]);
  const toggleTask = (id) => setTasks((prev) => prev.map(t => t.id === id ? { ...t, status: t.status === "Completed" ? "Todo" : "Completed" } : t));
  const deleteTask = (id) => setTasks((prev) => prev.filter(t => t.id !== id));

  const stats = useMemo(() => {
    const completed = tasks.filter(t => t.status === "Completed").length;
    const active = tasks.filter(t => t.status !== "Completed").length;
    return { total: tasks.length, completed, active, rate: tasks.length ? Math.round((completed / tasks.length) * 100) : 0 };
  }, [tasks]);

  return (
    <AppContext.Provider value={{ tasks, projects, addTask, toggleTask, deleteTask, darkMode, setDarkMode, stats }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);