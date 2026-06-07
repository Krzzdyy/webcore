const SpiderWeb = ({ size = 200, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`web-corner ${className}`}
  >
    {/* Radial lines from corner */}
    <line x1="0" y1="0" x2="200" y2="50" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="200" y2="110" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="160" y2="200" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="90" y2="200" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="30" y2="200" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="0" y2="200" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="200" y2="0" stroke="#0D0D0D" strokeWidth="1"/>
    <line x1="0" y1="0" x2="200" y2="18" stroke="#0D0D0D" strokeWidth="1"/>

    {/* Concentric arcs - web rings */}
    <path d="M 40 0 Q 40 40 0 40" stroke="#0D0D0D" strokeWidth="1" fill="none"/>
    <path d="M 85 0 Q 85 85 0 85" stroke="#0D0D0D" strokeWidth="1" fill="none"/>
    <path d="M 130 0 Q 130 130 0 130" stroke="#0D0D0D" strokeWidth="1" fill="none"/>
    <path d="M 175 0 Q 175 175 0 175" stroke="#0D0D0D" strokeWidth="1" fill="none"/>
    <path d="M 200 20 Q 200 200 20 200" stroke="#0D0D0D" strokeWidth="1" fill="none"/>
  </svg>
)

export default SpiderWeb
