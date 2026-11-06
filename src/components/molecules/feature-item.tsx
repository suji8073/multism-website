import type { Icon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

type FeatureItemProps = {
  title: string
  description: string
  /** 번호(01) 또는 아이콘 중 하나 */
  index?: string
  icon?: Icon
  /** 강조 타일(네이비 배경) */
  highlight?: boolean
  className?: string
}

/** 강점·가치 항목: 아이콘(또는 번호) + 제목 + 설명 */
function FeatureItem({ title, description, index, icon: IconCmp, highlight, className }: FeatureItemProps) {
  return (
    <div
      className={cn(
        'group flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors duration-300',
        highlight ? 'bg-primary border-primary text-white' : 'bg-card hover:border-primary-soft-border',
        className,
      )}
    >
      <div
        className={cn(
          'flex size-12 items-center justify-center rounded-xl text-base font-bold transition-colors duration-300',
          highlight
            ? 'bg-white/10 text-white'
            : 'bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white',
        )}
      >
        {IconCmp ? <IconCmp className="size-6" weight="duotone" /> : index}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className={cn('text-body leading-relaxed', highlight ? 'text-[#D6DEEA]' : 'text-subtle-foreground')}>
          {description}
        </p>
      </div>
    </div>
  )
}

export { FeatureItem }
