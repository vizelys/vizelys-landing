export const Icons = {
  arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  cross: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  ),
  menu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  ),
  sun: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7"/><path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7L17 17M7 7L5.3 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
  moon: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M20 14.2A8 8 0 019.8 4 8 8 0 1020 14.2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
  ),
  window: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.7"/><circle cx="6" cy="6.7" r=".7" fill="currentColor"/></svg>
  ),
  search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.7"/><path d="M15 15l4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
  badge: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7"/><path d="M8.5 12.2l2.4 2.4L16 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  target: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.7"/></svg>
  ),
  roof: (props) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}><path d="M4 16L16 6l12 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14v11h18V14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
  ),
  pin: (props) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}><circle cx="16" cy="13" r="9" stroke="currentColor" strokeWidth="1.8"/><circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>
  ),
  store: (props) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}><rect x="6" y="13" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><path d="M5 13l2-7h18l2 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
  ),
  doc: (props) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}><rect x="8" y="5" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M12 12h8M12 17h8M12 22h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  ),
  blocks: (props) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="18" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="5" y="18" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="18" y="18" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/></svg>
  ),
  phone: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
  ),
};

export function Icon({ name, ...props }) {
  const C = Icons[name];
  return C ? <C {...props} /> : null;
}
