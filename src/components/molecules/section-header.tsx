import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  /** 영문 라벨 (예: WHY MULTI SM) */
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** 오른쪽 끝에 붙는 링크·버튼 */
  action?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

function SectionHeader({ eyebrow, title, description, action, align = 'left', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-end justify-between gap-6',
        align === 'center' && 'flex-col items-center text-center',
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <span className="text-primary font-display text-sm font-bold tracking-wider">{eyebrow}</span>
        <h2 className="text-[clamp(28px,3.2vw,38px)] leading-snug font-bold tracking-tight">{title}</h2>
      </div>
      {description && <p className="text-subtle-foreground max-w-md text-[15px] leading-relaxed">{description}</p>}
      {action}
    </div>
  )
}

export { SectionHeader }
