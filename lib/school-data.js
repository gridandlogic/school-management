export const seedData = {
  students: [
    { id: "ST-2048", name: "Amelia Thompson", grade: "Grade 8", section: "Blue", guardian: "Olivia Thompson", email: "amelia.thompson@example.com", status: "Active" },
    { id: "ST-2047", name: "Ethan Miller", grade: "Grade 7", section: "Green", guardian: "David Miller", email: "ethan.miller@example.com", status: "Active" },
    { id: "ST-2046", name: "Charlotte Davis", grade: "Grade 9", section: "Blue", guardian: "Grace Davis", email: "charlotte.davis@example.com", status: "Active" },
    { id: "ST-2045", name: "Noah Anderson", grade: "Grade 10", section: "Gold", guardian: "Logan Anderson", email: "noah.anderson@example.com", status: "Active" },
    { id: "ST-2044", name: "Ava Walker", grade: "Grade 8", section: "Green", guardian: "Ella Walker", email: "ava.walker@example.com", status: "Active" },
    { id: "ST-2043", name: "James Wilson", grade: "Grade 11", section: "Blue", guardian: "Mia Wilson", email: "james.wilson@example.com", status: "Active" },
    { id: "ST-2042", name: "Sophie Lewis", grade: "Grade 7", section: "Gold", guardian: "Oliver Lewis", email: "sophie.lewis@example.com", status: "Active" },
    { id: "ST-2041", name: "Lucas Clark", grade: "Grade 12", section: "Green", guardian: "Isabella Clark", email: "lucas.clark@example.com", status: "Graduated" },
  ],
  staff: [
    { id: "U-001", name: "admin", role: "Administrator", department: "Administration", email: "admin@gridandlogic.edu", status: "Active" },
    { id: "U-002", name: "James Wilson", role: "Teacher", department: "Mathematics", email: "james.wilson@gridandlogic.edu", status: "Active" },
    { id: "U-003", name: "Olivia Martin", role: "Teacher", department: "English", email: "olivia.martin@gridandlogic.edu", status: "Active" },
    { id: "U-004", name: "Emily Brooks", role: "Accountant", department: "Finance", email: "emily.brooks@gridandlogic.edu", status: "Active" },
    { id: "U-005", name: "Noah Anderson", role: "Librarian", department: "Library", email: "noah.anderson@gridandlogic.edu", status: "Active" },
    { id: "U-006", name: "Mason Thomas", role: "Teacher", department: "Science", email: "mason.thomas@gridandlogic.edu", status: "On leave" },
  ],
  parents: [
    { id: "P-101", name: "Olivia Thompson", relationship: "Mother", children: "Amelia Thompson", email: "olivia.thompson@example.com", phone: "+1 202 555 0134", status: "Active" },
    { id: "P-102", name: "David Miller", relationship: "Father", children: "Ethan Miller", email: "david.miller@example.com", phone: "+1 202 555 0170", status: "Active" },
    { id: "P-103", name: "Grace Davis", relationship: "Mother", children: "Charlotte Davis", email: "grace.davis@example.com", phone: "+1 202 555 0117", status: "Active" },
    { id: "P-104", name: "Logan Anderson", relationship: "Father", children: "Noah Anderson", email: "logan.anderson@example.com", phone: "+1 202 555 0168", status: "Active" },
  ],
  classes: [
    { id: "CL-01", name: "Grade 7", classTeacher: "Sophie Lewis", room: "Room 101", students: 26, status: "Active" },
    { id: "CL-02", name: "Grade 8", classTeacher: "James Wilson", room: "Room 102", students: 28, status: "Active" },
    { id: "CL-03", name: "Grade 9", classTeacher: "Olivia Martin", room: "Room 201", students: 24, status: "Active" },
    { id: "CL-04", name: "Grade 10", classTeacher: "Mason Thomas", room: "Room 202", students: 25, status: "Active" },
    { id: "CL-05", name: "Grade 11", classTeacher: "Charlotte Davis", room: "Room 301", students: 22, status: "Active" },
    { id: "CL-06", name: "Grade 12", classTeacher: "Ethan Miller", room: "Room 302", students: 21, status: "Active" },
  ],
  sections: [
    { id: "SEC-01", name: "Blue", class: "Grade 8", room: "Room 102-A", students: 14, status: "Active" },
    { id: "SEC-02", name: "Green", class: "Grade 8", room: "Room 102-B", students: 14, status: "Active" },
    { id: "SEC-03", name: "Gold", class: "Grade 7", room: "Room 101-A", students: 13, status: "Active" },
    { id: "SEC-04", name: "Blue", class: "Grade 9", room: "Room 201-A", students: 12, status: "Active" },
  ],
  subjects: [
    { id: "SUB-01", name: "Mathematics", code: "MTH-08", teacher: "James Wilson", classes: "Grade 7–10", status: "Active" },
    { id: "SUB-02", name: "English Language", code: "ENG-01", teacher: "Olivia Martin", classes: "Grade 7–12", status: "Active" },
    { id: "SUB-03", name: "General Science", code: "SCI-02", teacher: "Mason Thomas", classes: "Grade 7–9", status: "Active" },
    { id: "SUB-04", name: "Biology", code: "BIO-11", teacher: "Charlotte Davis", classes: "Grade 10–12", status: "Active" },
    { id: "SUB-05", name: "History", code: "HIS-04", teacher: "Sophie Lewis", classes: "Grade 8–12", status: "Active" },
    { id: "SUB-06", name: "Computer Studies", code: "CST-06", teacher: "Ethan Miller", classes: "Grade 7–12", status: "Active" },
  ],
  exams: [
    { id: "EX-2026-T2", name: "Midterm Assessment", term: "Term 2", date: "2026-11-12", classes: "Grade 7–12", status: "Upcoming" },
    { id: "EX-2026-T1", name: "Term 1 Final", term: "Term 1", date: "2026-09-25", classes: "Grade 7–12", status: "Completed" },
    { id: "EX-2026-MO", name: "Monthly Quiz · October", term: "Term 2", date: "2026-10-28", classes: "Grade 7–9", status: "Upcoming" },
  ],
  marks: [
    { id: "MK-310", student: "Amelia Thompson", subject: "Mathematics", exam: "Term 1 Final", score: 92, maxScore: 100, grade: "A", status: "Published" },
    { id: "MK-309", student: "Ethan Miller", subject: "English Language", exam: "Term 1 Final", score: 86, maxScore: 100, grade: "A", status: "Published" },
    { id: "MK-308", student: "Charlotte Davis", subject: "General Science", exam: "Term 1 Final", score: 79, maxScore: 100, grade: "B", status: "Published" },
    { id: "MK-307", student: "Noah Anderson", subject: "Mathematics", exam: "Term 1 Final", score: 74, maxScore: 100, grade: "B", status: "Published" },
    { id: "MK-306", student: "Ava Walker", subject: "History", exam: "Term 1 Final", score: 68, maxScore: 100, grade: "C", status: "Draft" },
  ],
  grades: [
    { id: "A", name: "A · Excellent", range: "80–100", remark: "Excellent" },
    { id: "B", name: "B · Very good", range: "70–79", remark: "Very good" },
    { id: "C", name: "C · Good", range: "60–69", remark: "Good" },
    { id: "D", name: "D · Pass", range: "50–59", remark: "Pass" },
    { id: "F", name: "F · Needs support", range: "0–49", remark: "Needs improvement" },
  ],
  timetables: [
    { id: "TT-01", class: "Grade 8 · Blue", day: "Monday", subject: "Mathematics", teacher: "James Wilson", time: "08:30–09:15", room: "Room 102-A", status: "Active" },
    { id: "TT-02", class: "Grade 8 · Blue", day: "Monday", subject: "English Language", teacher: "Olivia Martin", time: "09:30–10:15", room: "Room 102-A", status: "Active" },
    { id: "TT-03", class: "Grade 8 · Blue", day: "Monday", subject: "General Science", teacher: "Mason Thomas", time: "10:45–11:30", room: "Science Lab", status: "Active" },
    { id: "TT-04", class: "Grade 8 · Blue", day: "Tuesday", subject: "History", teacher: "Sophie Lewis", time: "08:30–09:15", room: "Room 102-A", status: "Active" },
  ],
  payments: [
    { id: "INV-2026-041", student: "Amelia Thompson", item: "Term 2 tuition", amount: 480, dueDate: "2026-11-05", status: "Paid" },
    { id: "INV-2026-040", student: "Ethan Miller", item: "Term 2 tuition", amount: 480, dueDate: "2026-11-05", status: "Pending" },
    { id: "INV-2026-039", student: "Charlotte Davis", item: "Transport · October", amount: 120, dueDate: "2026-10-31", status: "Pending" },
    { id: "INV-2026-038", student: "Noah Anderson", item: "Term 2 tuition", amount: 480, dueDate: "2026-11-05", status: "Overdue" },
    { id: "INV-2026-037", student: "Ava Walker", item: "Library fee", amount: 35, dueDate: "2026-10-20", status: "Paid" },
  ],
  attendance: [
    { id: "AT-001", student: "Amelia Thompson", class: "Grade 8 · Blue", date: "2026-10-22", checkIn: "08:12 AM", status: "Present" },
    { id: "AT-002", student: "Ethan Miller", class: "Grade 7 · Green", date: "2026-10-22", checkIn: "08:17 AM", status: "Present" },
    { id: "AT-003", student: "Charlotte Davis", class: "Grade 9 · Blue", date: "2026-10-22", checkIn: "—", status: "Absent" },
    { id: "AT-004", student: "Noah Anderson", class: "Grade 10 · Gold", date: "2026-10-22", checkIn: "08:05 AM", status: "Present" },
    { id: "AT-005", student: "Ava Walker", class: "Grade 8 · Green", date: "2026-10-22", checkIn: "08:29 AM", status: "Late" },
  ],
  books: [
    { id: "BK-1201", title: "The Boy at the Back of the Class", author: "Onjali Q. Raúf", category: "Fiction", copies: 8, status: "Available" },
    { id: "BK-1202", title: "A Short History of Nearly Everything", author: "Bill Bryson", category: "Science", copies: 4, status: "Available" },
    { id: "BK-1203", title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", copies: 2, status: "Low stock" },
    { id: "BK-1204", title: "How to Invent Everything", author: "Ryan North", category: "Reference", copies: 5, status: "Available" },
    { id: "BK-1205", title: "Hidden Figures", author: "Margot Lee Shetterly", category: "Biography", copies: 0, status: "Checked out" },
  ],
  bookRequests: [
    { id: "BR-081", student: "Ethan Miller", title: "The Hobbit", requestedAt: "2026-10-20", status: "Pending" },
    { id: "BR-080", student: "Amelia Thompson", title: "Wonder", requestedAt: "2026-10-19", status: "Approved" },
    { id: "BR-079", student: "Ava Walker", title: "The Wild Robot", requestedAt: "2026-10-18", status: "Pending" },
  ],
  hostel: [
    { id: "H-01", name: "Maple House", warden: "Emily Brooks", capacity: 60, occupied: 48, status: "Open" },
    { id: "H-02", name: "Cedar House", warden: "Noah Anderson", capacity: 52, occupied: 39, status: "Open" },
    { id: "H-03", name: "Willow House", warden: "Olivia Martin", capacity: 40, occupied: 40, status: "Full" },
  ],
  pins: [
    { id: "PIN-301", student: "Amelia Thompson", code: "GL82-4K9P", expires: "2026-12-31", status: "Unused" },
    { id: "PIN-300", student: "Ethan Miller", code: "GL74-8M2Q", expires: "2026-12-31", status: "Used" },
    { id: "PIN-299", student: "Charlotte Davis", code: "GL93-1R6T", expires: "2026-12-31", status: "Unused" },
  ],
  promotions: [
    { id: "PR-2026-07", student: "Amelia Thompson", fromClass: "Grade 7 · Blue", toClass: "Grade 8 · Blue", term: "2026–2027", status: "Promoted" },
    { id: "PR-2026-06", student: "Ethan Miller", fromClass: "Grade 6 · Green", toClass: "Grade 7 · Green", term: "2026–2027", status: "Promoted" },
    { id: "PR-2026-05", student: "Sophie Lewis", fromClass: "Grade 6 · Gold", toClass: "Grade 7 · Gold", term: "2026–2027", status: "Review" },
  ],
  events: [
    { id: "EV-026", title: "Science fair", date: "2026-10-24", time: "09:30 AM", location: "School hall", audience: "All students", status: "Upcoming" },
    { id: "EV-025", title: "Monthly assessments", date: "2026-10-28", time: "All day", location: "Grade 7–9 classrooms", audience: "Grade 7–9", status: "Upcoming" },
    { id: "EV-024", title: "Parent–teacher meetings", date: "2026-11-02", time: "02:00 PM", location: "Main campus", audience: "Parents", status: "Upcoming" },
  ],
  settings: [
    { id: "school", schoolName: "Grid & Logic Academy", schoolEmail: "hello@gridandlogic.edu", phone: "+1 202 555 0100", academicYear: "2026–2027", currentTerm: "Term 2", currency: "USD", timezone: "America/New_York" },
  ],
};

export const modules = {
  students: {
    key: "students", label: "Students", singular: "student", description: "Manage admissions, student profiles, and class placement.",
    path: "/students", idLabel: "Student ID",
    fields: [
      { name: "name", label: "Full name", required: true }, { name: "grade", label: "Class", type: "select", options: ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"] },
      { name: "section", label: "Section", type: "select", options: ["Blue", "Green", "Gold"] }, { name: "guardian", label: "Parent / guardian" },
      { name: "email", label: "Email", type: "email" }, { name: "status", label: "Status", type: "select", options: ["Active", "Graduated", "On hold"] },
    ],
    columns: [{ key: "id", label: "Student ID" }, { key: "name", label: "Student" }, { key: "grade", label: "Class" }, { key: "section", label: "Section" }, { key: "guardian", label: "Parent / guardian" }, { key: "status", label: "Status", type: "status" }],
  },
  staff: {
    key: "staff", label: "Staff & users", singular: "staff member", description: "Manage school staff accounts, roles, and access.",
    path: "/users", idLabel: "User ID",
    fields: [
      { name: "name", label: "Full name", required: true }, { name: "role", label: "Role", type: "select", options: ["Administrator", "Teacher", "Accountant", "Librarian", "Parent"] },
      { name: "department", label: "Department" }, { name: "email", label: "Email", type: "email" }, { name: "status", label: "Status", type: "select", options: ["Active", "On leave", "Inactive"] },
    ],
    columns: [{ key: "id", label: "User ID" }, { key: "name", label: "Name" }, { key: "role", label: "Role" }, { key: "department", label: "Department" }, { key: "email", label: "Email" }, { key: "status", label: "Status", type: "status" }],
  },
  parents: {
    key: "parents", label: "Parents", singular: "parent", description: "Keep family contacts and student relationships up to date.",
    path: "/parents", idLabel: "Parent ID",
    fields: [{ name: "name", label: "Full name", required: true }, { name: "relationship", label: "Relationship" }, { name: "children", label: "Student" }, { name: "email", label: "Email", type: "email" }, { name: "phone", label: "Phone" }, { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"] }],
    columns: [{ key: "id", label: "Parent ID" }, { key: "name", label: "Parent" }, { key: "relationship", label: "Relationship" }, { key: "children", label: "Student" }, { key: "email", label: "Email" }, { key: "phone", label: "Phone" }],
  },
  classes: {
    key: "classes", label: "Classes", singular: "class", description: "Organize grade levels, teaching assignments, and rooms.", path: "/classes", idLabel: "Class ID",
    fields: [{ name: "name", label: "Class name", required: true }, { name: "classTeacher", label: "Class teacher" }, { name: "room", label: "Room" }, { name: "students", label: "Students", type: "number" }, { name: "status", label: "Status", type: "select", options: ["Active", "Archived"] }],
    columns: [{ key: "id", label: "Class ID" }, { key: "name", label: "Class" }, { key: "classTeacher", label: "Class teacher" }, { key: "room", label: "Room" }, { key: "students", label: "Students" }, { key: "status", label: "Status", type: "status" }],
  },
  sections: {
    key: "sections", label: "Sections", singular: "section", description: "Assign students to sections and learning spaces.", path: "/sections", idLabel: "Section ID",
    fields: [{ name: "name", label: "Section", required: true }, { name: "class", label: "Class" }, { name: "room", label: "Room" }, { name: "students", label: "Students", type: "number" }, { name: "status", label: "Status", type: "select", options: ["Active", "Archived"] }],
    columns: [{ key: "id", label: "Section ID" }, { key: "name", label: "Section" }, { key: "class", label: "Class" }, { key: "room", label: "Room" }, { key: "students", label: "Students" }, { key: "status", label: "Status", type: "status" }],
  },
  subjects: {
    key: "subjects", label: "Subjects", singular: "subject", description: "Maintain the curriculum and assign subject teachers.", path: "/subjects", idLabel: "Subject code",
    fields: [{ name: "name", label: "Subject name", required: true }, { name: "code", label: "Code", required: true }, { name: "teacher", label: "Teacher" }, { name: "classes", label: "Classes" }, { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"] }],
    columns: [{ key: "code", label: "Code" }, { key: "name", label: "Subject" }, { key: "teacher", label: "Teacher" }, { key: "classes", label: "Classes" }, { key: "status", label: "Status", type: "status" }],
  },
  exams: {
    key: "exams", label: "Exams", singular: "exam", description: "Plan assessment dates and track examination progress.", path: "/exams", idLabel: "Exam ID",
    fields: [{ name: "name", label: "Exam name", required: true }, { name: "term", label: "Term" }, { name: "date", label: "Date", type: "date" }, { name: "classes", label: "Classes" }, { name: "status", label: "Status", type: "select", options: ["Upcoming", "In progress", "Completed"] }],
    columns: [{ key: "id", label: "Exam ID" }, { key: "name", label: "Exam" }, { key: "term", label: "Term" }, { key: "date", label: "Date" }, { key: "classes", label: "Classes" }, { key: "status", label: "Status", type: "status" }],
  },
  marks: {
    key: "marks", label: "Marks & results", singular: "result", description: "Record assessment results and publish student grades.", path: "/marks", idLabel: "Result ID",
    fields: [{ name: "student", label: "Student", required: true }, { name: "subject", label: "Subject" }, { name: "exam", label: "Exam" }, { name: "score", label: "Score", type: "number" }, { name: "maxScore", label: "Maximum score", type: "number" }, { name: "grade", label: "Grade" }, { name: "status", label: "Status", type: "select", options: ["Draft", "Published"] }],
    columns: [{ key: "id", label: "Result ID" }, { key: "student", label: "Student" }, { key: "subject", label: "Subject" }, { key: "exam", label: "Exam" }, { key: "score", label: "Score" }, { key: "grade", label: "Grade" }, { key: "status", label: "Status", type: "status" }],
  },
  grades: {
    key: "grades", label: "Grade scale", singular: "grade band", description: "Set the school grading bands and reporting comments.", path: "/grades", idLabel: "Grade",
    fields: [{ name: "name", label: "Grade label", required: true }, { name: "range", label: "Score range" }, { name: "remark", label: "Report remark" }],
    columns: [{ key: "id", label: "Grade" }, { key: "name", label: "Label" }, { key: "range", label: "Score range" }, { key: "remark", label: "Report remark" }],
  },
  timetables: {
    key: "timetables", label: "Timetable", singular: "lesson", description: "Build a clear weekly schedule for each class.", path: "/timetables", idLabel: "Lesson ID",
    fields: [{ name: "class", label: "Class", required: true }, { name: "day", label: "Day", type: "select", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] }, { name: "subject", label: "Subject" }, { name: "teacher", label: "Teacher" }, { name: "time", label: "Time" }, { name: "room", label: "Room" }],
    columns: [{ key: "id", label: "Lesson ID" }, { key: "class", label: "Class" }, { key: "day", label: "Day" }, { key: "subject", label: "Subject" }, { key: "teacher", label: "Teacher" }, { key: "time", label: "Time" }, { key: "room", label: "Room" }],
  },
  payments: {
    key: "payments", label: "Fees & payments", singular: "payment", description: "Review invoices, due dates, and payment status.", path: "/payments", idLabel: "Invoice",
    fields: [{ name: "student", label: "Student", required: true }, { name: "item", label: "Fee item" }, { name: "amount", label: "Amount", type: "number" }, { name: "dueDate", label: "Due date", type: "date" }, { name: "status", label: "Status", type: "select", options: ["Paid", "Pending", "Overdue"] }],
    columns: [{ key: "id", label: "Invoice" }, { key: "student", label: "Student" }, { key: "item", label: "Fee item" }, { key: "amount", label: "Amount", type: "currency" }, { key: "dueDate", label: "Due date" }, { key: "status", label: "Status", type: "status" }],
  },
  attendance: {
    key: "attendance", label: "Attendance", singular: "attendance record", description: "Monitor daily attendance and follow up on absences.", path: "/attendance", idLabel: "Record ID",
    fields: [{ name: "student", label: "Student", required: true }, { name: "class", label: "Class" }, { name: "date", label: "Date", type: "date" }, { name: "checkIn", label: "Check-in time" }, { name: "status", label: "Status", type: "select", options: ["Present", "Absent", "Late", "Excused"] }],
    columns: [{ key: "student", label: "Student" }, { key: "class", label: "Class" }, { key: "date", label: "Date" }, { key: "checkIn", label: "Check-in" }, { key: "status", label: "Status", type: "status" }],
  },
  books: {
    key: "books", label: "Library", singular: "book", description: "Manage the library catalogue, inventory, and lending.", path: "/library", idLabel: "Book ID",
    fields: [{ name: "title", label: "Book title", required: true }, { name: "author", label: "Author" }, { name: "category", label: "Category" }, { name: "copies", label: "Copies available", type: "number" }, { name: "status", label: "Availability", type: "select", options: ["Available", "Low stock", "Checked out"] }],
    columns: [{ key: "id", label: "Book ID" }, { key: "title", label: "Title" }, { key: "author", label: "Author" }, { key: "category", label: "Category" }, { key: "copies", label: "Copies" }, { key: "status", label: "Availability", type: "status" }],
  },
  bookRequests: {
    key: "bookRequests", label: "Book requests", singular: "book request", description: "Review student requests and update lending decisions.", path: "/book-requests", idLabel: "Request ID",
    fields: [{ name: "student", label: "Student", required: true }, { name: "title", label: "Book title" }, { name: "requestedAt", label: "Requested on", type: "date" }, { name: "status", label: "Status", type: "select", options: ["Pending", "Approved", "Declined"] }],
    columns: [{ key: "id", label: "Request ID" }, { key: "student", label: "Student" }, { key: "title", label: "Book title" }, { key: "requestedAt", label: "Requested on" }, { key: "status", label: "Status", type: "status" }],
  },
  hostel: {
    key: "hostel", label: "Hostel & dorms", singular: "residence", description: "Track residence capacity, occupancy, and wardens.", path: "/hostel", idLabel: "Residence ID",
    fields: [{ name: "name", label: "Residence name", required: true }, { name: "warden", label: "Warden" }, { name: "capacity", label: "Capacity", type: "number" }, { name: "occupied", label: "Occupied beds", type: "number" }, { name: "status", label: "Status", type: "select", options: ["Open", "Full", "Maintenance"] }],
    columns: [{ key: "id", label: "Residence ID" }, { key: "name", label: "Residence" }, { key: "warden", label: "Warden" }, { key: "capacity", label: "Capacity" }, { key: "occupied", label: "Occupied" }, { key: "status", label: "Status", type: "status" }],
  },
  pins: {
    key: "pins", label: "Access pins", singular: "access pin", description: "Issue and verify secure student access codes.", path: "/pins", idLabel: "Pin ID",
    fields: [{ name: "student", label: "Student", required: true }, { name: "code", label: "PIN code", required: true }, { name: "expires", label: "Expires", type: "date" }, { name: "status", label: "Status", type: "select", options: ["Unused", "Used", "Expired"] }],
    columns: [{ key: "id", label: "Pin ID" }, { key: "student", label: "Student" }, { key: "code", label: "PIN code" }, { key: "expires", label: "Expires" }, { key: "status", label: "Status", type: "status" }],
  },
  promotions: {
    key: "promotions", label: "Promotions", singular: "promotion", description: "Review student progression between academic years.", path: "/promotions", idLabel: "Promotion ID",
    fields: [{ name: "student", label: "Student", required: true }, { name: "fromClass", label: "From class" }, { name: "toClass", label: "Promote to" }, { name: "term", label: "Academic year" }, { name: "status", label: "Status", type: "select", options: ["Review", "Promoted", "Held back"] }],
    columns: [{ key: "id", label: "Promotion ID" }, { key: "student", label: "Student" }, { key: "fromClass", label: "From" }, { key: "toClass", label: "Promote to" }, { key: "term", label: "Academic year" }, { key: "status", label: "Status", type: "status" }],
  },
  events: {
    key: "events", label: "School calendar", singular: "event", description: "Plan school events, assessments, and community activities.", path: "/calendar", idLabel: "Event ID",
    fields: [{ name: "title", label: "Event title", required: true }, { name: "date", label: "Date", type: "date" }, { name: "time", label: "Time" }, { name: "location", label: "Location" }, { name: "audience", label: "Audience" }, { name: "status", label: "Status", type: "select", options: ["Upcoming", "In progress", "Completed"] }],
    columns: [{ key: "id", label: "Event ID" }, { key: "title", label: "Event" }, { key: "date", label: "Date" }, { key: "time", label: "Time" }, { key: "location", label: "Location" }, { key: "audience", label: "Audience" }, { key: "status", label: "Status", type: "status" }],
  },
  settings: {
    key: "settings", label: "School settings", singular: "setting", description: "Configure school identity, academic year, and regional preferences.", path: "/settings", idLabel: "Setting",
    fields: [{ name: "schoolName", label: "School name", required: true }, { name: "schoolEmail", label: "School email", type: "email" }, { name: "phone", label: "Phone" }, { name: "academicYear", label: "Academic year" }, { name: "currentTerm", label: "Current term" }, { name: "currency", label: "Currency" }, { name: "timezone", label: "Timezone" }],
    columns: [{ key: "schoolName", label: "School" }, { key: "schoolEmail", label: "Email" }, { key: "academicYear", label: "Academic year" }, { key: "currentTerm", label: "Current term" }, { key: "currency", label: "Currency" }],
  },
};

export const navGroups = [
  { label: "Workspace", items: [{ label: "Dashboard", path: "/", icon: "dashboard" }, { label: "School calendar", path: "/calendar", icon: "calendar" }] },
  { label: "People", items: [{ label: "Students", path: "/students", icon: "students", badge: "8" }, { label: "Attendance", path: "/attendance", icon: "attendance" }, { label: "Staff & users", path: "/users", icon: "staff" }, { label: "Parents", path: "/parents", icon: "parents" }] },
  { label: "Academics", items: [{ label: "Classes", path: "/classes", icon: "classes" }, { label: "Sections", path: "/sections", icon: "sections" }, { label: "Subjects", path: "/subjects", icon: "subjects" }, { label: "Exams", path: "/exams", icon: "exams" }, { label: "Marks & results", path: "/marks", icon: "marks" }, { label: "Grade scale", path: "/grades", icon: "grades" }, { label: "Timetable", path: "/timetables", icon: "timetable" }] },
  { label: "Operations", items: [{ label: "Fees & payments", path: "/payments", icon: "payments" }, { label: "Library", path: "/library", icon: "library" }, { label: "Book requests", path: "/book-requests", icon: "requests" }, { label: "Hostel & dorms", path: "/hostel", icon: "hostel" }, { label: "Promotions", path: "/promotions", icon: "promotions" }, { label: "Access pins", path: "/pins", icon: "pins" }] },
  { label: "System", items: [{ label: "Reports", path: "/reports", icon: "reports" }, { label: "School settings", path: "/settings", icon: "settings" }, { label: "My account", path: "/account", icon: "account" }] },
];
