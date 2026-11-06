/**
 * 사이트 본문 데이터 — 회사소개서 · KTEP 체육대회 제안서 · 네이버 블로그 기준
 * 사진 경로(image)는 원본을 받으면 채운다.
 */
import type { PortfolioItem } from '@/components/molecules/portfolio-card'

export const STATS = [
  { value: 45, suffix: '건+', label: '2022–2026 진행 행사 (블로그 기록)' },
  { value: 3, suffix: '년 연속', label: '다시 맡겨주신 단체 다수' },
  { value: 8, suffix: '단계', label: '상담부터 철거까지 직접 진행' },
  { value: '관공서', label: '김포시 · 인천 서구청 · 대한적십자' },
]

export const HERO_SLIDES = [
  { image: '/images/hero.webp', caption: '제27회 교동 면민의 날 체육대회' },
  { image: '/images/portfolio/gimpo-marathon.webp', caption: '제14회 김포한강 마라톤대회' },
  { image: '/images/portfolio/national-singing.webp', caption: '전국노래자랑 검단구편' },
  { image: '/images/portfolio/koban.webp', caption: '(주)코반 창립 기념행사' },
  { image: '/images/portfolio/yeonhui-festival.webp', caption: '연희동 주민총회 & 드림축제' },
]

export const CORE_VALUES = [
  { key: 'DIRECT', desc: '무대, 트러스, 모든 물품을 직접 보유하고 직접 운영합니다.' },
  { key: 'ONE-STOP', desc: '기획부터 디자인 제작 · 설치 · 운영 · 철거까지 한 번에.' },
  { key: 'FAST', desc: '중간 과정을 줄여 빠르고 효율적으로 진행합니다.' },
  { key: 'TRUST', desc: '현장 경험과 책임감으로 안정적인 행사를 만들어갑니다.' },
]

export const WHY = [
  { no: '01', title: '직접 보유', desc: '행사에 필요한 다양한 장비와 물품을 직접 보유하여 안정적인 행사 진행이 가능합니다.' },
  { no: '02', title: '직접 제작', desc: '백드롭, 홍보현수막, 포스터, 배너, 인쇄물 등 행사에 필요한 디자인과 제작을 직접 진행합니다.' },
  { no: '03', title: '직접 설치 & 철거', desc: '무대·트러스·음향·몽골·캐노피 등 현장 설치부터 행사 종료 후 철거까지 직접 관리합니다.' },
  { no: '04', title: '빠른 커뮤니케이션', desc: '중간 업체 없이 담당자와 바로 소통하고 바로 결정합니다.' },
  { no: '05', title: 'ONE-STOP SERVICE', desc: '기획, 디자인, 장비, 운영, 철거를 한 회사에서 한 번에 해결합니다.' },
]

export const BUSINESS = [
  { en: 'EVENT AGENCY', ko: '각종 행사대행', desc: '관공서 · 기업 · 학교 · 지역 행사 · 단체 행사 · 체육대회 · 마라톤 등 기획 및 현장 운영', image: '/images/portfolio/gimpo-marathon.webp', span: 2 },
  { en: 'EVENT & PERFORMANCE', ko: '행사·공연 기획', desc: '행사의 목적과 콘셉트에 맞춘 행사·공연 기획 및 전체 운영', image: '/images/portfolio/koban.webp', span: 1 },
  { en: 'CEREMONY', ko: '기념식·착공식·개소식', desc: '기공식, 착공식, 준공식, 제막식, 현판식, 컷팅식, 개소식', image: '/images/portfolio/gajwa-groundbreaking.webp', span: 1 },
  { en: 'SPECIAL EFFECT', ko: '특수효과', desc: '오색폭죽 · 콜드스파크 · 포그머신 · 에어샷', image: '/images/rental/effect.webp', span: 1 },
  { en: 'ENTERTAINMENT', ko: '공연 및 아티스트 섭외', desc: '전문 MC, 밴드, 식전공연 등 출연진 섭외와 진행', image: '/images/portfolio/yeonhui-festival.webp', span: 1 },
  { en: 'EQUIPMENT RENTAL', ko: '행사장비 렌탈', desc: '무대 · 트러스 · 음향 · 몽골 · 캐노피천막, 테이블 · 의자 · 발전차 · 게임도구', image: '/images/rental/stage.webp', span: 1 },
  { en: 'EVENT STRUCTURE', ko: '에어아치·애드벌룬', desc: '에어샷 · 에어아치 · 애드벌룬으로 행사장 분위기 연출', image: '/images/portfolio/blog-223514313539.jpg', span: 1 },
  { en: 'GOODS & PRINT', ko: '단체복·기념품·인쇄물', desc: '단체복, 기념품, 상패·트로피, 수건, 현수막·유포지, 인쇄물·판촉물', image: '/images/rental/print.webp', span: 1 },
] as const

export const PROCESS = [
  { no: '01', en: 'CONSULTING', ko: '상담', desc: '행사 목적 및 일정, 현장 미팅' },
  { no: '02', en: 'PLANNING', ko: '기획', desc: '행사 콘셉트 및 전체 기획' },
  { no: '03', en: 'DESIGN', ko: '디자인', desc: '백드롭 · 현수막 · 포스터 · 인쇄물 디자인' },
  { no: '04', en: 'PRODUCTION', ko: '제작', desc: '행사에 필요한 물품 및 제작물 준비' },
  { no: '05', en: 'EQUIPMENT', ko: '장비 준비', desc: '무대 · 트러스 · 음향 · 캐노피 등' },
  { no: '06', en: 'INSTALLATION', ko: '설치', desc: '행사장 현장 설치 및 세팅' },
  { no: '07', en: 'OPERATION', ko: '운영', desc: '행사 진행 및 현장 운영' },
  { no: '08', en: 'DISMANTLING', ko: '철거', desc: '행사 종료 후 철거 및 정리' },
]

export const RENTAL = [
  { category: '무대 · 구조물', image: '/images/rental/stage.webp', items: ['행사 무대', '트러스', '백드롭 프레임', '에어아치', '애드벌룬'] },
  { category: '음향 · 전력', image: '/images/rental/sound.webp', items: ['음향 시스템', '무선 마이크', '발전차', '발전기'] },
  { category: '천막 · 집기', image: '/images/rental/tent.webp', items: ['몽골텐트', '캐노피천막', '행사용 테이블', '의자'] },
  { category: '특수효과', image: '/images/rental/effect.webp', items: ['오색폭죽', '콜드스파크', '포그머신', '에어샷'] },
  { category: '체육대회 용품', image: '/images/rental/games.webp', items: ['게임도구 일체', '팀 조끼', '풋살골대', '시상대'] },
  { category: '제작물 · 기념품', image: '/images/rental/print.webp', items: ['현수막 · 유포지', '포스터 · 배너', '상패 · 트로피', '단체복 · 수건'] },
]

export const PORTFOLIO_CATEGORIES = ['전체', '체육대회', '축제·상인회', '주민의 날·기념', '착공·개소식', '마라톤·걷기'] as const

/** 블로그 게시글 기준 행사 실적 (최신순) */
const ALL_PORTFOLIO: PortfolioItem[] = [
  { year: '2026', category: '주민의 날·기념', title: '제27회 교동 면민의 날 기념 체육대회', image: '/images/portfolio/gyodong.webp', href: 'https://blog.naver.com/mult8089/224398770212' },
  { year: '2026', category: '마라톤·걷기', title: '제14회 김포한강 마라톤대회', image: '/images/portfolio/gimpo-marathon.webp', href: 'https://blog.naver.com/mult8089/224247592661' },
  { year: '2026', category: '착공·개소식', title: '가좌2지구 우수저류시설 설치사업 착공식', image: '/images/portfolio/gajwa-groundbreaking.webp', href: 'https://blog.naver.com/mult8089/224243882850' },
  { year: '2026', category: '축제·상인회', title: '전국노래자랑 검단구편', image: '/images/portfolio/national-singing.webp', href: 'https://blog.naver.com/mult8089' },
  { year: '2026', category: '주민의 날·기념', title: '(주)코반 창립 기념행사', image: '/images/portfolio/koban.webp', href: 'https://blog.naver.com/mult8089' },
  { year: '2026', category: '축제·상인회', title: '2026 제4회 강일지동 축제', repeat: '2년 연속', image: '/images/portfolio/blog-224398734502.jpg', href: 'https://blog.naver.com/mult8089/224398734502' },
  { year: '2026', category: '체육대회', title: '김포 장애인 어울림 체육대회', href: 'https://blog.naver.com/mult8089' },
  { year: '2026', category: '체육대회', title: '검단초 동문회 체육대회', href: 'https://blog.naver.com/mult8089' },
  { year: '2026', category: '주민의 날·기념', title: '고양창릉 복합 안전다짐대회', href: 'https://blog.naver.com/mult8089' },
  { year: '2026', category: '마라톤·걷기', title: '김포시 장애인 거북이 마라톤', repeat: '재의뢰', href: 'https://blog.naver.com/mult8089' },
  { year: '2025', category: '체육대회', title: '제2회 김포호남기업인협의회 한마음 가족 체육대회', image: '/images/portfolio/honam-sports.webp', repeat: '2년 연속', href: 'https://blog.naver.com/mult8089/224244007938' },
  { year: '2025', category: '주민의 날·기념', title: '제2회 안전한 김포 재난대응 훈련 (대한적십자)', repeat: '2년 연속', image: '/images/portfolio/blog-224222168785.jpg', href: 'https://blog.naver.com/mult8089/224222168785' },
  { year: '2025', category: '축제·상인회', title: '청마로상인회 달빛야행', image: '/images/portfolio/cheongmaro-night.webp', repeat: '2년 연속', href: 'https://blog.naver.com/mult8089/224211654876' },
  { year: '2025', category: '체육대회', title: '주민대표와 SL공사가 함께하는 한마음체육행사', repeat: '재의뢰', image: '/images/portfolio/blog-224198228641.jpg', href: 'https://blog.naver.com/mult8089/224198228641' },
  { year: '2025', category: '축제·상인회', title: '제1회 푸른솔빛 봄밤 푸드&버스킹 페스티벌', image: '/images/portfolio/pureunsol-festival.webp', href: 'https://blog.naver.com/mult8089/224198122043' },
  { year: '2025', category: '체육대회', title: '김포충청향우연합회 한마음체육대회', repeat: '3년 연속', image: '/images/portfolio/blog-224243970637.jpg', href: 'https://blog.naver.com/mult8089/224243970637' },
  { year: '2025', category: '체육대회', title: '제35회 김포초등학교 총동문 체육대회', image: '/images/portfolio/blog-224243910517.jpg', href: 'https://blog.naver.com/mult8089/224243910517' },
  { year: '2025', category: '주민의 날·기념', title: '오류왕길동 경로위안잔치', repeat: '3년 연속', image: '/images/portfolio/blog-224211671503.jpg', href: 'https://blog.naver.com/mult8089/224211671503' },
  { year: '2025', category: '주민의 날·기념', title: '제32회 검단주민의날 기념식 및 주민화합 체육대회', image: '/images/portfolio/blog-224199246744.jpg', href: 'https://blog.naver.com/mult8089/224199246744' },
  { year: '2025', category: '체육대회', title: '제16회 김포시 장애인 생활체육대회', repeat: '2년 연속', image: '/images/portfolio/blog-224198292319.jpg', href: 'https://blog.naver.com/mult8089/224198292319' },
  { year: '2025', category: '체육대회', title: '제16회 검단5단체 향우연합회 춘계체육대회', image: '/images/portfolio/blog-223979740477.jpg', href: 'https://blog.naver.com/mult8089/223979740477' },
  { year: '2024', category: '축제·상인회', title: '연희동 주민총회 & 연희드림축제', image: '/images/portfolio/yeonhui-festival.webp', repeat: '2년 연속', href: 'https://blog.naver.com/mult8089/223775127969' },
  { year: '2024', category: '축제·상인회', title: '검단농협 제2회 로컬푸드축제', image: '/images/portfolio/blog-223799302276.jpg', href: 'https://blog.naver.com/mult8089/223799302276' },
  { year: '2024', category: '축제·상인회', title: '신석로상인회 주민화합 노래자랑', image: '/images/portfolio/blog-223774975190.jpg', href: 'https://blog.naver.com/mult8089/223774975190' },
  { year: '2024', category: '마라톤·걷기', title: '제2회 풍무동 계양천 힐링건강 걷기대회', image: '/images/portfolio/blog-223514313539.jpg', href: 'https://blog.naver.com/mult8089/223514313539' },
  { year: '2024', category: '체육대회', title: '제2회 오류왕길동 한마음체육대회', image: '/images/portfolio/blog-223509445007.jpg', href: 'https://blog.naver.com/mult8089/223509445007' },
  { year: '2024', category: '축제·상인회', title: '제3회 푸른솔빛 주민어울림축제', image: '/images/portfolio/blog-223502357558.jpg', href: 'https://blog.naver.com/mult8089/223502357558' },
  { year: '2023', category: '마라톤·걷기', title: '제1회 김포시 육상연맹 회장배 클럽 마라톤대회', image: '/images/portfolio/blog-223323105481.jpg', href: 'https://blog.naver.com/mult8089/223323105481' },
  { year: '2023', category: '주민의 날·기념', title: '제9회 통진읍민의 날 통하는 축제', image: '/images/portfolio/blog-223323041879.jpg', href: 'https://blog.naver.com/mult8089/223323041879' },
  { year: '2023', category: '체육대회', title: '제5회 김포경찰서 생활안전연합회 한마음 체육대회', image: '/images/portfolio/blog-223317624654.jpg', href: 'https://blog.naver.com/mult8089/223317624654' },
  { year: '2023', category: '마라톤·걷기', title: '제2회 김포시장애인 어울림 트레킹대회', image: '/images/portfolio/blog-223317596303.jpg', href: 'https://blog.naver.com/mult8089/223317596303' },
  { year: '2023', category: '착공·개소식', title: '탑동성당 관광자원화사업 준공식', image: '/images/portfolio/blog-223317277172.jpg', href: 'https://blog.naver.com/mult8089/223317277172' },
  { year: '2023', category: '체육대회', title: '경기도 파라스포츠인 한마음대회 in 김포', image: '/images/portfolio/blog-223323092786.jpg', href: 'https://blog.naver.com/mult8089/223323092786' },
  { year: '2023', category: '축제·상인회', title: '석남3동 주민문화축제 및 노래자랑', image: '/images/portfolio/blog-223323124132.jpg', href: 'https://blog.naver.com/mult8089/223323124132' },
  { year: '2023', category: '착공·개소식', title: '구립 당하동 경로당 개소식', image: '/images/portfolio/blog-223039115311.jpg', href: 'https://blog.naver.com/mult8089/223039115311' },
  { year: '2023', category: '주민의 날·기념', title: '제30회 검단주민의 날 기념식 및 주민화합체육대회', image: '/images/portfolio/blog-223096362382.jpg', href: 'https://blog.naver.com/mult8089/223096362382' },
]

/** 블로그 후기 글이 있는 실적만 노출 (글이 없는 건은 글이 올라오면 href를 채워 다시 노출) */
export const PORTFOLIO = ALL_PORTFOLIO.filter((p) => p.href?.includes('/mult8089/'))

/** 레크리에이션 · 팀 대항 게임 프로그램 */
export const PROGRAM_TYPES = ['전체', '단체전', '협동', '스피드', '두뇌·순발력'] as const

export const PROGRAMS = [
  { name: '큰공 굴리기', type: '단체전', desc: '대형 공을 팀이 함께 굴려 반환점을 도는 대표 종목', image: '/images/games/big-ball.webp' },
  { name: '풍선 지네 릴레이', type: '협동', desc: '대형 풍선 지네에 올라타 한 몸처럼 달리는 이어달리기', image: '/images/games/centipede.webp' },
  { name: '풍선 탑쌓기', type: '협동', desc: '대형 블록을 쌓아 가장 높은 탑을 만드는 팀 미션', image: '/images/games/tower.webp' },
  { name: 'OX 퀴즈', type: '두뇌·순발력', desc: '전원이 참여해 마지막 한 명까지 살아남는 퀴즈', image: '/images/games/ox.webp' },
  { name: '2인3각', type: '협동', desc: '발을 묶은 두 사람이 호흡을 맞춰 달리는 경기', image: '/images/games/two-legs.webp' },
  { name: '손에 손잡고', type: '협동', desc: '손을 잡은 채 훌라후프를 통과시키는 팀워크 게임', image: '/images/games/hands.webp' },
  { name: '혼성 계주', type: '스피드', desc: '남녀가 번갈아 달리는 체육대회의 하이라이트', image: '/images/games/relay.webp' },
  { name: '무궁화 꽃이 피었습니다', type: '두뇌·순발력', desc: '진행자의 구령에 맞춰 멈추고 달리는 추억의 놀이', image: '/images/games/mugunghwa.webp' },
  { name: '신발 던지기', type: '두뇌·순발력', desc: '과녁 매트에 신발을 던져 점수를 겨루는 이색 종목', image: '/images/games/shoe.webp' },
  { name: '족구', type: '단체전', desc: '예선부터 결승까지 토너먼트로 운영하는 인기 종목', image: '/images/games/jokgu.webp' },
] as const

export const CLIENTS = [
  '김포시',
  '인천 서구청',
  '대한적십자사',
  '김포상공회의소',
  '김포대학교',
  '검단농협',
  '김포경찰서 생활안전연합회',
  'SL공사',
  '(주)코반',
  '김포육상연맹',
  '각 동 주민자치회 · 상인회',
]

/** 대표 인사말 — 회사소개서 문구 기반. TODO: 대표님 확인 후 문구·사진 교체 */
export const GREETING = {
  name: '채희수',
  role: '대표',
  image: undefined as string | undefined,
  quote: '“A부터 Z까지, 모든 과정을 직접.” 그것이 저희가 행사를 책임지는 방식입니다.',
  paragraphs: [
    '멀티에스엠산업은 관공서, 기업, 학교, 지역·단체 행사와 체육대회까지 행사의 기획부터 현장 운영까지 체계적으로 진행해 왔습니다.',
    '행사에 필요한 장비와 물품을 직접 보유하고, 디자인·제작부터 설치·철거까지 직접 진행하여 불필요한 중간 과정을 줄였습니다. 그래서 더 빠르고, 더 정확하고, 끝까지 책임질 수 있습니다.',
    '행사의 시작부터 마지막까지, 멀티에스엠산업이 함께하겠습니다.',
  ],
}

/** 자주 묻는 질문 — TODO: 최소 인원·예약 시점 등은 대표님 확인 필요 */
export const FAQ = [
  {
    q: '장비만 따로 렌탈할 수 있나요?',
    a: '네. 무대·트러스·음향·몽골·캐노피천막, 테이블·의자, 발전차, 게임도구 등 보유 장비를 행사 대행 없이 렌탈만 하실 수 있습니다. 설치와 철거도 함께 맡기실 수 있습니다.',
  },
  {
    q: '견적은 어떻게 받나요?',
    a: '페이지 상단의 빠른 견적 상담에 행사 유형과 연락처를 남겨주시거나, 대표번호(010-4225-9916)로 전화 주시면 담당자가 바로 연락드립니다. 필요하면 현장 미팅 후 견적을 안내드립니다.',
  },
  {
    q: '현수막이나 단체복도 같이 맡길 수 있나요?',
    a: '네. 백드롭, 홍보현수막, 포스터, 배너, 인쇄물 디자인과 제작부터 단체복, 상패·트로피, 기념품까지 함께 준비해 드립니다.',
  },
  {
    q: '체육대회 진행 MC나 공연팀도 섭외해 주나요?',
    a: '네. 행사 성격에 맞춰 전문 MC, 밴드, 식전공연 등 출연진 섭외와 진행을 함께 도와드립니다.',
  },
  {
    q: '어느 지역까지 가능한가요?',
    a: '인천 서구(검단)와 김포를 중심으로 수도권 서북부 지역 행사를 주로 진행하고 있습니다. 그 밖의 지역도 문의 주시면 안내드립니다.',
  },
]
