import {
  ChatsCircleIcon,
  LightningIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  StackIcon,
  TruckIcon,
  WarehouseIcon,
  WrenchIcon,
} from '@phosphor-icons/react'
import { BlurFade } from '@/components/atoms/blur-fade'
import { Grid } from '@/components/atoms/layout'
import { FeatureItem } from '@/components/molecules/feature-item'
import { SectionHeader } from '@/components/molecules/section-header'
import { SplitFeature } from '@/components/molecules/split-feature'
import { StatItem } from '@/components/molecules/stat-item'
import { Section } from '@/components/layout/section'
import { COMPANY } from '@/constants/company'
import { CORE_VALUES, WHY } from '@/data/content'

const WHY_ICONS = [WarehouseIcon, PaintBrushIcon, WrenchIcon, ChatsCircleIcon, StackIcon]
const VALUE_ICONS = [TruckIcon, StackIcon, LightningIcon, ShieldCheckIcon]

function WhySection() {
  return (
    <>
      <Section id="why">
        <SectionHeader
          eyebrow="WHY MULTI SM"
          title={`“${COMPANY.slogan}”`}
          description="이것이 종합 행사·공연 전문기업 멀티SM산업의 가장 큰 경쟁력입니다."
        />
        <SplitFeature
          image="/images/rental/tent.webp"
          imageAlt="천막과 장비가 설치된 행사장"
          overlay={<StatItem value={3} suffix="년 연속" label="다시 맡겨주신 단체 다수" />}
          items={WHY.map((w, i) => ({ title: w.title, description: w.desc, icon: WHY_ICONS[i] }))}
        />
      </Section>

      <Section aria-label="핵심 가치" tone="primary" spacing="md">
        <SectionHeader inverse eyebrow="ONE EVENT, ONE DIRECT SYSTEM" title="행사를 대하는 네 가지 원칙" />
        <Grid cols="1-2-4" gap={4} reveal>
          {CORE_VALUES.map((v, i) => (
            <BlurFade key={v.key} inView delay={0.06 * i} className="h-full">
              <FeatureItem
                highlight
                icon={VALUE_ICONS[i]}
                title={v.key}
                description={v.desc}
                className="bg-white/5 border-white/15"
              />
            </BlurFade>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export { WhySection }
