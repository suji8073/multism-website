import { BentoCard, BentoGrid } from '@/components/atoms/bento-grid'
import { BlurFade } from '@/components/atoms/blur-fade'
import { Grid } from '@/components/atoms/layout'
import { MediaCard } from '@/components/molecules/media-card'
import { SectionHeader } from '@/components/molecules/section-header'
import { Section } from '@/components/layout/section'
import { BUSINESS, RENTAL } from '@/data/content'

function BusinessSection() {
  return (
    <>
      <Section id="business">
        <SectionHeader
          eyebrow="OUR BUSINESS"
          title="행사에 필요한 모든 것, 한 곳에서"
          description="관공서 · 기업 · 학교 · 지역 행사 · 단체 행사 · 체육대회 · 마라톤까지."
        />
        <BentoGrid>
          {BUSINESS.map((b) => (
            <BentoCard
              key={b.en}
              eyebrow={b.en}
              title={b.ko}
              description={b.desc}
              image={'image' in b ? b.image : undefined}
              span={b.span}
              href="#quote"
              cta="견적 문의"
            />
          ))}
        </BentoGrid>
      </Section>

      <Section id="rental" tone="muted">
        <SectionHeader
          eyebrow="EQUIPMENT RENTAL"
          title="직접 보유한 장비 · 렌탈 품목"
          description="대여 가격은 수량·기간에 따라 견적으로 안내드립니다."
        />
        <Grid cols="1-2-3" gap={6}>
          {RENTAL.map((r, i) => (
            <BlurFade key={r.category} inView delay={0.05 * i} className="h-full">
              <MediaCard title={r.category} image={r.image} ratio="16/9" tags={r.items} className="h-full" />
            </BlurFade>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export { BusinessSection }
