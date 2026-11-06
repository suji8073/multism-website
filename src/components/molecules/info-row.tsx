import type { Icon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

type InfoRowProps = {
  icon: Icon
  children: React.ReactNode
  href?: string
  inverse?: boolean
  className?: string
}

/** 아이콘 + 한 줄 정보 (주소, 운영시간 등) */
function InfoRow({ icon: IconCmp, children, href, inverse, className }: InfoRowProps) {
  const classes = cn(
    'inline-flex items-center gap-2 text-sm',
    inverse ? 'text-[#D6DEEA]' : 'text-subtle-foreground',
    href && (inverse ? 'hover:text-white hover:underline' : 'hover:text-primary hover:underline'),
    className,
  )
  const content = (
    <>
      <IconCmp className="size-4 shrink-0" weight="bold" />
      {children}
    </>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {content}
    </a>
  ) : (
    <span className={classes}>{content}</span>
  )
}

export { InfoRow }
