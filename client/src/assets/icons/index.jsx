/**
 * Original small line icons used on the Services page. They are decorative
 * because every icon sits next to a visible service title.
 */

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export function CodeIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
    </svg>
  )
}

export function BrowserIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M2.5 9h19" />
      <path d="M6 13h6M6 16h9" />
    </svg>
  )
}

export function DatabaseIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </svg>
  )
}

export function SupportIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  )
}

export function TerminalIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="m7 9 3 3-3 3" />
      <path d="M12.5 15h5" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
