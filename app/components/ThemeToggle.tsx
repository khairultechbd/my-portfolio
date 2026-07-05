'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const themes = [
    { key: 'light',  icon: Sun,     label: 'Light'  },
    { key: 'dark',   icon: Moon,    label: 'Dark'   },
    { key: 'system', icon: Monitor, label: 'System' },
  ]

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '999px',
      padding: '3px',
    }}>
      {themes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          title={label}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme === key ? '#2563eb' : 'transparent',
            color: theme === key ? '#fff' : 'var(--text-muted)',
            transition: 'all 0.2s ease',
          }}
        >
          <Icon size={15} />
        </button>
      ))}
    </div>
  )
}
