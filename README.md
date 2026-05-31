# 9조 발표자료 (v2.0) — 실행 가이드

> **AI 친화적 데이터셋과 기업 지능화 전략 — 지식 액체화를 통한 의사결정 품질의 구조적 향상**
> KAIST Professional MBA · BIZ699 · 9조
> 33 슬라이드 · 다크 모드 · Reveal.js v5

---

## 1. 발표자료 실행

1. 본 디렉토리(`output/`)의 `index.html` 을 **Chrome** 또는 **Edge**로 연다.
2. `F` 키로 풀스크린 진입.
3. `→` / `←` 키로 슬라이드 전환.
4. `S` 키로 발표자 노트 창 (별도 창에 노트 + 다음 슬라이드 미리보기).
5. `O` 또는 `ESC` 로 개요 모드.

### 키보드 조작

| 키 | 동작 |
|---|---|
| `→` / `Space` / `PageDown` | 다음 슬라이드 |
| `←` / `PageUp` | 이전 슬라이드 |
| `F` | 풀스크린 토글 |
| `S` | 발표자 노트 창 열기 |
| `O` 또는 `ESC` | 개요(Overview) 모드 |
| `B` 또는 `.` | 화면 블랙아웃 |
| `?` | 단축키 도움말 |

---

## 2. PDF 변환

### Chrome 권장 절차

1. Chrome 주소창에 다음 URL 입력 (절대 경로 + `?print-pdf`):
   ```
   file:///C:/pjt/biz699-9jo/output/index.html?print-pdf
   ```
2. 페이지 로드 후 `Ctrl + P` (Cmd+P).
3. 인쇄 다이얼로그 설정:
   - **대상**: PDF로 저장
   - **레이아웃**: 가로 (Landscape)
   - **용지 크기**: A4 또는 Letter
   - **여백**: **없음** (필수)
   - **고급 → 배경 그래픽**: **반드시 활성화** (다크 배경·카드·gradient 보존)
   - **머리글 및 바닥글**: 비활성화
4. "저장" → `slides.pdf` 로 저장 (권장 위치: `output/slides.pdf`).

### PDF 검수 체크리스트

- [ ] 33 슬라이드 = 33 페이지 (1:1 매핑)
- [ ] 다크 배경(`#0E0E0E`) 보존
- [ ] Part II (S6~S15) 의 amber accent (`#F97316`) 보존
- [ ] 한글이 Pretendard 로 렌더링됨
- [ ] 페이지 번호 형식 `XX / 33`
- [ ] PDF 파일 크기 5MB 이하

> 다크 배경이 빠지면 99% "배경 그래픽" 옵션 미활성화. 인쇄 다이얼로그 → 고급 → 활성화.

---

## 3. 자동 PDF 생성 (선택)

### 옵션 A. decktape

```bash
npm install -g decktape
decktape reveal "file:///$(pwd)/output/index.html?print-pdf" output/slides.pdf \
  --size=1920x1080 \
  --pause=300
```

### 옵션 B. Playwright

```bash
npm i -D playwright
npx playwright install chromium
```

```javascript
// scripts/build-pdf.mjs
import { chromium } from 'playwright';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

const url = pathToFileURL(resolve('output/index.html')).href + '?print-pdf';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.pdf({
  path: 'output/slides.pdf',
  width: '1920px',
  height: '1080px',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});
await browser.close();
```

---

## 4. 디렉토리 구조

```
output/
├── index.html              # Reveal.js 진입점, 33 <section>
├── README.md               # 이 파일
├── css/
│   ├── tokens.css          # design_ref.md §2~§4 토큰 정의
│   ├── base.css            # 슬라이드 공통, R-1 · R-2 준수
│   ├── templates.css       # 10 레이아웃 + 본 발표 특화 4종
│   ├── components.css      # Card · Eyebrow · NumberBadge · J-curve SVG 등
│   └── print.css           # PDF 변환 전용
├── js/
│   └── config.js           # Reveal.js v5 초기화
└── slides.pdf              # (수동 또는 자동 생성)
```

---

## 5. 디자인 시스템 요약

- **다크 모드**: 배경 `#0E0E0E`, 텍스트 `#FFFFFF`
- **타이포그래피**: Pretendard (한글) + Inter (영문). display 160 / title 80 / section 56 / body 28
- **Accent 색**:
  - 기본 (Part I, III, IV, V, VI): **purple** `#A855F7`
  - Part II 반박 슬라이드 (S6~S15): **amber** `#F97316`
- **레이아웃 10종 + 특화 4종**: design_ref.md §6 + 본 발표 PillarCard / RebuttalCallout / LimitsTriple / TakeawayList

> 디자인 결정 단일 진실 공급원: `../design.md` (= `../design_ref.md` 채택 + 본 발표 특화).

---

## 6. 발표 흐름 (33 슬라이드, 18분 목표)

| Part | 슬라이드 | 시간 합계 |
|---|---|---|
| I — 문제 재정의 | S1~S5 (5장) | ~3분 |
| II — 정중한 반박 ★ | S6~S15 (10장) | ~7분 |
| III — 진단 | S16~S19 (4장) | ~2분 |
| IV — 액체화 | S20~S24 (5장) | ~3분 |
| V — 연결 | S25~S28 (4장) | ~2분 |
| VI — 결론 | S29~S33 (5장) | ~2분 |
| **합계** | **33 슬라이드** | **약 18~22분** |

> Section Divider 6장과 Hook(S3) 을 짧게(10~15초) 운영 시 18분 가능.

---

## 7. 트러블슈팅

| 증상 | 원인 | 해결 |
|---|---|---|
| 슬라이드가 안 바뀜 | (R-1 위반 가능) — base.css 의 `section.future/.past/.present` transform `!important` 오버라이드 확인 | base.css 에 해당 룰이 0건이어야 함. 있으면 제거. |
| 슬라이드 외곽에 그라데이션 | Reveal.js 기본 viewport 그라데이션 노출 (R-2 위반) | base.css 최상단 `html, body, .reveal-viewport, .reveal { background: var(--color-bg-main) !important; }` 확인 |
| 한글이 네모 박스 | Pretendard CDN 로드 실패 | 인터넷 연결 확인. 오프라인 시 시스템 Malgun Gothic 로 fallback |
| PDF 액센트 색이 안 나옴 | "배경 그래픽" 미활성화 | 인쇄 옵션 → 고급 → 배경 그래픽 체크 |
| PDF 한 슬라이드 두 페이지 | 여백 설정 오류 | 인쇄 옵션 → 여백 "없음" |
| `S` 키로 노트 안 열림 | 팝업 차단 | 브라우저 팝업 허용 |

---

## 8. 메타 거버넌스

본 발표자료는 다음 4 파일을 단일 진실 공급원으로 운영:

- `../CLAUDE.md` — 마스터 지시서 (구조·룰·실행 명령)
- `../design.md` — 디자인 시스템 (= design_ref.md 채택 + 본 발표 특화)
- `../lesson_learned.md` — 사용자 피드백·실수 누적 기록
- `../todo.md` — 진행 트래킹

작업 변경 시 위 4 파일을 모두 갱신한다 (Rule R-5).

---

*v2.0 / 2026-05-03 / 9조*
*v1.0 (16-slide 화이트 미니멀) 폐기 — 사유: lesson_learned.md 참조*
