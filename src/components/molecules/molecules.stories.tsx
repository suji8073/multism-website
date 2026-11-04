import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactCard } from './contact-card'
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
      <StatItem value="45건+" label="2022–2026 진행 행사" />
      <StatItem divider value="3년 연속" label="다시 맡겨주신 단체 다수" />
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
