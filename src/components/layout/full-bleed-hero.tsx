import { useEffect, useState, type ReactNode } from 'react'
import { Badge } from '@/components/atoms/badge'
import { Container } from '@/components/atoms/container'
import { cn } from '@/lib/utils'

type Slide = { image: string; caption: string }

type FullBleedHeroProps = {
  slides: readonly Slide[]
  /** 왼쪽 카피 영역 */
  children: ReactNode
  /** 오른쪽 카드 영역 (견적 폼 등) */
  aside?: ReactNode
  interval?: number
  id?: string
}

/** 화면 전체 폭 사진 배경 히어로 — 사진이 천천히 확대되며 교차 전환 */
function FullBleedHero({ slides, children, aside, interval = 6000, id }: FullBleedHeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [slides.length, interval])

  return (
    <section id={id} className="relative isolate overflow-hidden bg-[#0A1D3B] text-white">
      {slides.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== current}
          className={cn('absolute inset-0 -z-20 transition-opacity duration-[1500ms]', i === current ? 'opacity-100' : 'opacity-0')}
        >
          <img
            src={s.image}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className={cn('size-full object-cover', i === current && 'animate-ken-burns')}
          />
        </div>
      ))}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A1D3B]/95 via-[#0A1D3B]/80 to-[#0A1D3B]/45" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#0A1D3B]/70 to-transparent" />

      <Container className="grid min-h-[calc(100svh-72px)] grid-cols-1 items-center gap-10 pt-16 pb-28 lg:grid-cols-[minmax(0,1.5fr)_minmax(340px,1fr)] lg:pt-20 lg:pb-32">
        <div className="flex flex-col gap-6">{children}</div>
        {aside && <div className="text-foreground">{aside}</div>}
      </Container>

      <div className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 items-center gap-3 sm:flex">
        <Badge variant="inverse">{slides[current]?.caption}</Badge>
        <div className="flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`${i + 1}번째 사진`}
              aria-current={i === current}
              onClick={() => setCurrent(i)}
              className={cn('h-1.5 cursor-pointer rounded-full bg-white/50 transition-all', i === current ? 'w-7 bg-white' : 'w-1.5')}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { FullBleedHero }
