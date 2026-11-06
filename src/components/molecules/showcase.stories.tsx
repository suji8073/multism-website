import { HandshakeIcon } from '@phosphor-icons/react'
import { ValueCard } from './value-card'
import { MapActions } from './map-actions'
import { TestimonialCard } from './testimonial-card'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { WarehouseIcon, WrenchIcon } from '@phosphor-icons/react'
import { CardCarousel } from './card-carousel'
import { FaqList } from './faq-list'
import { GreetingCard } from './greeting-card'
import { MasonryGallery } from './masonry-gallery'
import { MediaCard } from './media-card'
import { SplitFeature } from './split-feature'
import { StatItem } from './stat-item'

const meta = { title: 'Molecules/Showcase', tags: ['autodocs'] } satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Split: Story = {
  render: () => (
    <SplitFeature
      image="/images/rental/tent.webp"
      overlay={<StatItem value={3} suffix="년 연속" label="재의뢰" />}
      items={[
        {
          title: '직접 보유',
          description: '장비를 직접 보유합니다.',
          icon: WarehouseIcon,
        },
        {
          title: '직접 설치',
          description: '설치부터 철거까지 직접.',
          icon: WrenchIcon,
        },
      ]}
    />
  ),
}

export const Masonry: Story = {
  render: () => (
    <MasonryGallery
      items={[
        {
          title: '제27회 교동 면민의 날',
          category: '주민의 날·기념',
          year: '2026',
          image: '/images/hero.webp',
        },
        {
          title: '제14회 김포한강 마라톤대회',
          category: '마라톤·걷기',
          year: '2026',
          image: '/images/portfolio/gimpo-marathon.webp',
        },
        {
          title: '가좌2지구 착공식',
          category: '착공·개소식',
          year: '2026',
          image: '/images/portfolio/gajwa-groundbreaking.webp',
        },
        {
          title: '전국노래자랑 검단구편',
          category: '축제·상인회',
          year: '2026',
          image: '/images/portfolio/national-singing.webp',
        },
        {
          title: '(주)코반 창립 기념행사',
          category: '주민의 날·기념',
          year: '2026',
          image: '/images/portfolio/koban.webp',
        },
      ]}
    />
  ),
}

export const Carousel: Story = {
  render: () => (
    <CardCarousel
      items={['큰공 굴리기', '풍선 지네 릴레이', 'OX 퀴즈', '2인3각', '혼성 계주'].map((n, i) => ({
        key: n,
        node: (
          <MediaCard
            title={n}
            label="단체전"
            image={
              [
                '/images/games/big-ball.webp',
                '/images/games/centipede.webp',
                '/images/games/ox.webp',
                '/images/games/two-legs.webp',
                '/images/games/relay.webp',
              ][i]
            }
          />
        ),
      }))}
    />
  ),
}

export const Greeting: Story = {
  render: () => (
    <GreetingCard name="채희수" role="대표" quote="“A부터 Z까지, 모든 과정을 직접.”">
      <p>행사의 시작부터 마지막까지 함께하겠습니다.</p>
    </GreetingCard>
  ),
}

export const Faq: Story = {
  render: () => (
    <FaqList
      className="max-w-2xl"
      items={[
        { q: '장비만 렌탈할 수 있나요?', a: '네, 가능합니다.' },
        {
          q: '견적은 어떻게 받나요?',
          a: '빠른 견적 상담 또는 전화로 문의 주세요.',
        },
      ]}
    />
  ),
}

export const Testimonial: StoryObj = {
  name: 'TestimonialCard',
  render: () => (
    <div className="max-w-sm">
      <TestimonialCard
        quote="천막 설치부터 음향, 시상식 진행까지 한 업체에서 다 해주셔서 정말 편했습니다."
        organization="○○ 향우연합회"
        event="한마음 체육대회"
      />
    </div>
  ),
}

export const MapButtons: StoryObj = {
  name: 'MapActions',
  render: () => <MapActions address="인천 서구 검단로326번길 47-4 (왕길동 64-51)" />,
}

export const Value: StoryObj = {
  name: 'ValueCard',
  render: () => (
    <div className="bg-muted max-w-xs p-6">
      <ValueCard
        no="04"
        title="TRUST"
        label="경험과 책임감"
        description="현장 경험과 책임감으로 안정적인 행사를 만들어갑니다."
        icon={HandshakeIcon}
      />
    </div>
  ),
}
