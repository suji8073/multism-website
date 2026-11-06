import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center gap-1 rounded-sm font-bold whitespace-nowrap [&>svg]:size-3.5',
  {
    variants: {
      variant: {
        default: 'bg-primary-soft text-primary',
        solid: 'bg-primary text-primary-foreground',
        outline: 'border border-primary-soft-border text-primary',
        accent: 'bg-accent/10 text-accent-strong',
        neutral: 'border border-border bg-background text-subtle-foreground font-medium',
        inverse: 'border border-white/25 text-[#D6DEEA] font-medium',
        glass: 'bg-white/90 text-primary backdrop-blur',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1.5 text-caption',
      },
    },
    defaultVariants: { variant: 'default', size: 'sm' },
  },
)

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }

function Badge({ className, variant, size, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot.Root : 'span'
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

/** 배지 여러 개를 줄바꿈 목록으로 */
function BadgeList({
  items,
  variant = 'neutral',
  size = 'sm',
  label,
  className,
}: VariantProps<typeof badgeVariants> & { items: readonly string[]; label?: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((it) => (
        <li key={it}>
          <Badge variant={variant} size={size}>
            {it}
          </Badge>
        </li>
      ))}
    </ul>
  )
}

export { Badge, BadgeList, badgeVariants }
