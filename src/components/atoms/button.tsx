import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-bold whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        accent: 'bg-accent-strong text-accent-foreground hover:bg-accent-strong/90',
        outline: 'border border-input bg-background text-foreground font-medium hover:bg-muted',
        'outline-primary': 'border border-input bg-background text-primary hover:bg-primary-soft',
        soft: 'bg-primary-soft text-primary hover:bg-primary-soft-border/60',
        ghost: 'text-subtle-foreground font-medium hover:bg-muted hover:text-foreground',
        inverse: 'bg-white text-primary hover:bg-white/90',
        link: 'text-primary font-medium underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-3.5 text-sm',
        default: 'h-11 px-5 text-body',
        lg: 'h-14 px-7 text-base',
        icon: 'size-11',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    /** true면 자식 요소(<a> 등)에 버튼 스타일을 입힌다 */
    asChild?: boolean
  }

function Button({ className, variant, size, block, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, block, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
