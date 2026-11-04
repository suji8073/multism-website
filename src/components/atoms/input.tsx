import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const fieldBase =
  'border-input bg-background placeholder:text-muted-foreground w-full min-w-0 rounded-md border px-3 text-[15px] transition-colors outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/15'

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return <input type={type} data-slot="input" className={cn(fieldBase, 'h-11', className)} {...props} />
}

export { fieldBase, Input }
