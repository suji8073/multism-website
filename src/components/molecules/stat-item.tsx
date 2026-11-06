import { NumberTicker } from '@/components/atoms/number-ticker'
import { cn } from '@/lib/utils'

type StatItemProps = {
  /** 숫자면 카운트업 애니메이션 */
  value: number | string
  /** 숫자 뒤에 붙는 단위 (예: 건+, 년) */
  suffix?: string
  label: string
  divider?: boolean
  inverse?: boolean
  className?: string
}

function StatItem({ value, suffix, label, divider = false, inverse, className }: StatItemProps) {
  return (
    <div
      className={cn('flex flex-col gap-1.5', divider && 'lg:border-l lg:pl-6', inverse && 'border-white/20', className)}
    >
      <span className={cn('text-[36px] leading-tight font-bold', inverse ? 'text-white' : 'text-primary')}>
        {typeof value === 'number' ? (
          <NumberTicker value={value} className={cn('tracking-tight', inverse ? 'text-white' : 'text-primary')} />
        ) : (
          value
        )}
        {suffix && <span className="text-accent-strong ml-0.5 text-2xl">{suffix}</span>}
      </span>
      <span className={cn('text-sm', inverse ? 'text-[#C9D3E3]' : 'text-muted-foreground')}>{label}</span>
    </div>
  )
}

export { StatItem }
