const icons = {
  Activity: <><path d="M3 12h4l3-8 4 16 3-8h4" /></>,
  ArrowDownToLine: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></>,
  ArrowLeft: <><path d="m12 19-7-7 7-7" /><path d="M5 12h14" /></>,
  ArrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  ArrowUpRight: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  BadgeCheck: <><path d="M12 3 15 5l4 .5.5 4L22 12l-2.5 3.5-.5 4-4 .5-3 2-3-2-4-.5-.5-4L2 12l2.5-2.5.5-4L9 5z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></>,
  BarChart3: <><path d="M3 3v18h18" /><path d="M8 16V9" /><path d="M13 16V5" /><path d="M18 16v-5" /></>,
  Bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
  BookOpen: <><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v17H5.5A2.5 2.5 0 0 0 3 22z" /><path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H12v17h6.5a2.5 2.5 0 0 1 2.5 2z" /></>,
  CalendarClock: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 9h13" /><circle cx="17" cy="16" r="3" /><path d="M17 14v2l1 1" /></>,
  CalendarDays: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 9h18" /><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></>,
  Check: <><path d="m5 12 4 4L19 6" /></>,
  ChevronDown: <><path d="m6 9 6 6 6-6" /></>,
  ChevronLeft: <><path d="m15 18-6-6 6-6" /></>,
  ChevronRight: <><path d="m9 18 6-6-6-6" /></>,
  CircleDollarSign: <><circle cx="12" cy="12" r="9" /><path d="M16 8.5c-.8-.8-1.9-1.2-3.2-1.2-1.7 0-2.8.8-2.8 2s1 1.8 2.8 2.2 2.8 1 2.8 2.3-1.2 2.3-3 2.3c-1.4 0-2.6-.5-3.5-1.5M12.5 5.5v13" /></>,
  CircleHelp: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.4 1.6c-1.2 1.1-2 1.5-2 3" /><path d="M12 17h.01" /></>,
  ClipboardCheck: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6a1.5 1.5 0 0 0-3-1 1.5 1.5 0 0 0-3 1Z" /><path d="m8.5 13 2.2 2.2 4.7-4.7" /></>,
  ClipboardList: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6a1.5 1.5 0 0 0-3-1 1.5 1.5 0 0 0-3 1Z" /><path d="M9 11h6M9 15h6" /></>,
  CreditCard: <><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
  Eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  EyeOff: <><path d="m3 3 18 18M10.6 10.6A2 2 0 0 0 13.4 13.4" /><path d="M9.9 5.2A10 10 0 0 1 12 5c6.5 0 10 7 10 7a14 14 0 0 1-3.1 3.9M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 3.5-.7" /></>,
  GraduationCap: <><path d="m2 10 10-5 10 5-10 5z" /><path d="M6 12v5c3.5 2.5 8.5 2.5 12 0v-5M22 10v6" /></>,
  Home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v12h14V9M9 21v-7h6v7" /></>,
  LayoutDashboard: <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="5" rx="1.5" /><rect x="13" y="10" width="8" height="11" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /></>,
  LibraryBig: <><path d="M4 19V5l8-3 8 3v14l-8 3z" /><path d="M12 2v20M8 7h1M15 7h1M8 11h1M15 11h1M8 15h1M15 15h1" /></>,
  LockKeyhole: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3" /><circle cx="12" cy="15" r="1" /><path d="M12 16v2" /></>,
  LogOut: <><path d="M10 17l5-5-5-5M15 12H3" /><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" /></>,
  Mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  Menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  NotebookTabs: <><path d="M4 3h15a2 2 0 0 1 2 2v16H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M8 3v18M2 8h6M2 13h6M2 18h6M12 8h5M12 12h5M12 16h5" /></>,
  Phone: <><path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-6-6l3-2z" /></>,
  Plus: <><path d="M12 5v14M5 12h14" /></>,
  Printer: <><path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v7H6zM18 12h.01" /></>,
  Save: <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" /><path d="M17 21v-8H7v8M7 3v5h8" /></>,
  Search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  Settings2: <><path d="M4 7h8M16 7h4M4 17h4M12 17h8" /><circle cx="14" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></>,
  ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  Sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="m19 14 .9 2.6L23 17.5l-3.1.9L19 21l-.9-2.6-3.1-.9 3.1-.9zM5 2l.7 2.3L8 5l-2.3.7L5 8l-.7-2.3L2 5l2.3-.7z" /></>,
  SlidersHorizontal: <><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" /><path d="M2 14h4M10 8h4M18 16h4" /></>,
  SquarePen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L9 17l-4 1 1-4z" /></>,
  Trash2: <><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6" /></>,
  UserRound: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1z" /></>,
  UserRoundCheck: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-1a7 7 0 0 1 11-5.7M16 19l2 2 4-4" /></>,
  UserRoundPlus: <><circle cx="9" cy="8" r="4" /><path d="M2 21v-1a7 7 0 0 1 10.5-6M19 16v6M16 19h6" /></>,
  Users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.2a4 4 0 0 1 0 7.6" /></>,
  UsersRound: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 8v6M17 11h6" /></>,
  X: <><path d="m18 6-12 12M6 6l12 12" /></>,
};

function makeIcon(name) {
  function Icon({ size = 18, strokeWidth = 1.8, ...props }) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{icons[name]}</svg>;
  }
  Icon.displayName = name;
  return Icon;
}

export const Activity = makeIcon("Activity");
export const ArrowDownToLine = makeIcon("ArrowDownToLine");
export const ArrowLeft = makeIcon("ArrowLeft");
export const ArrowRight = makeIcon("ArrowRight");
export const ArrowUpRight = makeIcon("ArrowUpRight");
export const BadgeCheck = makeIcon("BadgeCheck");
export const BarChart3 = makeIcon("BarChart3");
export const Bell = makeIcon("Bell");
export const BookOpen = makeIcon("BookOpen");
export const CalendarClock = makeIcon("CalendarClock");
export const CalendarDays = makeIcon("CalendarDays");
export const Check = makeIcon("Check");
export const ChevronDown = makeIcon("ChevronDown");
export const ChevronLeft = makeIcon("ChevronLeft");
export const ChevronRight = makeIcon("ChevronRight");
export const CircleDollarSign = makeIcon("CircleDollarSign");
export const CircleHelp = makeIcon("CircleHelp");
export const ClipboardCheck = makeIcon("ClipboardCheck");
export const ClipboardList = makeIcon("ClipboardList");
export const CreditCard = makeIcon("CreditCard");
export const Eye = makeIcon("Eye");
export const EyeOff = makeIcon("EyeOff");
export const GraduationCap = makeIcon("GraduationCap");
export const Home = makeIcon("Home");
export const LayoutDashboard = makeIcon("LayoutDashboard");
export const LibraryBig = makeIcon("LibraryBig");
export const LockKeyhole = makeIcon("LockKeyhole");
export const LogOut = makeIcon("LogOut");
export const Mail = makeIcon("Mail");
export const Menu = makeIcon("Menu");
export const NotebookTabs = makeIcon("NotebookTabs");
export const Phone = makeIcon("Phone");
export const Plus = makeIcon("Plus");
export const Printer = makeIcon("Printer");
export const Save = makeIcon("Save");
export const Search = makeIcon("Search");
export const Settings2 = makeIcon("Settings2");
export const ShieldCheck = makeIcon("ShieldCheck");
export const Sparkles = makeIcon("Sparkles");
export const SlidersHorizontal = makeIcon("SlidersHorizontal");
export const SquarePen = makeIcon("SquarePen");
export const Trash2 = makeIcon("Trash2");
export const UserRound = makeIcon("UserRound");
export const UserRoundCheck = makeIcon("UserRoundCheck");
export const UserRoundPlus = makeIcon("UserRoundPlus");
export const Users = makeIcon("Users");
export const UsersRound = makeIcon("UsersRound");
export const X = makeIcon("X");
