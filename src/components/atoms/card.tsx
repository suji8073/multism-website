import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('bg-card text-card-foreground flex flex-col gap-3 rounded-lg border p-6', className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-header" className={cn('flex flex-col gap-1.5', className)} {...props} />
}

function CardEyebrow({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      data-slot="card-eyebrow"
      className={cn('text-muted-foreground font-display text-xs font-semibold tracking-wider', className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return <h3 data-slot="card-title" className={cn('text-lg font-bold', className)} {...props} />
}

function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-subtle-foreground text-sm leading-relaxed', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn(className)} {...props} />
}

function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={cn('flex items-center gap-2', className)} {...props} />
}

export { Card, CardContent, CardDescription, CardEyebrow, CardFooter, CardHeader, CardTitle }
