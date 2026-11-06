import { BadgeList } from '@/components/atoms/badge'
import { CardCarousel } from '@/components/molecules/card-carousel'
import { MediaCard } from '@/components/molecules/media-card'
import { SectionHeader } from '@/components/molecules/section-header'
import { Section } from '@/components/layout/section'
import { PROGRAMS } from '@/data/content'

const OCCASIONS = ['체육대회', '운동회', '동문회 · 향우회', '가족 한마당', '기업 워크숍', '주민 화합행사']

function ProgramsSection() {
  return (
    <Section id="programs">
      <SectionHeader
        eyebrow="ENERGY SPORTS DAY"
        title="이런 프로그램도 직접 운영합니다"
        description="게임 도구 준비부터 진행, 점수 집계와 시상까지. 참가자 연령과 인원에 맞춰 프로그램을 골라 구성해 드립니다."
      />
      <BadgeList items={OCCASIONS} size="md" label="진행 가능한 행사" />
      <CardCarousel
        items={PROGRAMS.map((p) => ({
          key: p.name,
          node: (
            <MediaCard
              title={p.name}
              image={p.image}
              label={p.type}
              description={p.desc}
              ratio="4/3"
              className="h-full"
            />
          ),
        }))}
      />
    </Section>
  )
}

export { ProgramsSection }
