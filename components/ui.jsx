export function Card({ className = "", ...props }) {
  return <div className={`card p-6 ${className}`} {...props} />;
}

export function Input(props) { return <input className="input" {...props} />; }
export function Label(props) { return <label className="label" {...props} />; }
export function Button({ variant = "primary", className = "", ...props }) {
  const base = variant === "outline" ? "btn-outline" : "btn-primary";
  return <button className={`${base} ${className}`} {...props} />;
}