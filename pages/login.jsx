import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck, Sparkles, UserRound } from "../components/icons";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (username.trim().toLowerCase() !== "admin" || password !== "cj") {
      setError("Use the demo administrator account to enter this preview.");
      return;
    }
    window.localStorage.setItem("grid-logic-session", JSON.stringify({ name: "admin", role: "Administrator" }));
    router.push("/");
  };

  return (
    <main className="login-screen">
      <div className="login-left">
        <div className="login-brand"><span className="brand-mark"><img src="/grid-logic-badge.png" alt="" /></span><span className="brand-copy"><strong>grid <span>&amp;</span> logic</strong><small>School management</small></span></div>
        <div className="login-intro"><div className="eyebrow light"><span className="eyebrow-mark" /> A SMARTER SCHOOL DAY</div><h1>Every detail,<br />in <span>good order.</span></h1><p>One connected workspace to manage your students, staff, academics, and school operations.</p><div className="login-feature-list"><span><i><ShieldCheck size={15} /></i>Designed for your whole school community</span><span><i><Sparkles size={15} /></i>Clear insights for confident decisions</span></div></div>
        <div className="login-left-footer"><span>GRID &amp; LOGIC ACADEMY</span><span>EST. 2026</span></div>
        <div className="login-circuit circuit-a" /><div className="login-circuit circuit-b" />
      </div>
      <div className="login-right">
        <div className="login-card-wrap"><div className="login-card-top"><span className="login-welcome-icon"><LockKeyhole size={20} /></span><span className="login-secure"><i /> SECURE PORTAL</span></div><div className="login-title"><h2>Welcome back</h2><p>Sign in to continue to your school workspace.</p></div>
          <form onSubmit={submit} className="login-form">
            <label className="login-field"><span>Username</span><span className="login-input-wrap"><UserRound size={17} /><input autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Your username" required /></span></label>
            <label className="login-field"><span>Password</span><span className="login-input-wrap"><LockKeyhole size={17} /><input autoComplete="current-password" type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" required /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button></span></label>
            {error && <p className="login-error">{error}</p>}
            <button className="login-submit" type="submit">Sign in to workspace <ArrowRight size={17} /></button>
          </form>
          <div className="demo-login-note"><span className="demo-note-icon"><ShieldCheck size={16} /></span><span><strong>Demo access</strong><small>Username <b>admin</b> · Password <b>cj</b></small></span></div>
          <p className="login-terms">By continuing, you agree to your school’s acceptable use policy.</p>
        </div>
        <div className="login-right-footer"><span>Need help? <a href="mailto:hello@gridandlogic.edu">Contact your administrator</a></span><span>© 2026 Grid &amp; Logic</span></div>
      </div>
    </main>
  );
}
