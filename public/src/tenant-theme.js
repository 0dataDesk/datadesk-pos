const TENANT_PALETTES = {
  furia: {
    '--c-primary':      '#792c24',
    '--c-primary-dark': '#5a1f19',
    '--c-primary-light':'#a03c32',
    '--c-accent':       '#ffefc5',
    '--c-accent-dark':  '#e8d4a8',
    '--c-on-primary':   '#ffefc5',
    '--c-on-accent':    '#792c24',
    '--c-bg':           '#1a0a08',
    '--primary':        '#792c24',
    '--pdk':            '#5a1f19',
    '--on-pri':         '#ffefc5',
    '--accent-llevar':    '#2E8B7A',
    '--on-accent-llevar': '#ffffff',
  },
  tita: {
    '--c-primary':      '#6A9BB5',
    '--c-primary-dark': '#4A7A94',
    '--c-primary-light':'#8BBACF',
    '--c-accent':       '#F5F9FC',
    '--c-accent-dark':  '#D8EAF3',
    '--c-on-primary':   '#ffffff',
    '--c-on-accent':    '#4A7A94',
    '--c-bg':           '#0d1f2d',
    '--primary':        '#6A9BB5',
    '--pdk':            '#4A7A94',
    '--on-pri':         '#ffffff',
    '--accent-llevar':    '#D98A3D',
    '--on-accent-llevar': '#ffffff',
  },
}

function applyTenantTheme(tenant_id) {
  const palette = TENANT_PALETTES[tenant_id] || TENANT_PALETTES['furia']
  const r = document.documentElement.style
  Object.entries(palette).forEach(([key, val]) => r.setProperty(key, val))
  // Derivadas: --pdim, --pdim2 desde --c-primary
  const p = palette['--c-primary']
  const h = p.replace('#', '')
  const R = parseInt(h.slice(0,2), 16)
  const G = parseInt(h.slice(2,4), 16)
  const B = parseInt(h.slice(4,6), 16)
  r.setProperty('--pdim',  `rgba(${R},${G},${B},.08)`)
  r.setProperty('--pdim2', `rgba(${R},${G},${B},.15)`)
}

window.applyTenantTheme = applyTenantTheme
