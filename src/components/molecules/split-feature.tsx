import type { Icon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { BlurFade } from '@/components/atoms/blur-fade'
import { ImageFrame } from '@/components/atoms/image-frame'
import { cn } from '@/lib/utils'

type Item = { title: string; description: string; icon: Icon }

type SplitFeatureProps = {
  image: string
  imageAlt?: string
  /** 사진 위에 겹쳐 놓는 작은 카드 (수치, 문구 등) */
  overlay?: ReactNode
  items: readonly Item[]
  reverse?: boolean
  className?: string
}

/** 큰 사진 + 아이콘 목록을 좌우로 배치 */
function SplitFeature({ image, imageAlt, overlay, items, reverse, className }: SplitFeatureProps) {
  return (
    <div className={cn('grid items-center gap-10 lg:grid-cols-2 lg:gap-16', className)}>
      <BlurFade inView className={cn('relative', reverse && 'lg:order-2')}>
        <ImageFrame src={image} alt={imageAlt} ratio="4/3" rounded="lg" zoomOnHover={false} />
        {overlay && (
          <div className="bg-card absolute -bottom-6 right-4 rounded-2xl border p-5 shadow-[0_16px_40px_rgba(15,42,85,0.16)] lg:-right-6">
            {overlay}
          </div>
        )}
      </BlurFade>
      <ul className="flex flex-col">
        {items.map((it, i) => (
          <BlurFade key={it.title} inView delay={0.06 * i}>
            <li className="group flex gap-4 border-b py-5 last:border-b-0">
              <span className="bg-primary-soft text-primary group-hover:bg-primary flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:text-white">
                <it.icon className="size-6" weight="duotone" />
              </span>
              <span className="flex flex-col gap-1">
                <b className="text-lg">{it.title}</b>
                <span className="text-subtle-foreground text-body leading-relaxed">{it.description}</span>
              </span>
            </li>
          </BlurFade>
        ))}
      </ul>
    </div>
  )
}

export { SplitFeature }
