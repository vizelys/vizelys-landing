export default function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* onde au sol — cyan fixe */}
      <ellipse cx="32" cy="52.5" rx="13" ry="3.4" fill="none"
        stroke="#28bdcb" strokeWidth="3.4" strokeLinecap="round" />
      {/* V — suit la couleur du texte (réversible light/dark) */}
      <path d="M15 15 L32 48 L49 15" fill="none"
        stroke="currentColor" strokeWidth="7"
        strokeLinecap="round" strokeLinejoin="round" />
      {/* point focal — cyan fixe */}
      <circle cx="32" cy="14" r="6" fill="#28bdcb" />
    </svg>
  )
}
