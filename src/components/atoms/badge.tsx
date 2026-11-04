import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-bold whitespace-nowrap [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'bg-primary-soft text-primary',
        solid: 'bg-primary text-primary-foreground',
        outline: 'border border-primary-soft-border text-primary',
        accent: 'bg-accent/10 text-accent-strong',
        neutral: 'border border-border bg-background text-subtle-foreground font-medium',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot.Root : 'span'
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
