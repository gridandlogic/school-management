import { useEffect, useState } from "react";
import { BadgeCheck, LockKeyhole, Mail, Phone, Save, UserRound } from "./icons";
import AppShell from "./AppShell";
import { useSchoolData } from "./SchoolDataProvider";

export default function AccountPage() {
  const { data, ready, updateRecord } = useSchoolData();
  const admin = (data.staff || []).find((user) => user.id === "U-001") || (data.staff || [])[0];
  const [form, setForm] = useState({ name: "admin", email: "admin@gridandlogic.edu", department: "Administration" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (admin) setForm({ name: admin.name || "admin", email: admin.email || "", department: admin.department || "Administration" });
  }, [admin?.id, admin?.name, admin?.email, admin?.department]);

  const submit = (event) => {
    event.preventDefault();
    if (admin) updateRecord("staff", admin.id, form);
    window.localStorage.setItem("grid-logic-session", JSON.stringify({ name: form.name, role: "Administrator" }));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  };

  return <AppShell activePath="/account"><div className="page-heading-row"><div><div className="eyebrow"><span className="eyebrow-mark" /> PERSONAL SETTINGS</div><h1>My account</h1><p>Update your profile details and review your administrator access.</p></div></div>
    <div className="account-grid">
      <section className="surface-card account-profile-card"><div className="account-cover"><div className="account-cover-circuit" /></div><div className="account-profile-body"><span className="account-avatar">{(form.name || "A").slice(0, 1).toUpperCase()}</span><h2>{form.name || "admin"}</h2><p>School administrator</p><span className="status-pill success"><i />Active account</span><div className="account-contact"><span><Mail size={15} />{form.email}</span><span><Phone size={15} />{admin?.phone || "+1 202 555 0100"}</span></div></div></section>
      <section className="surface-card account-form-card"><div className="card-header"><div><div className="eyebrow"><span className="eyebrow-mark" /> PROFILE DETAILS</div><h2>Personal information</h2><p>Keep your contact information current.</p></div><span className="account-private"><LockKeyhole size={14} />Private to you</span></div><form className="account-form" onSubmit={submit}><label className="form-field"><span>Full name</span><input value={form.name} required onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} /></label><label className="form-field"><span>Email address</span><input type="email" value={form.email} required onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} /></label><label className="form-field"><span>Department</span><input value={form.department} onChange={(event) => setForm((current) => ({ ...current, department: event.target.value }))} /></label><div className="account-access-note"><BadgeCheck size={17} /><span><strong>Administrator access</strong><small>You can manage school records, staff accounts, and settings.</small></span></div><button className="button button-primary" type="submit"><Save size={16} />{saved ? "Saved" : "Save profile"}</button></form></section>
    </div>
    <div className="account-preview-note"><UserRound size={16} />{ready ? "Profile changes are saved in this browser preview." : "Loading your profile…"}</div>
  </AppShell>;
}
