import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "../components/icons";
import AppShell from "../components/AppShell";
import AccountPage from "../components/AccountPage";
import ReportsPage from "../components/ReportsPage";
import ResourcePage from "../components/ResourcePage";
import { modules } from "../lib/school-data";

function LegalPage({ title }) {
  return <AppShell activePath="/settings"><div className="page-heading-row"><div><div className="eyebrow"><span className="eyebrow-mark" /> GRID &amp; LOGIC ACADEMY</div><h1>{title}</h1><p>Information for the Grid &amp; Logic Academy community.</p></div></div><section className="surface-card legal-card"><h2>Our school workspace</h2><p>This local preview is designed to help administrators organize school records, academic activity, and day-to-day operations in one place.</p><p>School policies and notices are maintained by your school administrator. Please contact the school office for the current official policy documents.</p><Link href="/" className="button button-secondary"><ArrowLeft size={16} />Back to dashboard</Link></section></AppShell>;
}

function NotFoundPage() {
  return <AppShell activePath="/"><div className="not-found-card surface-card"><span>404</span><h1>That page isn’t in this workspace.</h1><p>The address may have changed, or the section may not be available yet.</p><Link className="button button-primary" href="/"><Home size={16} />Go to dashboard</Link></div></AppShell>;
}

export default function SchoolRoutePage() {
  const router = useRouter();
  const segments = Array.isArray(router.query.slug) ? router.query.slug : [];
  const route = segments[0] || "";
  const subPath = segments[1] || "";

  useEffect(() => {
    if (route === "dashboard") router.replace("/");
    if (route === "students" && subPath === "promotion") router.replace("/promotions");
    if (route === "library" && subPath === "requests") router.replace("/book-requests");
  }, [route, subPath, router]);

  if (!router.isReady || route === "dashboard" || (route === "students" && subPath === "promotion") || (route === "library" && subPath === "requests")) return null;
  if (route === "account") return <AccountPage />;
  if (route === "reports") return <ReportsPage />;
  if (route === "terms-of-use") return <LegalPage title="Terms of use" />;
  if (route === "privacy-policy") return <LegalPage title="Privacy policy" />;
  if (route === "my_children" || route === "my-children") return <AppShell activePath="/students"><ResourcePage config={modules.students} /></AppShell>;

  const aliases = { users: "staff", staff: "staff", dorms: "hostel", "book-requests": "bookRequests", book_requests: "bookRequests", "time-tables": "timetables" };
  const moduleKey = aliases[route] || route;
  const config = modules[moduleKey];
  if (!config) return <NotFoundPage />;
  return <AppShell activePath={`/${route}`}><ResourcePage key={`${moduleKey}/${subPath}`} config={config} subPath={route === "students" ? subPath : ""} /></AppShell>;
}
