import { AppScreen } from "@stackflow/plugin-basic-ui"; // Stackflow 기본 UI
import { useActivityPreloadRef } from "@stackflow/plugin-preload"; // 프리로드 기능
import { ActivityComponentType } from "@stackflow/react"; // ActivityComponentType 타입
import React from "react"; // React 라이브러리

import IconBell from "../assets/IconBell"; // 알림 아이콘
import IconExpandMore from "../assets/IconExpandMore"; // 확장(더보기) 아이콘
import IconSearch from "../assets/IconSearch"; // 검색 아이콘
import IconSettings from "../assets/IconSettings"; // 설정 아이콘
import BottomTab from "../components/BottomTab"; // 하단 탭 네비게이션
import MapCard from "../components/FeedCard"; // 피드 카드 컴포넌트
import { readPreloadData } from "../lib/readPreloadData"; // 프리로드 데이터 읽기 함수
import * as css from "./MapTab.css"; // MapTab 전용 CSS 모듈

// 구글맵 API 컴포넌트 임포트
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// 구글맵 스타일 및 중심 좌표 (예: 서울)
const mapContainerStyle = {
  width: "100%",
  height: "300px",
};
const center = {
  lat: 37.5665,
  lng: 126.9780,
};

const MapTab: ActivityComponentType = () => {
  const preloadRef = useActivityPreloadRef<{ key: string }>();
  const data = readPreloadData<Queries.MainTemplateQueryQuery>(preloadRef);

  // 앱 바 왼쪽: Map 제목과 확장 아이콘
  const appBarLeft = () => (
    <div className={css.appBarLeft}>
      Map
      <div className={css.appBarLeftIcon}>
        <IconExpandMore />
      </div>
    </div>
  );

  // 앱 바 오른쪽: 검색, 설정, 알림 아이콘
  const appBarRight = () => (
    <div className={css.appBarRight}>
      <IconSearch />
      <IconSettings />
      <IconBell />
    </div>
  );

  return (
    <AppScreen
      appBar={{
        appendLeft: appBarLeft,
        appendRight: appBarRight,
      }}
    >
      <div className={css.wrapper}>
        {/* 구글맵 영역 */}
        <LoadScript googleMapsApiKey="AIzaSyD5m_Luc1EQB604BRDoNwTosiu6HTTePgE">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            {/* 예시로 중심에 Marker 표시 */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        {/* 스크롤 가능한 피드 목록 영역 */}
        <div className={css.scrollable}>
          {data.allMarkdownRemark?.nodes?.length > 0 ? (
            data.allMarkdownRemark.nodes.map((node) => (
              <MapCard
                key={String(node.frontmatter?.id ?? "default-id")}
                articleId={String(node.frontmatter?.id ?? "default-id")}
                daysAgo={node.frontmatter?.daysAgo ?? 0}
                price={node.frontmatter?.price ?? 0}
                region={node.frontmatter?.regionName ?? "Unknown"}
                title={node.frontmatter?.title ?? "No Title"}
              />
            ))
          ) : (
            <p>No Map available</p>
          )}
        </div>

        {/* 하단 탭 네비게이션 */}
        <div className={css.bottom}>
          <BottomTab />
        </div>
      </div>
    </AppScreen>
  );
};

export default MapTab;
