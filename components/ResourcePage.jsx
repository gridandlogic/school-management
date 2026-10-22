import { useMemo, useState } from "react";
import { ArrowDownToLine, ChevronDown, ClipboardList, Plus, Printer, Search, SlidersHorizontal, SquarePen, Trash2, X } from "./icons";
import { useSchoolData } from "./SchoolDataProvider";

function getInitials(value = "") {
  return String(value).split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "GL";
}

function StatusPill({ value }) {
  const normalized = String(value || "Active").toLowerCase().replace(/\s+/g, "-").replace("·", "");
  const tone = ["active", "present", "paid", "published", "approved", "promoted", "available", "unused", "open"].includes(normalized)
    ? "success"
    : ["pending", "upcoming", "draft", "review", "late", "low-stock", "on-leave"].includes(normalized)
      ? "warning"
      : ["inactive", "absent", "overdue", "declined", "held-back", "expired", "checked-out", "full", "graduated"].includes(normalized)
        ? "muted"
        : "neutral";
  return <span className={`status-pill ${tone}`}><i />{value || "Active"}</span>;
}

function FormField({ field, value, onChange }) {
  const type = field.type || "text";
  return (
    <label className="form-field">
      <span>{field.label}{field.required && <i> *</i>}</span>
      {type === "select" ? (
        <select required={field.required} value={value ?? ""} onChange={(event) => onChange(event.target.value)}>
          <option value="">Select {field.label.toLowerCase()}</option>
          {(field.options || []).map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : (
        <input required={field.required} type={type} value={value ?? ""} onChange={(event) => onChange(type === "number" ? event.target.value : event.target.value)} />
      )}
    </label>
  );
}

export default function ResourcePage({ config, subPath = "" }) {
  const { data, addRecord, updateRecord, deleteRecord } = useSchoolData();
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All records");
  const [modalRecord, setModalRecord] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [toast, setToast] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const records = data[config.key] || [];
  const statusOptions = useMemo(() => ["All records", ...new Set(records.map((record) => record.status).filter(Boolean))], [records]);
  const visibleRecords = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return records.filter((record) => {
      if (subPath === "graduated" && record.status !== "Graduated") return false;
      const matchesStatus = statusFilter === "All records" || record.status === statusFilter;
      const matchesQuery = !normalized || Object.values(record).some((value) => String(value).toLowerCase().includes(normalized));
      return matchesStatus && matchesQuery;
    });
  }, [records, query, statusFilter, subPath]);

  const openCreate = () => {
    setModalRecord(null);
    setFormValues(Object.fromEntries(config.fields.map((field) => [field.name, ""])));
  };

  const openEdit = (record) => {
    setModalRecord(record);
    setFormValues(Object.fromEntries(config.fields.map((field) => [field.name, record[field.name] ?? ""])));
  };

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const saveRecord = (event) => {
    event.preventDefault();
    const values = { ...formValues };
    config.fields.forEach((field) => {
      if (field.type === "number" && values[field.name] !== "") values[field.name] = Number(values[field.name]);
    });
    if (modalRecord) {
      updateRecord(config.key, modalRecord.id, values);
      notify(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} updated`);
    } else {
      addRecord(config.key, values);
      notify(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} added`);
    }
    setModalRecord(false);
  };

  const removeRecord = (record) => {
    const label = record.name || record.title || record.student || record.id;
    if (window.confirm(`Remove “${label}” from ${config.label.toLowerCase()}?`)) {
      deleteRecord(config.key, record.id);
      notify(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} removed`);
    }
  };

  const exportCsv = () => {
    const columns = config.columns;
    const quote = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const csv = [columns.map((column) => quote(column.label)).join(","), ...visibleRecords.map((record) => columns.map((column) => quote(record[column.key])).join(","))].join("\r\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${config.key}-grid-logic.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const activeCount = records.filter((record) => ["Active", "Present", "Paid", "Published", "Approved", "Promoted", "Available", "Open"].includes(record.status)).length;
  const reviewCount = records.filter((record) => ["Pending", "Overdue", "Draft", "Review", "Late", "Upcoming"].includes(record.status)).length;
  const title = subPath === "graduated" ? "Graduated students" : config.label;
  const description = subPath === "graduated" ? "Browse former students and manage their records." : config.description;

  return (
    <div className="resource-page">
      <div className="page-heading-row">
        <div>
          <div className="eyebrow"><span className="eyebrow-mark" /> SCHOOL MANAGEMENT</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="heading-actions">
          {config.key === "students" && <a className={`text-action${subPath === "graduated" ? " selected" : ""}`} href={subPath === "graduated" ? "/students" : "/students/graduated"}>{subPath === "graduated" ? "All students" : "Graduated"}</a>}
          <button className="button button-secondary" onClick={exportCsv}><ArrowDownToLine size={16} /><span>Export</span></button>
          <button className="button button-primary" onClick={openCreate}><Plus size={17} /><span>Add {config.singular}</span></button>
        </div>
      </div>

      <div className="resource-stats">
        <div className="resource-stat"><span className="resource-stat-icon cyan"><ClipboardList size={17} /></span><span><small>Total records</small><strong>{records.length}</strong></span></div>
        <div className="resource-stat"><span className="resource-stat-icon green"><i className="stat-check" /></span><span><small>Active / complete</small><strong>{activeCount}</strong></span></div>
        <div className="resource-stat"><span className="resource-stat-icon amber"><i className="stat-clock" /></span><span><small>Needs attention</small><strong>{reviewCount}</strong></span></div>
      </div>

      <section className="surface-card resource-table-card">
        <div className="table-toolbar">
          <div><h2>{title} list</h2><p>{visibleRecords.length} of {records.length} records</p></div>
          <div className="table-tools">
            <label className="table-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${config.label.toLowerCase()}...`} /></label>
            <div className="filter-wrap">
              <button className={`button button-secondary filter-button${filterOpen ? " is-open" : ""}`} onClick={() => setFilterOpen((value) => !value)}><SlidersHorizontal size={16} /><span>Filter</span><ChevronDown size={14} /></button>
              {filterOpen && <div className="filter-popover">{statusOptions.map((option) => <button key={option} className={statusFilter === option ? "selected" : ""} onClick={() => { setStatusFilter(option); setFilterOpen(false); }}>{option}{statusFilter === option && <span>✓</span>}</button>)}</div>}
            </div>
            <button className="icon-button table-print" aria-label="Print list" onClick={() => window.print()}><Printer size={17} /></button>
          </div>
        </div>

        <div className="table-scroll-wrap">
          {visibleRecords.length ? (
            <table className="records-table">
              <thead><tr>{config.columns.map((column) => <th key={column.key}>{column.label}</th>)}<th className="actions-heading">Actions</th></tr></thead>
              <tbody>
                {visibleRecords.map((record) => (
                  <tr key={record.id}>
                    {config.columns.map((column, index) => {
                      const value = record[column.key];
                      if (column.type === "status") return <td key={column.key}><StatusPill value={value} /></td>;
                      if (column.type === "currency") return <td key={column.key}><strong className="currency-value">${Number(value || 0).toLocaleString()}</strong></td>;
                      if (index === 0 && ["id", "code"].includes(column.key)) return <td key={column.key}><span className="id-chip">{value}</span></td>;
                      if (index === 0 && (record.name || record.title || record.student)) {
                        const person = record.name || record.student || record.title;
                        const helper = record.email || record.role || record.author || record.id;
                        return <td key={column.key}><div className="table-person"><span className="person-avatar">{getInitials(person)}</span><span><strong>{value}</strong><small>{helper}</small></span></div></td>;
                      }
                      return <td key={column.key} className={column.key === "score" ? "score-cell" : ""}>{value === undefined || value === "" ? <span className="empty-value">—</span> : value}</td>;
                    })}
                    <td className="row-actions"><button className="row-action-button" onClick={() => openEdit(record)} aria-label={`Edit ${record.name || record.title || record.id}`}><SquarePen size={16} /></button><button className="row-action-button delete-action" onClick={() => removeRecord(record)} aria-label={`Delete ${record.name || record.title || record.id}`}><Trash2 size={16} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state"><span className="empty-state-icon"><ClipboardList size={24} /></span><strong>No records found</strong><p>Try another search or add your first {config.singular}.</p><button className="button button-primary" onClick={openCreate}><Plus size={16} />Add {config.singular}</button></div>
          )}
        </div>
        <div className="table-footer"><span>Showing <strong>{visibleRecords.length}</strong> of <strong>{records.length}</strong> records</span><div><span className="table-page active">1</span><span className="table-page">{Math.max(1, Math.ceil(records.length / 10))}</span></div></div>
      </section>

      <div className="resource-hint"><span className="hint-sparkle">✦</span><span><strong>Everything in one place.</strong> Changes are saved in this browser for your Grid &amp; Logic workspace.</span></div>

      {modalRecord !== false && (modalRecord || Object.keys(formValues).length > 0) && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalRecord(false); }}>
          <section className="record-modal" role="dialog" aria-modal="true" aria-labelledby="record-modal-title">
            <div className="modal-head"><div><div className="eyebrow"><span className="eyebrow-mark" /> RECORD DETAILS</div><h2 id="record-modal-title">{modalRecord ? `Edit ${config.singular}` : `Add ${config.singular}`}</h2><p>Fill in the details below. You can update them later.</p></div><button className="icon-button" onClick={() => setModalRecord(false)} aria-label="Close dialog"><X size={18} /></button></div>
            <form onSubmit={saveRecord}>
              <div className="modal-fields">{config.fields.map((field) => <FormField key={field.name} field={field} value={formValues[field.name]} onChange={(value) => setFormValues((current) => ({ ...current, [field.name]: value }))} />)}</div>
              <div className="modal-actions"><button type="button" className="button button-secondary" onClick={() => setModalRecord(false)}>Cancel</button><button type="submit" className="button button-primary">{modalRecord ? "Save changes" : `Add ${config.singular}`}</button></div>
            </form>
          </section>
        </div>
      )}
      {toast && <div className="toast-message"><span>✓</span>{toast}</div>}
    </div>
  );
}
