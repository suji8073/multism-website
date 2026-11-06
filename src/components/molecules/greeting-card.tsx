import { Reveal } from '@/components/atoms/layout'
import { QuotesIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { ImageFrame } from '@/components/atoms/image-frame'
import { cn } from '@/lib/utils'

type GreetingCardProps = {
  /** 대표 사진 (없으면 사진 자리 표시) */
  image?: string
  name: string
  role: string
  /** 굵게 보이는 인용 한 줄 */
  quote: string
  children: ReactNode
  className?: string
}

/** 대표 인사말: 사진 + 인용문 + 본문 + 서명 */
function GreetingCard({ image, name, role, quote, children, className }: GreetingCardProps) {
  return (
    <div
      className={cn(
        'grid items-center gap-10 lg:gap-16',
        image && 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]',
        className,
      )}
    >
      {image && (
        <Reveal>
          <ImageFrame src={image} ratio="4/3" rounded="lg" zoomOnHover={false} className="lg:aspect-[4/5]" />
        </Reveal>
      )}
      <Reveal index={2}>
        <figure className={cn('flex flex-col gap-6', !image && 'mx-auto max-w-3xl')}>
          <QuotesIcon weight="fill" className="text-accent size-10" aria-hidden />
          <blockquote className="text-[clamp(22px,2.4vw,30px)] leading-snug font-bold tracking-tight">
            {quote}
          </blockquote>
          <div className="text-subtle-foreground flex flex-col gap-3 text-body leading-relaxed">{children}</div>
          <figcaption className="flex items-center gap-3 border-t pt-5">
            <span className="text-muted-foreground text-sm">{role}</span>
            <b className="text-lg">{name}</b>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  )
}

export { GreetingCard }
