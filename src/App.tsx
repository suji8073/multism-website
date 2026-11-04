import { Toaster } from '@/components/atoms/sonner'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { MobileBottomBar } from '@/components/layout/mobile-bottom-bar'
import { UtilityBar } from '@/components/layout/utility-bar'

function App() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main id="top" className="text-muted-foreground flex min-h-[60vh] items-center justify-center text-sm">
        섹션은 다음 단계에서 구현합니다
      </main>
      <Footer />
      <MobileBottomBar />
      <Toaster />
    </>
  )
}

export default App
