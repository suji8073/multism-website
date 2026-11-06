import type { ReactNode } from 'react'
import { Badge, BadgeList } from '@/components/atoms/badge'
import { ImageFrame } from '@/components/atoms/image-frame'
import { cn } from '@/lib/utils'

type MediaCardProps = {
  title: string
  image?: string
  /** 사진 위 왼쪽 상단 배지 */
  label?: string
  /** 제목 위 작은 줄 (연도, 영문 라벨 등) */
  meta?: ReactNode
  description?: string
  tags?: readonly string[]
  ratio?: '4/3' | '3/2' | '16/9'
  /** framed: 테두리 카드 / plain: 사진+텍스트만 */
  variant?: 'framed' | 'plain'
  href?: string
  className?: string
}

/** 사진 카드: 행사 실적 · 렌탈 품목 · 프로그램 공용 */
function MediaCard({
  title,
  image,
  label,
  meta,
  description,
  tags,
  ratio = '4/3',
  variant = 'framed',
  href,
  className,
}: MediaCardProps) {
  const framed = variant === 'framed'
  const body = (
    <>
      <div className="relative">
        <ImageFrame src={image} ratio={ratio} rounded={framed ? 'none' : 'md'} />
        {label && (
          <Badge variant="glass" className="absolute top-3 left-3 shadow-sm">
            {label}
          </Badge>
        )}
      </div>
      <div className={cn('flex flex-1 flex-col gap-1.5', framed ? 'p-4' : 'pt-3.5')}>
        {meta && <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-caption">{meta}</div>}
        <h3 className="group-hover:text-primary text-lead leading-snug font-bold transition-colors">{title}</h3>
        {description && <p className="text-muted-foreground text-caption leading-relaxed">{description}</p>}
        {tags && tags.length > 0 && <BadgeList items={tags} className="mt-1.5" />}
      </div>
    </>
  )

  const classes = cn(
    'group flex flex-col',
    framed &&
      'bg-card overflow-hidden rounded-2xl border transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,42,85,0.12)]',
    className,
  )

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {body}
    </a>
  ) : (
    <article className={classes}>{body}</article>
  )
}

export { MediaCard }
export type { MediaCardProps }
