import styles from '@/styles/typography.module.css'

import clsx from 'clsx'
import { createElement, type ComponentPropsWithRef } from 'react'

type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'x-large'
type Tag = 'p' | 'span' | 'li'
type Props<T extends Tag> = {
  tag?: T
  size?: Size
  bold?: boolean
} & ComponentPropsWithRef<T>

export function Typography<T extends Tag>({
  tag,
  className,
  children,
  size = 'medium',
  bold,
  ...props
}: Props<T>) {
  return createElement(
    tag || 'p',
    {
      className: clsx(
        styles.typography,
        styles[size],
        bold && styles.bold,
        className,
      ),
      ...props,
    },
    children,
  )
}
