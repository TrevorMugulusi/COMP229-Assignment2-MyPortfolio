import { CodeIcon, BrowserIcon, DatabaseIcon, SupportIcon, TerminalIcon } from './index.jsx'

/**
 * Maps the `icon` name stored with each service to a matching icon component.
 * Kept in its own file so the icon file only exports components.
 */
const serviceIcons = {
  code: CodeIcon,
  browser: BrowserIcon,
  database: DatabaseIcon,
  support: SupportIcon,
  terminal: TerminalIcon,
}

/** Returns a ready-to-render icon for the given service name. */
export function renderServiceIcon(iconName, props) {
  const Icon = serviceIcons[iconName] ?? CodeIcon
  return <Icon {...props} />
}
