const icons = {
  arrow:  (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  check:  (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  cross:  (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  menu:   (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  sun:    (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7"/><path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7L17 17M7 7L5.3 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>),
  moon:   (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M20 14.2A8 8 0 019.8 4 8 8 0 1020 14.2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  palette:(p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="9" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.7"/><circle cx="15.5" cy="12" r="5.5" stroke="var(--accent)" strokeWidth="1.7"/></svg>),
  /* legacy icons for /presence-en-ligne */
  window: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M3 9h18" stroke="currentColor" strokeWidth="1.7"/><circle cx="7" cy="6.5" r="1" fill="currentColor"/><circle cx="10" cy="6.5" r="1" fill="currentColor"/></svg>),
  search: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  badge:  (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 2l2.4 4.8 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.8l.9-5.4L4.2 7.6l5.4-.8L12 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  target: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>),
  roof:   (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 11l9-8 9 8M5 9.5V20h14V9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  pin:    (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 2C8.7 2 6 4.7 6 8c0 5 6 14 6 14s6-9 6-14c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7"/></svg>),
  store:  (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 7h16l-1.5 8H5.5L4 7zM9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M3 7l2-4h14l2 4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  doc:    (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M14 3v5h5M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>),
  blocks: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.7"/></svg>),
  phone:  (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>),
}

export function Icon({ name, ...p }) {
  const fn = icons[name]
  return fn ? fn(p) : null
}
