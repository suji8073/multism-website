import { Badge } from '@/components/atoms/badge'
import { MediaCard } from './media-card'

export type PortfolioItem = {
  title: string
  category: string
  year: string
  /** 예: '3년 연속' */
  repeat?: string
  image?: string
  href?: string
}

/** 행사 실적 카드 — MediaCard 기반 */
function PortfolioCard({ title, category, year, repeat, image, href }: PortfolioItem) {
  return (
    <MediaCard
      variant="plain"
      title={title}
      image={image}
      href={href}
      meta={
        <>
          <span>
            {year} · {category}
          </span>
          {repeat && <Badge variant="accent">{repeat}</Badge>}
        </>
      }
    />
  )
}

export { PortfolioCard }
