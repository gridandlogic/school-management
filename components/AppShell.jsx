import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Activity, BarChart3, Bell, BookOpen, CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, CircleHelp,
  ClipboardCheck, CreditCard, GraduationCap, LayoutDashboard, LibraryBig, LogOut, Menu, NotebookTabs,
  Search, Settings2, ShieldCheck, Sparkles, UserRound, UserRoundCheck, Users, UsersRound, X,
} from "./icons";
import { modules, navGroups } from "../lib/school-data";
import { useSchoolData } from "./SchoolDataProvider";

const iconMap = {
  dashboard: LayoutDashboard,
  calendar: CalendarDays,
  students: GraduationCap,
  attendance: ClipboardCheck,
  staff: UsersRound,
  parents: Users,
  classes: NotebookTabs,
  sections: UsersRound,
  subjects: BookOpen,
  exams: CalendarDays,
  marks: Activity,
  grades: ShieldCheck,
  timetable: CalendarDays,
  payments: CreditCard,
  library: LibraryBig,
  requests: BookOpen,
  hostel: Users,
  promotions: GraduationCap,
  pins: ShieldCheck,
  settings: Settings2,
  reports: BarChart3,
  account: UserRound,
};

function getActiveLabel(path) {
  for (const group of navGroups) {
    const found = group.items.find((item) => item.path === path || (item.path !== "/" && path.startsWith(`${item.path}/`)));
    if (found) return found.label;
  }
  return "Dashboard";
}

function resultPath(key) {
  return Object.values(modules).find((module) => module.key === key)?.path || "/";
}

export default function AppShell({ activePath = "/", children }) {
  const router = useRouter();
  const { data } = useSchoolData();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [today, setToday] = useState("");
  const [userName, setUserName] = useState("admin");

  useEffect(() => {
    setToday(new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date()));
    try {
      const saved = JSON.parse(window.localStorage.getItem("grid-logic-session") || "null");
      if (saved?.name) setUserName(saved.name);
    } catch { /* the default demo admin remains available */ }
  }, []);

  const activeLabel = getActiveLabel(activePath);
  const searchResults = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (value.length < 2) return [];
    const results = [];
    Object.values(modules).forEach((module) => {
      (data[module.key] || []).forEach((record) => {
        const content = Object.values(record).join(" ").toLowerCase();
        if (content.includes(value)) results.push({ module, record });
      });
    });
    return results.slice(0, 6);
  }, [data, query]);

  const pendingCount = (data.payments || []).filter((item) => item.status === "Pending" || item.status === "Overdue").length
    + (data.bookRequests || []).filter((item) => item.status === "Pending").length;

  const signOut = () => {
    window.localStorage.removeItem("grid-logic-session");
    router.push("/login");
  };

  const sidebarContent = (
    <>
      <Link href="/" className="brand-lockup" aria-label="Grid & Logic dashboard" onClick={() => setMobileOpen(false)}>
        <span className="brand-mark"><img src="/grid-logic-badge.png" alt="" /></span>
        <span className="brand-copy"><strong>grid <span>&amp;</span> logic</strong><small>School management</small></span>
      </Link>

      <div className="school-switcher">
        <span className="switcher-emblem"><GraduationCap size={18} /></span>
        <span className="switcher-copy"><small>YOUR SCHOOL</small><strong>Grid &amp; Logic Academy</strong></span>
        <ChevronDown size={15} className="switcher-chevron" />
      </div>

      <nav className="side-navigation" aria-label="Main navigation">
        {navGroups.map((group) => (
          <div className="nav-group" key={group.label}>
            <p className="nav-group-title">{group.label}</p>
            {group.items.map((item) => {
              const Icon = iconMap[item.icon] || LayoutDashboard;
              const active = item.path === activePath || (item.path !== "/" && activePath.startsWith(`${item.path}/`));
              return (
                <Link
                  href={item.path}
                  key={item.path}
                  className={`nav-item${active ? " active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? item.label : undefined}
                >
                  <span className="nav-icon"><Icon size={18} strokeWidth={active ? 2.2 : 1.8} /></span>
                  <span className="nav-label">{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="term-card">
          <span className="term-dot" />
          <span><small>ACADEMIC YEAR</small><strong>2026–2027 · Term 2</strong></span>
          <ChevronRight size={15} />
        </div>
        <div className="sidebar-help">
          <span className="help-icon"><CircleHelp size={17} /></span>
          <span><strong>Need a hand?</strong><small>Visit the help centre</small></span>
          <ChevronRight size={15} />
        </div>
        <button className="collapse-button" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          <span>{collapsed ? "Expand menu" : "Collapse menu"}</span>
        </button>
      </div>
    </>
  );

  return (
    <div className={`app-frame${collapsed ? " sidebar-collapsed" : ""}${mobileOpen ? " mobile-nav-open" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-inner">{sidebarContent}</div>
      </aside>
      {mobileOpen && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileOpen(false)} />}

      <main className="main-panel">
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
            <div className="breadcrumbs"><span>Grid &amp; Logic</span><ChevronRight size={14} /><strong>{activeLabel}</strong></div>
          </div>
          <div className="topbar-tools">
            <div className="date-display"><CalendarDays size={15} /><span>{today || "School day"}</span></div>
            <div className="global-search-wrap">
              <Search size={16} className="search-leading" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setQuery(""); }} placeholder="Search anything..." aria-label="Search school records" />
              <kbd>⌘ K</kbd>
              {query.trim().length >= 2 && (
                <div className="search-popover">
                  <div className="popover-kicker">SCHOOL RECORDS</div>
                  {searchResults.length ? searchResults.map(({ module, record }, index) => (
                    <button className="search-result" key={`${module.key}-${record.id}-${index}`} onClick={() => { setQuery(""); router.push(resultPath(module.key)); }}>
                      <span className="search-result-icon"><Search size={15} /></span>
                      <span><strong>{record.name || record.title || record.student || record.schoolName || record.id}</strong><small>{module.label} · {record.id}</small></span>
                      <ChevronRight size={15} />
                    </button>
                  )) : <p className="search-empty">No matching records found.</p>}
                </div>
              )}
            </div>
            <div className="topbar-menu-wrap">
              <button className={`icon-button notification-button${notificationsOpen ? " is-open" : ""}`} aria-label="Notifications" onClick={() => { setNotificationsOpen((value) => !value); setProfileOpen(false); }}>
                <Bell size={18} />{pendingCount > 0 && <span className="notification-dot" />}
              </button>
              {notificationsOpen && <div className="notification-popover"><div className="popover-heading"><strong>Updates</strong><span>{pendingCount} open</span></div><div className="notification-line"><span className="notification-bullet amber" /><span><strong>Fee follow-up</strong><small>{(data.payments || []).filter((item) => item.status === "Pending" || item.status === "Overdue").length} invoices need attention</small></span></div><div className="notification-line"><span className="notification-bullet teal" /><span><strong>Library requests</strong><small>{(data.bookRequests || []).filter((item) => item.status === "Pending").length} student requests waiting</small></span></div></div>}
            </div>
            <div className="topbar-menu-wrap profile-wrap">
              <button className="profile-trigger" onClick={() => { setProfileOpen((value) => !value); setNotificationsOpen(false); }} aria-expanded={profileOpen}>
                <span className="avatar avatar-admin">{userName.slice(0, 1).toUpperCase()}</span>
                <span className="profile-copy"><strong>{userName}</strong><small>Administrator</small></span>
                <ChevronDown size={15} />
              </button>
              {profileOpen && <div className="profile-popover"><div className="profile-popover-head"><span className="avatar avatar-admin">{userName.slice(0, 1).toUpperCase()}</span><span><strong>{userName}</strong><small>admin@gridandlogic.edu</small></span></div><Link href="/account" onClick={() => setProfileOpen(false)}><UserRound size={16} />My account</Link><Link href="/settings" onClick={() => setProfileOpen(false)}><Settings2 size={16} />School settings</Link><button onClick={signOut}><LogOut size={16} />Sign out</button></div>}
            </div>
          </div>
        </header>
        <div className="main-content" onClick={() => { if (query) setQuery(""); }}>
          {children}
          <footer className="app-footer"><span>© 2026 Grid &amp; Logic Academy</span><span><Sparkles size={13} /> School day, made simpler</span></footer>
        </div>
      </main>
    </div>
  );
}
