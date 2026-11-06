import { CopyIcon, MapTrifoldIcon } from '@phosphor-icons/react'
import { toast } from '@/components/atoms/sonner'
import { cn } from '@/lib/utils'

type MapActionsProps = {
  /** 지도 검색·복사에 쓸 주소 */
  address: string
  /** 네이비 배경 위에서 쓸 때 */
  inverse?: boolean
  className?: string
}

/** 주소 바로가기: 네이버 지도 · 구글 지도 · 주소 복사 */
function MapActions({ address, inverse, className }: MapActionsProps) {
  const q = encodeURIComponent(address)
  const chip = cn(
    'inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border px-3.5 text-caption font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
    inverse ? 'border-white/25 text-white hover:bg-white/10' : 'text-primary hover:bg-primary-soft',
  )

  async function copy() {
    try {
      await navigator.clipboard.writeText(address)
      toast.success('주소를 복사했습니다', { description: address })
    } catch {
      toast.error('복사하지 못했습니다', { description: address })
    }
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <a className={chip} href={`https://map.naver.com/p/search/${q}`} target="_blank" rel="noreferrer">
        <MapTrifoldIcon weight="bold" className="size-4" />
        네이버 지도
      </a>
      <a
        className={chip}
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noreferrer"
      >
        <MapTrifoldIcon weight="bold" className="size-4" />
        구글 지도
      </a>
      <button type="button" className={chip} onClick={copy}>
        <CopyIcon weight="bold" className="size-4" />
        주소 복사
      </button>
    </div>
  )
}

export { MapActions }
