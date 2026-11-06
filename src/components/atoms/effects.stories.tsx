import type { Meta, StoryObj } from '@storybook/react-vite'
import { BentoCard, BentoGrid } from './bento-grid'
import { Marquee } from './marquee'
import { NumberTicker } from './number-ticker'
import { ShimmerButton } from './shimmer-button'

const meta = { title: 'Atoms/Effects (Magic UI)', tags: ['autodocs'] } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Ticker: Story = {
  render: () => <NumberTicker value={45} className="text-primary text-5xl font-bold" />,
}

export const Shimmer: Story = {
  render: () => (
    <ShimmerButton background="var(--accent-strong)" borderRadius="6px" className="px-7 py-3.5 font-bold">
      빠른 견적 상담하기
    </ShimmerButton>
  ),
}

export const MarqueeStory: Story = {
  name: 'Marquee',
  render: () => (
    <Marquee pauseOnHover className="[--duration:20s]">
      {['김포시', '인천 서구청', '대한적십자사', '김포대학교'].map((n) => (
        <span key={n} className="rounded-md border px-5 py-3 font-bold">
          {n}
        </span>
      ))}
    </Marquee>
  ),
}

export const Bento: Story = {
  render: () => (
    <BentoGrid>
      <BentoCard span={2} eyebrow="EVENT AGENCY" title="각종 행사대행" description="관공서 · 기업 · 학교 행사" image="/images/portfolio/gimpo-marathon.webp" href="#" cta="견적 문의" />
      <BentoCard eyebrow="CEREMONY" title="기념식·착공식" description="기공식, 준공식, 제막식" image="/images/portfolio/gajwa-groundbreaking.webp" />
      <BentoCard eyebrow="GOODS & PRINT" title="단체복·인쇄물" description="단체복, 상패, 현수막" href="#" cta="견적 문의" />
    </BentoGrid>
  ),
}
