import { Reveal } from '@/components/atoms/layout'
import type { ReactNode } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/atoms/carousel'
import { cn } from '@/lib/utils'

type CardCarouselProps = {
  items: readonly { key: string; node: ReactNode }[]
  /** 한 화면에 보이는 개수(데스크톱 기준) */
  perView?: 3 | 4
  className?: string
}

const BASIS = {
  3: 'basis-[80%] sm:basis-1/2 lg:basis-1/3',
  4: 'basis-[72%] sm:basis-1/3 lg:basis-1/4',
} as const

/** 가로로 넘기는 카드 줄 (shadcn Carousel 기반) */
function CardCarousel({ items, perView = 4, className }: CardCarouselProps) {
  return (
    <Carousel opts={{ align: 'start', dragFree: true }} className={cn('w-full', className)}>
      <CarouselContent className="-ml-4 pb-2">
        {items.map((it, i) => (
          <CarouselItem key={it.key} className={cn('pl-4', BASIS[perView])}>
            <Reveal index={i}>{it.node}</Reveal>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-end gap-2">
        <CarouselPrevious variant="outline-primary" className="static size-11 translate-y-0" />
        <CarouselNext variant="outline-primary" className="static size-11 translate-y-0" />
      </div>
    </Carousel>
  )
}

export { CardCarousel }
