import { cssVars } from "@stackflow/plugin-basic-ui"; // Stackflow의 기본 UI 플러그인에서 CSS 변수 가져오기
import { style } from "@vanilla-extract/css"; // Vanilla Extract를 사용하여 스타일 정의

import { f } from "../styles"; // 프로젝트에서 사용되는 스타일 클래스 가져오기

// 전체 화면을 차지하는 래퍼 스타일 (레이아웃 구조 설정)
export const wrapper = style([f.posAbsFull, f.flexColumn, f.rootLineHeight]);

// 앱 바(상단 바) 왼쪽 스타일 (카테고리 제목 + 확장 아이콘)
export const appBarLeft = style([
  f.flex, // Flexbox 레이아웃 적용
  {
    fontSize: "1.125rem", // 글자 크기 설정
    fontWeight: 700, // 굵은 글꼴 적용
    marginLeft: ".5rem", // 왼쪽 여백 추가
  },
]);

// 앱 바(상단 바) 왼쪽 아이콘 스타일 (확장 아이콘 위치 조정)
export const appBarLeftIcon = style([
  f.flexAlignCenter, // Flexbox를 사용하여 아이콘을 중앙 정렬
  {
    marginLeft: ".5rem", // 왼쪽 여백 추가
  },
]);

// 앱 바(상단 바) 오른쪽 스타일 (검색, 설정, 알림 아이콘)
export const appBarRight = style([
  {
    display: "grid", // Grid 레이아웃 사용
    gridTemplateColumns: "1.5rem 1.5rem 1.5rem", // 3개의 아이콘을 동일한 크기로 배치
    gap: "1rem", // 아이콘 간 간격 설정
    marginRight: ".5rem", // 오른쪽 여백 추가
  },
]);

// 스크롤 가능한 콘텐츠 영역 스타일 (카테고리 목록을 포함)
export const scrollable = style([
  f.flex1, // Flexbox를 사용하여 가변적인 높이를 차지하도록 설정
  f.overflowScroll, // 스크롤 가능하도록 설정
  {
    // 상단 여백을 앱 바의 높이 + 안전 영역 패딩 값으로 설정하여 겹치지 않도록 함
    paddingTop: [
      `calc(${cssVars.appBar.height} + constant(safe-area-inset-top))`, // iOS에서 safe area 고려
      `calc(${cssVars.appBar.height} + env(safe-area-inset-top))`, // 최신 브라우저에서 safe area 고려
    ],
  },
]);

// 하단 네비게이션 바 스타일 (현재 추가 스타일 없음, 확장 가능)
export const bottom = style({});