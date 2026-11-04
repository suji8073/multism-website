import { cn } from '@/lib/utils'

type StatItemProps = {
  value: string
  label: string
  /** 왼쪽 구분선 표시 (첫 항목 제외) */
  divider?: boolean
  className?: string
}

function StatItem({ value, label, divider = false, className }: StatItemProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', divider && 'sm:border-l sm:pl-6', className)}>
      <span className="text-primary text-[32px] leading-tight font-bold">{value}</span>
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>
  )
}

export { StatItem }
