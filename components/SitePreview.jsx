export default function SitePreview({ url = 'vizelys.fr', label = 'aperçu du site', height }) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <div className="browser-url">{url}</div>
      </div>
      <div className="browser-body">
        <div className="ph" data-label={label} style={height ? { height } : { height: '320px' }} />
      </div>
    </div>
  )
}
