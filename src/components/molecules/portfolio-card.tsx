import { Badge } from '@/components/atoms/badge'
import { cn } from '@/lib/utils'

export type PortfolioItem = {
  title: string
  category: string
  year: string
  /** 예: '3년 연속' */
  repeat?: string
  image?: string
  href?: string
}

type PortfolioCardProps = PortfolioItem & { className?: string }

function PortfolioCard({ title, category, year, repeat, image, href, className }: PortfolioCardProps) {
  const body = (
    <>
      <div className="bg-muted aspect-[4/3] overflow-hidden rounded-md">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="text-muted-foreground flex size-full items-end p-3 text-xs">[행사 사진]</div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{category}</Badge>
        <span className="text-muted-foreground text-[13px]">{year}</span>
        {repeat && <Badge variant="outline">{repeat}</Badge>}
      </div>
      <h3 className="text-[17px] leading-snug font-bold">{title}</h3>
    </>
  )

  const classes = cn('group flex flex-col gap-3', className)
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {body}
    </a>
  ) : (
    <article className={classes}>{body}</article>
  )
}

export { PortfolioCard }
