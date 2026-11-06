import { Badge } from '@/components/atoms/badge'
import { BlurFade } from '@/components/atoms/blur-fade'
import { ImageFrame } from '@/components/atoms/image-frame'
import { cn } from '@/lib/utils'
import type { PortfolioItem } from './portfolio-card'

type MasonryGalleryProps = {
  items: readonly PortfolioItem[]
  className?: string
}

/** 사진 있는 실적을 크기가 섞인 배치로 — 첫 장은 크게(2×2), 네 번째는 가로로 길게 */
function MasonryGallery({ items, className }: MasonryGalleryProps) {
  return (
    <div className={cn('grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {items.map((p, i) => (
        <BlurFade
          key={p.title}
          inView
          delay={0.05 * i}
          className={cn(i === 0 && 'sm:col-span-2 sm:row-span-2', i === 3 && 'lg:col-span-2')}
        >
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            aria-label={p.href ? `${p.title} 블로그 후기 보기` : undefined}
            className="group focus-visible:ring-ring relative block size-full overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
          >
            <figure className="size-full">
              <ImageFrame src={p.image} ratio="fill" rounded="none" />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0A1D3B]/85 via-[#0A1D3B]/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5 text-white">
                <span className="flex items-center gap-2 text-caption text-white/80">
                  <Badge variant="glass">{p.category}</Badge>
                  {p.year}
                  {p.repeat && <span className="text-spark-yellow font-bold">· {p.repeat}</span>}
                </span>
                <b className={cn('leading-snug', i === 0 ? 'text-2xl' : 'text-base')}>{p.title}</b>
              </figcaption>
            </figure>
          </a>
        </BlurFade>
      ))}
    </div>
  )
}

export { MasonryGallery }
