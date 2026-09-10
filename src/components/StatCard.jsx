export default function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <div className="stat-card">
      <div className="stat-icon"><Icon size={20}/></div>
      <div><p>{label}</p><h3>{value}</h3><small>{detail}</small></div>
    </div>
  );
}