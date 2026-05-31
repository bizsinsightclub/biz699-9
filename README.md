# AI 친화적 데이터셋과 기업 지능화 전략

> **지식 액체화(Knowledge Liquefaction)를 통한 의사결정 품질의 구조적 향상**
> KAIST Professional MBA · BIZ699 · **9조** · 2026
> 다크 모드 · **35 슬라이드** · Reveal.js v5 (정적 HTML/CSS/JS, 빌드 도구 없음)

![Title](./screenshots/title.png)

---

## 🔗 라이브

| | 주소 |
|---|---|
| **발표 슬라이드** | https://bizsinsightclub.github.io/biz699-9/ |
| **발표자 텔레프롬프터** | https://bizsinsightclub.github.io/biz699-9/prompter.html |

> 핵심 명제 — **AI 도입 성과를 결정하는 것은 모델이 아닌, 조직 지식의 구조화 수준이다.**
> 3단계 프레임워크: **진단(Diagnose) → 액체화(Liquefy) → 연결(Connect)**

---

## 🖼 미리보기

<table>
  <tr>
    <td width="50%"><img src="./screenshots/jcurve.png" alt="Cold Start J-curve"/><br/><sub><b>Cold Start — J-curve</b> · 임계점 이전은 비용, 이후는 가속</sub></td>
    <td width="50%"><img src="./screenshots/failure.png" alt="Failure Asymmetry 3x"/><br/><sub><b>Failure Asymmetry</b> · 실패 데이터의 학습 효율 3배</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="./screenshots/architecture.png" alt="4-layer architecture"/><br/><sub><b>연결 아키텍처</b> · 서가 → 사서 → 분석가 → 보고서</sub></td>
    <td width="50%"><img src="./screenshots/beforeafter.png" alt="Before / After"/><br/><sub><b>Before / After</b> · 개인 역량 의존 → 조직 학습 누적</sub></td>
  </tr>
</table>

---

## ▶ 발표 실행 (로컬)

1. `index.html` 을 **Chrome** 또는 **Edge** 로 연다.
2. `F` — 풀스크린 · `→ / ←` — 슬라이드 전환 · `S` — 발표자 노트 창 · `O / ESC` — 개요.

| 키 | 동작 | 키 | 동작 |
|---|---|---|---|
| `→` `Space` `PageDown` | 다음 | `F` | 풀스크린 |
| `←` `PageUp` | 이전 | `S` | 발표자 노트 창 |
| `O` `ESC` | 개요 모드 | `B` `.` | 화면 블랙아웃 |

---

## 🎤 발표자 텔레프롬프터 (`prompter.html`)

발표자 노트북에 띄우는 대형 대본 화면. **슬라이드 썸네일이 라이브로 동기화**되고, **프로젝터에 슬라이드를 자동 배치**하며, 세팅 중엔 **시작 가림막**으로 대본을 가린다.

<table>
  <tr>
    <td width="50%"><img src="./screenshots/prompter-standby.png" alt="Prompter standby"/><br/><sub><b>STANDBY</b> · 시작 전 대본을 가리는 스탠바이 화면</sub></td>
    <td width="50%"><img src="./screenshots/prompter-live.png" alt="Prompter live"/><br/><sub><b>LIVE</b> · 대형 대본 + 썸네일 + 페이스 타이머</sub></td>
  </tr>
</table>

**강연장 듀얼 스크린 — 30초 세팅**
1. `Win` + `P` → **확장(Extend)** (프롬프터 헤더가 `확장 ✓` 녹색이면 정상)
2. **연단 모니터**에서 `prompter.html` 열기 (대본은 자동으로 가려진 스탠바이 상태)
3. 헤더 **`프로젝터에 슬라이드 띄우기`** → 슬라이드가 프로젝터 화면 전체에 자동 배치
4. 발표 직전 **`▶ 발표 시작`** → 대본 노출 + 타이머 시작 + (안 열렸으면) 프로젝터 슬라이드 자동 켜짐
5. 이후 조작은 **프롬프터에서만** (`← →` / Space / 클릭) — 썸네일·프로젝터가 함께 이동
6. 발표 중 누가 다가오면 **`Esc`** → 즉시 재가림

> 모니터 자동 감지·배치는 **Window Management API**(Chrome/Edge 110+) 사용. 미지원/거부 시 일반 창으로 열리며 수동 드래그 + `F`.

---

## 📄 PDF 변환

**A. 자동 (권장)** — Playwright + 시스템 Edge, 1920×1080 비율 보존:
```bash
npm install        # 최초 1회 (Chromium 다운로드 없음)
npm run pdf        # → output/slides.pdf (35p, 1440×810pt = 16:9)
```

**B. 수동 (브라우저 인쇄)** — 주소창에 `index.html?print-pdf` → `Ctrl/Cmd + P`:
- 대상 **PDF로 저장** · 레이아웃 **가로** · 여백 **없음** · **배경 그래픽 켜기**(필수) · 머리글/바닥글 끄기.

> 다크 배경이 빠지면 99% "배경 그래픽" 미체크. 변환 로직·함정은 `HOWTO_reveal-to-pdf.md` 참조.

---

## 🎨 디자인 시스템 요약

- **다크 모드** — 배경 `#0E0E0E`, 텍스트 `#FFFFFF`, 슬라이드당 accent 1색
- **Accent** — 기본 **purple** `#A855F7`, Part II(반박, S6~S15) **amber** `#F97316`
- **타이포** — Pretendard(한글) + Inter(영문). display 160 / title 80 / section 56 / body 28
- **레이아웃** — TitleSlide · SectionDivider · SplitProfile(Pillar) · AgendaList · WorkflowSteps · ComparisonBeforeAfter · BigNumber · Quote · DataChart 외
- 단일 진실 공급원: `../design.md`

---

## 🧭 발표 흐름 (35 슬라이드 · 18분 목표)

| Part | 내용 | 슬라이드 |
|---|---|---|
| **I** | 문제 재정의 (성능 상한선 = 데이터 구조화) | S1–S5 |
| **II** ★ | 정중한 반박 — 5 Pillars (Cold Start · Survivorship · **Failure Asymmetry** · Capture · Selective) | S6–S15 |
| **III** | 진단 — 3축 · 친화도 매트릭스 · 우선순위 큐 | S16–S19 |
| **IV** | 액체화 — Solid→Liquid · 변환 대상 · 파이프라인 | S20–S24 |
| **V** | 연결 — 4-layer 아키텍처 · 차별 포인트 · 시나리오 · 누적 효과 · Before/After | S25–S30 |
| **VI** | 결론 — 기여 · 한계와 비용 · 5 Takeaways · "What gets liquefied, gets learned." | S31–S35 |

> 각 페이지 footer는 `XX / 35`. Part II 반박이 본 발표의 핵심 차별점.

---

## 📁 디렉토리

```
output/
├── index.html         # Reveal.js 진입점 (35 <section> + 발표자 노트)
├── prompter.html      # 발표자 텔레프롬프터 (슬라이드 동기화 · 듀얼 스크린)
├── README.md          # 이 문서
├── css/               # tokens · base · templates · components · print
├── js/config.js       # Reveal.js v5 초기화 (transition: none, 1920×1080)
└── screenshots/       # README 미리보기 이미지
```

---

*9조 · BIZ699 · v2.0 (35-slide 다크 모드) · 2026*
