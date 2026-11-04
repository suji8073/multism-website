import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { fieldBase } from './input'

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldBase, 'min-h-28 resize-y py-2.5 leading-relaxed', className)}
      {...props}
    />
  )
}

export { Textarea }
