import type { AnchorHTMLAttributes } from 'react'

export type ButtonProps = {
  label: string
} & AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>
