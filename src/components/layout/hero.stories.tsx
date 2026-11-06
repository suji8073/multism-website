import type { Meta, StoryObj } from '@storybook/react-vite'
import { Eyebrow, Heading, Highlight } from '@/components/atoms/typography'
import { FullBleedHero } from './full-bleed-hero'
import { PhotoBand } from './photo-band'
import { Section } from './section'

const meta = { title: 'Layout/Hero & Bands', tags: ['autodocs'], parameters: { page: true } } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const SLIDES = [
  { image: '/images/hero.webp', caption: '교동 면민의 날' },
  { image: '/images/portfolio/koban.webp', caption: '코반 창립 기념행사' },
]

export const Hero: Story = {
  render: () => (
    <FullBleedHero slides={SLIDES} aside={<div className="bg-card rounded-2xl p-6">견적 폼 자리</div>}>
      <Eyebrow tone="inverse">ONE-STOP EVENT SERVICE</Eyebrow>
      <Heading as="h1" size="display" tone="inverse">
        행사의 처음부터 끝까지, <Highlight className="text-spark-yellow">한 회사가</Highlight> 책임집니다.
      </Heading>
    </FullBleedHero>
  ),
}

export const Band: Story = {
  render: () => (
    <PhotoBand image="/images/portfolio/gimpo-marathon.webp">
      <Heading size="xl" tone="inverse">45건이 넘는 현장</Heading>
    </PhotoBand>
  ),
}

export const SectionTones: Story = {
  render: () => (
    <div>
      {(['default', 'muted', 'dots', 'festive', 'primary'] as const).map((tone) => (
        <Section key={tone} tone={tone} spacing="sm">
          <Eyebrow tone={tone === 'primary' ? 'inverse' : 'primary'}>tone: {tone}</Eyebrow>
        </Section>
      ))}
    </div>
  ),
}
