import type { Icon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

type ValueCardProps = {
  /** 01, 02 … */
  no: string
  /** 영문 키워드 (DIRECT 등) */
  title: string
  /** 한글 한 줄 (직접 보유 · 직접 운영 등) */
  label: string
  description: string
  icon: Icon
  className?: string
}

/** 가치 카드 — 번호 · 아이콘 · 영문 키워드 · 한글 요약 · 설명 (밝은 배경용) */
function ValueCard({ no, title, label, description, icon: IconCmp, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        'group bg-card hover:border-primary/30 flex h-full flex-col gap-5 rounded-2xl border p-7 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_12px_32px_rgba(15,42,85,0.08)]',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="bg-primary-soft text-primary flex size-11 items-center justify-center rounded-xl">
          <IconCmp weight="duotone" className="size-6" />
        </span>
        <span className="font-display text-muted-foreground/60 text-caption font-semibold">{no}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-primary text-xl font-bold tracking-wide">{title}</h3>
        <span className="text-caption text-accent-strong font-medium">{label}</span>
      </div>
      <p className="text-body text-subtle-foreground">{description}</p>
    </div>
  )
}

export { ValueCard }
