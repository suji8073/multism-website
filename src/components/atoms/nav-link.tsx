import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const navLinkVariants = cva('transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm', {
  variants: {
    variant: {
      /** 데스크톱 헤더: 활성 시 네이비 글씨 + 얇은 밑줄 */
      bar: "relative flex h-full items-center px-1 text-body font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-['']",
      /** 모바일 메뉴: 활성 시 왼쪽 막대 + 배경 */
      list: 'flex min-h-12 items-center border-l-2 border-transparent px-3 text-base font-medium',
    },
    active: { true: '', false: '' },
  },
  compoundVariants: [
    { variant: 'bar', active: false, className: 'text-subtle-foreground hover:text-foreground' },
    { variant: 'bar', active: true, className: 'text-primary font-bold after:scale-x-100' },
    { variant: 'list', active: false, className: 'text-foreground hover:text-primary' },
    { variant: 'list', active: true, className: 'border-primary bg-primary-soft text-primary font-bold' },
  ],
  defaultVariants: { variant: 'bar', active: false },
})

type NavLinkProps = ComponentProps<'a'> & VariantProps<typeof navLinkVariants>

function NavLink({ variant, active, className, ...props }: NavLinkProps) {
  return (
    <a
      aria-current={active ? 'location' : undefined}
      className={cn(navLinkVariants({ variant, active }), className)}
      {...props}
    />
  )
}

export { NavLink }
