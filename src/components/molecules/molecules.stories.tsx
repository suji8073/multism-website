import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactCard } from './contact-card'
import { FeatureItem } from './feature-item'
import { MediaCard } from './media-card'
import { NameMarquee } from './name-marquee'
import { PhotoCarousel } from './photo-carousel'
import { ProcessTimeline } from './process-timeline'
import { WarehouseIcon } from '@phosphor-icons/react'
import { PortfolioCard } from './portfolio-card'
import { QuickQuoteForm } from './quick-quote-form'
import { SectionHeader } from './section-header'
import { StatItem } from './stat-item'

const meta = { title: 'Molecules', tags: ['autodocs'] } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SectionHeaderStory: Story = {
  name: 'SectionHeader',
  render: () => (
    <SectionHeader
      eyebrow="OUR BUSINESS"
      title="사업 영역"
      description="관공서·기업·학교·지역·단체 행사부터 체육대회, 마라톤, 착공식·개소식까지."
    />
  ),
}

export const Stats: Story = {
  render: () => (
    <div className="grid gap-6 sm:grid-cols-4">
      <StatItem value={45} suffix="건+" label="2022–2026 진행 행사" />
      <StatItem divider value={3} suffix="년 연속" label="다시 맡겨주신 단체 다수" />
      <StatItem divider value="직접 보유" label="무대·트러스·음향·천막·발전차" />
      <StatItem divider value="관공서" label="김포시 · 인천 서구청 · 대한적십자" />
    </div>
  ),
}

export const Portfolio: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-6 sm:grid-cols-3">
      <PortfolioCard category="체육대회" year="2025" title="김포충청향우연합회 한마음체육대회" repeat="3년 연속" />
      <PortfolioCard category="마라톤·걷기" year="2026" title="제14회 김포한강 마라톤대회" />
      <PortfolioCard category="착공·개소식" year="2026" title="가좌2지구 우수저류시설 설치사업 착공식" />
    </div>
  ),
}

export const Contact: Story = {
  render: () => (
    <div className="bg-primary grid max-w-xl gap-3 rounded-lg p-6 sm:grid-cols-2">
      <ContactCard label="대표 채희수" value="010-4225-9916" href="tel:01042259916" />
      <ContactCard label="이메일" value="mult8089@naver.com" href="mailto:mult8089@naver.com" />
    </div>
  ),
}

export const QuickQuote: Story = {
  render: () => (
    <div className="max-w-sm">
      <QuickQuoteForm />
    </div>
  ),
}

export const Media: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-6 sm:grid-cols-3">
      <MediaCard title="무대 · 구조물" image="/images/rental/stage.webp" ratio="16/9" tags={['행사 무대', '트러스']} />
      <MediaCard
        title="큰공 굴리기"
        image="/images/games/big-ball.webp"
        label="단체전"
        ratio="3/2"
        description="팀이 함께 굴리는 대표 종목"
      />
      <MediaCard title="사진 없는 카드" label="준비 중" />
    </div>
  ),
}

export const Features: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
      <FeatureItem icon={WarehouseIcon} title="직접 보유" description="장비와 물품을 직접 보유합니다." />
      <FeatureItem highlight icon={WarehouseIcon} title="DIRECT" description="강조 타일" />
    </div>
  ),
}

export const Timeline: Story = {
  render: () => (
    <ProcessTimeline
      steps={[
        { no: '01', en: 'CONSULTING', ko: '상담', desc: '현장 미팅' },
        { no: '02', en: 'PLANNING', ko: '기획', desc: '콘셉트' },
        { no: '03', en: 'DESIGN', ko: '디자인', desc: '현수막' },
        { no: '04', en: 'DISMANTLING', ko: '철거', desc: '정리' },
      ]}
    />
  ),
}

export const Carousel: Story = {
  render: () => (
    <div className="max-w-3xl">
      <PhotoCarousel
        slides={[
          { image: '/images/hero.webp', caption: '교동 면민의 날' },
          {
            image: '/images/portfolio/koban.webp',
            caption: '코반 창립 기념행사',
          },
        ]}
      />
    </div>
  ),
}

export const Marquee: Story = {
  render: () => <NameMarquee items={['김포시', '인천 서구청', '대한적십자사', '김포대학교', '검단농협']} />,
}
