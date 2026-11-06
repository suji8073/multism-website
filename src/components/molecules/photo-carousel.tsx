import { useEffect, useState } from 'react'
import { Badge } from '@/components/atoms/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/atoms/carousel'
import { ImageFrame } from '@/components/atoms/image-frame'
import { cn } from '@/lib/utils'

type Slide = { image: string; caption: string }

type PhotoCarouselProps = {
  slides: readonly Slide[]
  /** 자동 넘김 간격(ms). 0이면 끔 */
  interval?: number
  className?: string
}

/** 행사 사진 슬라이드 (shadcn Carousel 기반) */
function PhotoCarousel({ slides, interval = 4500, className }: PhotoCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    onSelect()
    api.on('select', onSelect)
    const timer = interval ? setInterval(() => api.scrollNext(), interval) : undefined
    return () => {
      api.off('select', onSelect)
      if (timer) clearInterval(timer)
    }
  }, [api, interval])

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className={cn('group/carousel relative', className)}>
      <CarouselContent>
        {slides.map((s, i) => (
          <CarouselItem key={s.image}>
            <div className="relative">
              <ImageFrame src={s.image} alt={s.caption} ratio="16/9" rounded="lg" zoomOnHover={false} eager={i === 0} />
              <Badge variant="glass" className="absolute bottom-4 left-4 shadow-sm">
                {s.caption}
              </Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="inverse"
        className="left-3 opacity-0 shadow-md transition-opacity group-hover/carousel:opacity-100"
      />
      <CarouselNext
        variant="inverse"
        className="right-3 opacity-0 shadow-md transition-opacity group-hover/carousel:opacity-100"
      />
      <div className="absolute right-4 bottom-4 flex gap-1.5" aria-hidden>
        {slides.map((s, i) => (
          <span
            key={s.image}
            className={cn('h-1.5 rounded-full bg-white/60 transition-all', i === current ? 'w-6 bg-white' : 'w-1.5')}
          />
        ))}
      </div>
    </Carousel>
  )
}

export { PhotoCarousel }
