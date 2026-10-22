import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarClock, Check, ChevronRight, CircleDollarSign, GraduationCap, Plus, UserRoundPlus, UsersRound } from "../components/icons";
import AppShell from "../components/AppShell";
import { useSchoolData } from "../components/SchoolDataProvider";

const attendanceDays = [
  { day: "Mon", percent: 95 }, { day: "Tue", percent: 97 }, { day: "Wed", percent: 93 },
  { day: "Thu", percent: 98 }, { day: "Fri", percent: 91 }, { day: "Mon", percent: 96 }, { day: "Today", percent: 97 },
];

function money(value) {
  return `$${Number(value || 0).toLocaleString("en-US")}`;
}

export default function DashboardPage() {
  const { data } = useSchoolData();
  const [greeting, setGreeting] = useState("Good morning");
  const [userName, setUserName] = useState("admin");
  const students = data.students || [];
  const paid = (data.payments || []).filter((item) => item.status === "Paid").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const unpaid = (data.payments || []).filter((item) => item.status !== "Paid").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const presentToday = (data.attendance || []).filter((item) => item.status === "Present" || item.status === "Late").length;
  const attendanceRate = data.attendance?.length ? Math.round((presentToday / data.attendance.length) * 100) : 0;

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening");
    try {
      const saved = JSON.parse(window.localStorage.getItem("grid-logic-session") || "null");
      if (saved?.name) setUserName(saved.name);
    } catch { /* keep the seeded administrator name */ }
  }, []);

  const statCards = [
    { label: "Students enrolled", value: students.length, note: "+8.2% from last term", icon: GraduationCap, tone: "cyan", trend: "+8.2%" },
    { label: "Attendance today", value: `${attendanceRate}%`, note: `${presentToday} students checked in`, icon: Check, tone: "green", trend: "+1.4%" },
    { label: "Fee collection", value: money(paid), note: `${money(unpaid)} outstanding`, icon: CircleDollarSign, tone: "violet", trend: "Term 2" },
    { label: "Teaching staff", value: (data.staff || []).filter((member) => member.role === "Teacher").length, note: "Across all departments", icon: UsersRound, tone: "orange", trend: "On track" },
  ];

  const latestStudents = [...students].slice(0, 4);
  const upcomingEvents = (data.events || []).filter((event) => event.status !== "Completed").slice(0, 3);
  const gradeCounts = ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((grade) => ({ grade, count: students.filter((student) => student.grade === grade).length }));
  const maxGradeCount = Math.max(1, ...gradeCounts.map((item) => item.count));

  return (
    <AppShell activePath="/">
      <section className="welcome-banner">
        <div className="welcome-content">
          <div className="eyebrow light"><span className="eyebrow-mark" /> THURSDAY, OCTOBER 22, 2026</div>
          <h1>{greeting}, <span>{userName}</span></h1>
          <p>Here’s what’s happening at Grid &amp; Logic Academy today.</p>
          <div className="welcome-quick-links"><Link href="/students"><UserRoundPlus size={16} />Admit a student<ArrowRight size={15} /></Link><Link href="/timetables"><CalendarClock size={16} />View timetable<ArrowRight size={15} /></Link></div>
        </div>
        <div className="welcome-art" aria-hidden="true"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-dot dot-one" /><div className="art-dot dot-two" /><img src="/grid-logic-badge.png" alt="" /></div>
        <div className="welcome-watermark">G&amp;L</div>
      </section>

      <section className="stat-grid" aria-label="School summary">
        {statCards.map(({ label, value, note, icon: Icon, tone, trend }) => (
          <article className="stat-card" key={label}>
            <div className="stat-card-top"><span className={`stat-icon ${tone}`}><Icon size={19} /></span><span className={`stat-trend ${tone}`}>{trend}</span></div>
            <div className="stat-value">{value}</div><div className="stat-label">{label}</div><div className="stat-note">{note}</div>
          </article>
        ))}
      </section>

      <section className="dashboard-grid main-dashboard-grid">
        <article className="surface-card attendance-card">
          <div className="card-header"><div><div className="eyebrow"><span className="eyebrow-mark" /> DAILY OVERVIEW</div><h2>Attendance overview</h2><p>Student attendance across the last seven school days</p></div><button className="period-select">This week <ChevronRight size={15} /></button></div>
          <div className="attendance-summary"><strong>{attendanceRate}%</strong><span><i className="positive-dot" />Average attendance</span><span className="small-trend"><ArrowUpRight size={14} /> 2.1%</span></div>
          <div className="bar-chart" role="img" aria-label="Attendance rates for the last seven school days">
            {attendanceDays.map((item, index) => <div className="bar-day" key={`${item.day}-${index}`}><span className="bar-track"><i style={{ height: `${item.percent}%` }} className={index === attendanceDays.length - 1 ? "today" : ""} /></span><small>{item.day}</small></div>)}
          </div>
          <div className="chart-legend"><span><i className="legend-dot present" />Present</span><span><i className="legend-dot absent" />Absent / late</span><span className="chart-note">Updated 08:42 AM</span></div>
        </article>

        <article className="surface-card events-card">
          <div className="card-header"><div><div className="eyebrow"><span className="eyebrow-mark" /> COMING UP</div><h2>School calendar</h2></div><Link className="card-link" href="/exams">View all <ArrowRight size={14} /></Link></div>
          <div className="event-list">{upcomingEvents.map((event, index) => { const parsedDate = new Date(`${event.date}T12:00:00`); return <div className="event-row" key={event.id}><div className={`event-date ${["purple", "cyan", "orange"][index]}`}><strong>{Number.isNaN(parsedDate.getTime()) ? "—" : new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(parsedDate)}</strong><small>{Number.isNaN(parsedDate.getTime()) ? "DATE" : new Intl.DateTimeFormat("en-US", { month: "short" }).format(parsedDate).toUpperCase()}</small></div><div className="event-info"><strong>{event.title}</strong><small>{event.location} · {event.time}</small></div><ChevronRight size={16} className="event-chevron" /></div>; })}</div>
          <Link href="/calendar" className="add-event-button"><Plus size={15} />Add an event</Link>
        </article>
      </section>

      <section className="dashboard-grid lower-dashboard-grid">
        <article className="surface-card recent-students-card">
          <div className="card-header"><div><div className="eyebrow"><span className="eyebrow-mark" /> STUDENT LIFE</div><h2>Recently enrolled</h2><p>Latest student records added to your school</p></div><Link className="card-link" href="/students">All students <ArrowRight size={14} /></Link></div>
          <div className="recent-student-list">{latestStudents.map((student, index) => <div className="recent-student" key={student.id}><span className={`student-avatar student-color-${index + 1}`}>{student.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span><span className="recent-student-name"><strong>{student.name}</strong><small>{student.grade} · {student.section}</small></span><span className="student-status"><i />{student.status}</span><ChevronRight size={15} className="student-chevron" /></div>)}</div>
        </article>

        <article className="surface-card class-distribution-card">
          <div className="card-header"><div><div className="eyebrow"><span className="eyebrow-mark" /> ENROLMENT</div><h2>Students by class</h2><p>Current student distribution</p></div><span className="chart-total">{students.length} total</span></div>
          <div className="class-distribution">{gradeCounts.map(({ grade, count }) => <div className="class-distribution-row" key={grade}><span>{grade.replace("Grade ", "Gr. ")}</span><div className="distribution-track"><i style={{ width: `${(count / maxGradeCount) * 100}%` }} /></div><strong>{count}</strong></div>)}</div>
          <Link href="/classes" className="card-bottom-link">Manage class groups <ArrowRight size={14} /></Link>
        </article>
      </section>

      <section className="quick-action-row">
        <div><span className="quick-icon"><BookOpen size={17} /></span><span><strong>Make the most of your school day</strong><small>Jump into a workspace or take a quick action.</small></span></div>
        <div className="quick-action-buttons"><Link href="/students"><Plus size={15} />Add student</Link><Link href="/payments"><CircleDollarSign size={15} />Record payment</Link><Link href="/marks"><GraduationCap size={15} />Enter results</Link></div>
      </section>
    </AppShell>
  );
}
