import { Children } from 'react'
import { Reveal } from './layout'
import { ArrowRightIcon } from '@phosphor-icons/react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Magic UI Bento Grid — 멀티SM 토큰(네이비·6px 모서리·Pretendard)에 맞게 조정
 * 원본: https://magicui.design/docs/components/bento-grid
 */

type BentoGridProps = ComponentPropsWithoutRef<'div'> & { children: ReactNode }

function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div className={cn('grid w-full auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3', className)} {...props}>
      {Children.toArray(children).map((child, i) => (
        <Reveal key={i} index={i} className={cellClass(child)}>
          {child}
        </Reveal>
      ))}
    </div>
  )
}

type BentoCardProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  /** 영문 라벨 */
  eyebrow?: string
  title: string
  description: string
  /** 배경 사진 경로. 없으면 단색 카드 */
  image?: string
  href?: string
  cta?: string
  /** 그리드에서 차지할 칸: md 이상에서 1~3칸 */
  span?: 1 | 2 | 3
  /** 세로 2칸 */
  tall?: boolean
}

/** 카드 칸 크기를 등장 래퍼에 옮김 (그리드 칸은 래퍼가 차지) */
function cellClass(child: React.ReactNode) {
  const p = (child as React.ReactElement<Pick<BentoCardProps, 'span' | 'tall'>>).props ?? {}
  return cn(SPAN[p.span ?? 1], p.tall && 'md:row-span-2')
}

const SPAN = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
} as const

function BentoCard({
  eyebrow,
  title,
  description,
  image,
  href,
  cta,
  span = 1,
  tall,
  className,
  ...props
}: BentoCardProps) {
  const hasImage = Boolean(image)
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border',
        hasImage ? 'bg-primary text-white' : 'bg-card text-card-foreground',
        SPAN[span],
        tall && 'md:row-span-2',
        className,
      )}
      {...props}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3B]/95 via-[#0A1D3B]/65 to-[#0A1D3B]/10" />
        </>
      )}
      <div className="relative z-10 flex transform-gpu flex-col gap-1.5 p-6 transition-transform duration-300 lg:group-hover:-translate-y-8">
        {eyebrow && (
          <span
            className={cn(
              'font-display text-xs font-semibold tracking-wider',
              hasImage ? 'text-white/75' : 'text-muted-foreground',
            )}
          >
            {eyebrow}
          </span>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className={cn('max-w-md text-caption', hasImage ? 'text-white/85' : 'text-subtle-foreground')}>
          {description}
        </p>
      </div>
      {href && cta && (
        <a
          href={href}
          className={cn(
            'relative z-10 inline-flex items-center gap-1.5 px-6 pb-5 text-sm font-bold lg:absolute lg:bottom-0 lg:translate-y-6 lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100',
            hasImage ? 'text-white' : 'text-primary',
          )}
        >
          {cta}
          <ArrowRightIcon weight="bold" className="size-4" />
        </a>
      )}
    </div>
  )
}

export { BentoCard, BentoGrid }
