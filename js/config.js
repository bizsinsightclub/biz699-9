/* ==========================================================================
   config.js — Reveal.js v5 초기화 (v2.0)
   design.md §C.3 명세 그대로 적용. 변경 시 design.md 부터 수정.
   Rule R-1 준수: CSS 측 transform/opacity 오버라이드 없이 transition: 'none' 만 사용.
   ========================================================================== */

Reveal.initialize({
  // 캔버스
  width: 1920,
  height: 1080,
  margin: 0,
  minScale: 0.2,
  maxScale: 1.5,

  // UI
  controls: true,
  progress: true,
  slideNumber: false,           // 자체 footer 마크업 사용
  hash: true,

  // 애니메이션 — design_ref §9 "화려한 트랜지션 금지"
  transition: 'none',
  backgroundTransition: 'none',

  // PDF 변환
  pdfMaxPagesPerSlide: 1,
  pdfSeparateFragments: false,

  // 키보드·개요
  keyboard: true,
  overview: true,

  // 플러그인
  plugins: [ RevealHighlight, RevealNotes ]
});
