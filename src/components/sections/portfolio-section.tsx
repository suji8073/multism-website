import { ArrowSquareOutIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { BlurFade } from '@/components/atoms/blur-fade'
import { Button } from '@/components/atoms/button'
import { Grid, Stack } from '@/components/atoms/layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/atoms/tabs'
import { MasonryGallery } from '@/components/molecules/masonry-gallery'
import { PortfolioCard } from '@/components/molecules/portfolio-card'
import { SectionHeader } from '@/components/molecules/section-header'
import { Section } from '@/components/layout/section'
import { COMPANY } from '@/constants/company'
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '@/data/content'

const PAGE = 6
const FEATURED = PORTFOLIO.filter((p) => p.image).slice(0, 7)
const REST = PORTFOLIO.filter((p) => !FEATURED.includes(p))

function PortfolioSection() {
  const [visible, setVisible] = useState(PAGE)

  return (
    <Section id="portfolio" tone="muted">
      <SectionHeader
        eyebrow="EVENT PORTFOLIO"
        title="현장에서 증명한 행사 실적"
        action={
          <Button asChild variant="link">
            <a href={COMPANY.blog} target="_blank" rel="noreferrer">
              블로그에서 현장 사진 보기
              <ArrowSquareOutIcon />
            </a>
          </Button>
        }
      />
      <Tabs defaultValue="전체" onValueChange={() => setVisible(PAGE)}>
        <TabsList aria-label="행사 유형">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
        {PORTFOLIO_CATEGORIES.map((c) => {
          const isAll = c === '전체'
          const items = isAll ? REST : PORTFOLIO.filter((p) => p.category === c)
          return (
            <TabsContent key={c} value={c}>
              <Stack gap={10} align="center">
                {isAll && <MasonryGallery items={FEATURED} className="w-full" />}
                <Grid cols="1-2-3" gap={8} className="w-full">
                  {items.slice(0, visible).map((p, i) => (
                    <BlurFade key={p.title} inView delay={0.04 * (i % PAGE)}>
                      <PortfolioCard {...p} />
                    </BlurFade>
                  ))}
                </Grid>
                {items.length > visible && (
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="rounded-full"
                    onClick={() => setVisible((v) => v + PAGE)}
                  >
                    실적 더보기 ({items.length - visible}건)
                  </Button>
                )}
              </Stack>
            </TabsContent>
          )
        })}
      </Tabs>
    </Section>
  )
}

export { PortfolioSection }
