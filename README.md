<div align="center">

# 🎪 멀티SM산업

**행사 대행·무대·천막 렌탈 회사 홈페이지**<br/>
행사·공연 기획부터 무대·음향·천막 렌탈, 설치·철거까지 한 회사가 직접 책임집니다.

<br/>

<img src="public/og-image.jpg" alt="멀티SM산업 — 행사의 처음부터 끝까지, 한 회사가 책임집니다" width="100%" />

<br/>

[홈페이지 바로가기](https://multism-website.vercel.app) · [네이버 블로그](https://blog.naver.com/mult8089)

<br/>

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook_9-FF4785?style=flat-square&logo=storybook&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

<br/>

<table>
  <tr><td>🌐 <b>배포 주소</b></td><td><a href="https://multism-website.vercel.app">multism-website.vercel.app</a></td></tr>
  <tr><td>📝 <b>블로그</b></td><td><a href="https://blog.naver.com/mult8089">blog.naver.com/mult8089</a> — 행사 실적 사진·후기의 출처</td></tr>
  <tr><td>📄 <b>원본 자료</b></td><td>회사소개서 (PDF · PPTX)</td></tr>
  <tr><td>📞 <b>문의</b></td><td>대표 010-4225-9916 · <a href="mailto:mult8089@naver.com">mult8089@naver.com</a></td></tr>
</table>

## 기술 스택

- React 19 + TypeScript, Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- shadcn/ui 방식 컴포넌트 (Radix UI · class-variance-authority · tailwind-merge)
- Magic UI 효과 컴포넌트 (`motion`), Embla Carousel
- 아이콘: Phosphor Icons
- Storybook 9
- 배포: Vercel

## 실행

```bash
npm install
npm run dev              # 개발 서버
npm run build            # 프로덕션 빌드 (dist/)
npm run preview          # 빌드 결과 미리보기
npm run lint
npm run storybook        # 컴포넌트 문서
```

## 폴더 구조

```
src/
├── components/
│   ├── atoms/       # 버튼·배지·탭·글자·레이아웃 등 기본 컴포넌트 (+ 스토리)
│   ├── molecules/   # 카드·폼·타임라인 등 조합 컴포넌트 (+ 스토리)
│   ├── layout/      # 헤더·푸터·섹션·히어로 등 페이지 골격
│   └── sections/    # 실제 페이지 섹션 (공통 컴포넌트만 조합)
├── constants/company.ts   # 회사 정보 (연락처·주소·메뉴)
├── data/content.ts        # 페이지 문구·실적·프로그램·FAQ 등 콘텐츠
├── hooks/                 # 스크롤 위치에 따른 메뉴 활성화 등
└── index.css              # 디자인 토큰 (색·글자 크기·애니메이션)
public/images/             # 히어로·실적·렌탈·게임 사진
```

## 작업 규칙

- **섹션은 공통 컴포넌트만 사용합니다.** 새 UI가 필요하면 `atoms`나 `molecules`에 먼저 만들고 스토리를 추가합니다.
- **글자 크기**는 토큰 `text-caption`(13px) · `text-body`(15px) · `text-lead`(17px)를 씁니다. 새 크기 이름을 만들면 `src/lib/utils.ts`의 tailwind-merge 설정에도 등록해야 글자색 클래스가 지워지지 않습니다.
- **색**은 `index.css`의 토큰을 씁니다. 메인 네이비 `#0F2A55`, 포인트 블루 `#2F86D4`이고, 로고 불꽃 색(`--logo-orange`, `--logo-yellow`)은 로고와 라벨 장식에만 씁니다.
- 커밋 메시지는 한글로, 관심사별로 나눕니다.

## 콘텐츠 수정

대부분의 문구는 `src/data/content.ts`, 연락처는 `src/constants/company.ts`에서 고칩니다.

- **행사 실적:** `ALL_PORTFOLIO`에 추가합니다. 블로그 글 주소(`href`)가 있는 실적만 화면에 보입니다.
- **고객 후기:** 지금은 예시 문구라 개발 서버에서만 보입니다. 실제 후기로 바꾼 뒤 `TESTIMONIALS_ARE_SAMPLE`을 `false`로 바꾸면 공개됩니다.
- **대표 인사말:** 대표님 확인 전 초안입니다. 사진은 `GREETING.image`에 경로를 넣으면 나타납니다.

## 견적 요청 메일 (Web3Forms)

히어로의 빠른 견적 폼은 [Web3Forms](https://web3forms.com)로 회사 메일에 바로 전송됩니다. 별도 서버나 DB는 없고, 요청 내용은 메일로만 남습니다.

- **전송 코드:** `src/lib/send-quote.ts`가 `https://api.web3forms.com/submit`으로 행사 유형·단체명·연락처를 보냅니다.
- **메일 제목:** `[홈페이지 견적 요청] 행사유형 · 단체명`
- **접근 키:** 환경 변수 `VITE_WEB3FORMS_KEY`에 넣습니다.
  - 로컬: `.env.local` (git에 올라가지 않음)
  - 배포: Vercel 프로젝트 환경 변수 (Production·Preview·Development)
- **받는 메일 바꾸기:** Web3Forms에서 새 메일로 키를 발급받아 위 두 곳의 값을 바꾸고 다시 배포합니다.
- 전송에 실패하면 화면에 전화 상담 안내가 뜹니다. 메일이 안 오면 스팸함과 Web3Forms 대시보드를 확인하세요.

## 검색 노출 (SEO)

- **`public/robots.txt`:** 검색엔진 수집을 허용하고 사이트맵 위치를 알립니다.
- **`public/sitemap.xml`:** 메인 페이지 주소입니다. 내용을 크게 바꾸면 `lastmod` 날짜를 고칩니다.
- **`index.html`:**
  - 검색 결과 설명(`description`)
  - 링크 공유 미리보기(OG·Twitter, 이미지는 `public/og-image.jpg`)
  - 업체 정보 구조화 데이터(`LocalBusiness` JSON-LD)
- 연락처나 주소가 바뀌면 `src/constants/company.ts`와 함께 `index.html`의 구조화 데이터, OG 이미지도 고쳐야 합니다.
- 구글 서치 콘솔과 네이버 서치어드바이저에는 URL 접두어 방식으로 등록하고, HTML 태그로 소유권을 확인합니다.
