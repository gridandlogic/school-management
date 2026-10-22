import Link from "next/link";
import { ArrowDownToLine, ArrowRight, BarChart3, BookOpen, CircleDollarSign, GraduationCap, UsersRound } from "./icons";
import AppShell from "./AppShell";
import { useSchoolData } from "./SchoolDataProvider";

export default function ReportsPage() {
  const { data } = useSchoolData();
  const paid = (data.payments || []).filter((item) => item.status === "Paid").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const unpaid = (data.payments || []).filter((item) => item.status !== "Paid").reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const published = (data.marks || []).filter((item) => item.status === "Published").length;

  const reports = [
    { title: "Student enrolment", description: "Current student records, classes, and year groups.", icon: GraduationCap, path: "/students", value: `${(data.students || []).length} records`, tone: "cyan" },
    { title: "Fee collection", description: "Review recorded payments and outstanding invoices.", icon: CircleDollarSign, path: "/payments", value: `$${paid.toLocaleString()} collected`, tone: "green" },
    { title: "Assessment results", description: "Review the latest recorded student marks.", icon: BarChart3, path: "/marks", value: `${published} published`, tone: "violet" },
    { title: "Staff directory", description: "Staff accounts, roles, and school departments.", icon: UsersRound, path: "/users", value: `${(data.staff || []).length} accounts`, tone: "orange" },
    { title: "Library catalogue", description: "Books, categories, and current availability.", icon: BookOpen, path: "/library", value: `${(data.books || []).length} titles`, tone: "cyan" },
  ];

  const exportOverview = () => {
    const rows = [["Report", "Value"], ["Students", data.students?.length || 0], ["Staff", data.staff?.length || 0], ["Classes", data.classes?.length || 0], ["Fees collected", paid], ["Fees outstanding", unpaid], ["Published results", published]];
    const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "grid-logic-school-overview.csv"; anchor.click(); URL.revokeObjectURL(url);
  };

  return <AppShell activePath="/reports"><div className="page-heading-row"><div><div className="eyebrow"><span className="eyebrow-mark" /> INSIGHTS &amp; EXPORTS</div><h1>School reports</h1><p>Explore school summaries and export the records you need.</p></div><button className="button button-primary" onClick={exportOverview}><ArrowDownToLine size={16} />Export overview</button></div>
    <div className="report-summary-grid"><div className="report-summary-card"><span className="report-summary-icon cyan"><GraduationCap size={18} /></span><small>Students enrolled</small><strong>{data.students?.length || 0}</strong><span>Student records</span></div><div className="report-summary-card"><span className="report-summary-icon green"><CircleDollarSign size={18} /></span><small>Fees collected</small><strong>${paid.toLocaleString()}</strong><span>${unpaid.toLocaleString()} outstanding</span></div><div className="report-summary-card"><span className="report-summary-icon violet"><BarChart3 size={18} /></span><small>Results published</small><strong>{published}</strong><span>Student assessments</span></div></div>
    <section className="surface-card reports-list-card"><div className="card-header"><div><div className="eyebrow"><span className="eyebrow-mark" /> REPORT LIBRARY</div><h2>Available reports</h2><p>Choose a workspace to review or export detailed records.</p></div><span className="report-count">{reports.length} reports</span></div><div className="reports-list">{reports.map(({ title, description, icon: Icon, path, value, tone }) => <Link href={path} className="report-row" key={title}><span className={`report-icon ${tone}`}><Icon size={19} /></span><span className="report-row-copy"><strong>{title}</strong><small>{description}</small></span><span className="report-value">{value}</span><ArrowRight size={17} className="report-arrow" /></Link>)}</div></section>
  </AppShell>;
}
