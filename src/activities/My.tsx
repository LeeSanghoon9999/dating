import { AppScreen } from "@stackflow/plugin-basic-ui"; // Stackflow의 기본 UI 플러그인에서 AppScreen 가져오기
import { useActivityPreloadRef } from "@stackflow/plugin-preload"; // Stackflow의 프리로드 기능 사용
import { ActivityComponentType } from "@stackflow/react"; // Stackflow의 ActivityComponentType 타입 가져오기
import React from "react"; // React 라이브러리 가져오기

import IconBell from "../assets/IconBell"; // 알림 아이콘 컴포넌트 가져오기
import IconExpandMore from "../assets/IconExpandMore"; // 확장(더보기) 아이콘 컴포넌트 가져오기
import IconSearch from "../assets/IconSearch"; // 검색 아이콘 컴포넌트 가져오기
import IconSettings from "../assets/IconSettings"; // 설정 아이콘 컴포넌트 가져오기
import BottomTab from "../components/BottomTab"; // 하단 탭 네비게이션 컴포넌트 가져오기
import MyCard from "../components/FeedCard"; // 피드 카드 컴포넌트 가져오기
import { readPreloadData } from "../lib/readPreloadData"; // 프리로드된 데이터 읽는 함수 가져오기
import * as css from "./My.css";

// Map 화면 컴포넌트 정의
const My: ActivityComponentType = () => {
  // 프리로드된 데이터 참조 생성
  const preloadRef = useActivityPreloadRef<{ key: string }>();
  // 프리로드된 데이터를 가져와서 저장
  const data = readPreloadData<Queries.MainTemplateQueryQuery>(preloadRef);

  // 앱 바(상단 바) 왼쪽 영역 (앱 이름 + 확장 아이콘)
  const appBarLeft = () => (
    <div className={css.appBarLeft}>
      Map {/* 맵 제목 */}
      <div className={css.appBarLeftIcon}>
        <IconExpandMore /> {/* 확장 아이콘 */}
      </div>
    </div>
  );

  // 앱 바(상단 바) 오른쪽 영역 (검색, 설정, 알림 아이콘)
  const appBarRight = () => (
    <div className={css.appBarRight}>
      <IconSearch /> {/* 검색 아이콘 */}
      <IconSettings /> {/* 설정 아이콘 */}
      <IconBell /> {/* 알림 아이콘 */}
    </div>
  );

  return (
    <AppScreen
      appBar={{
        appendLeft: appBarLeft, // 앱 바 왼쪽 설정
        appendRight: appBarRight, // 앱 바 오른쪽 설정
      }}
    >
      <div className={css.wrapper}>
        {/* 스크롤 가능한 영역 (피드 목록 표시) */}
        <div className={css.scrollable}>
      {/* ✅ 데이터가 없을 경우 기본 메시지 출력 */}
      {data.allMarkdownRemark?.nodes?.length > 0 ? (
        data.allMarkdownRemark.nodes.map((node) => (
          <MyCard
            key={String(node.frontmatter?.id ?? "default-id")} // ✅ 기본 ID 설정
            articleId={String(node.frontmatter?.id ?? "default-id")}
            daysAgo={node.frontmatter?.daysAgo ?? 0}
            price={node.frontmatter?.price ?? 0}
            region={node.frontmatter?.regionName ?? "Unknown"}
            title={node.frontmatter?.title ?? "No Title"}
          />
        ))
      ) : (
        <p>No My available</p> // ✅ 데이터가 없을 경우 메시지 표시
      )}
    </div>
    <div className={css.bottom}>
      <BottomTab />
        </div>
      </div>
    </AppScreen>
  );
};

export default My; // Map 컴포넌트 내보내기
