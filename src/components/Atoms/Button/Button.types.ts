import type { AnchorHTMLAttributes } from 'react'

export type ButtonProps = {
  isLoading?: boolean
  label: string
} & AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>
