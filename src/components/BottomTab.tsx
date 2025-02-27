import { useActions } from "@stackflow/react"; // Stackflow 네비게이션을 위한 useActions 훅 가져오기
import React from "react"; // React 라이브러리 가져오기

import IconChatting from "../assets/IconChatting"; // 채팅 아이콘 가져오기
import IconHome from "../assets/IconHome"; // 홈 아이콘 가져오기
import IconMenu from "../assets/IconMenu"; // 메뉴 아이콘 가져오기
import IconProfile from "../assets/IconProfile"; // 프로필 아이콘 가져오기
import IconSell from "../assets/IconSell"; // 판매 아이콘 가져오기
import * as css from "./BottomTab.css"; // CSS 모듈 가져오기

// 하단 탭 네비게이션 컴포넌트 정의
const BottomTab: React.FC = () => {
    const { replace } = useActions(); // Stackflow의 replace 함수를 사용하여 화면 이동 처리

    return (
        <div className={css.container}>
            {/* 홈 버튼 (클릭 시 Main.tsx로 슬라이드 이동) */}
            <button
                type="button"
                className={css.button}
                onClick={() => replace("Main", { transitionType: "horizontal" }, { animate: true })} // ✅ "Main"으로 슬라이드 이동
            >
                <div className={css.buttonIcon}>
                    <IconHome /> {/* 홈 아이콘 */}
                </div>
                <div className={css.buttonLabel}>Home</div> {/* 버튼 라벨 */}
            </button>

            {/* 지도 탭: 제휴 카페의 위치 및 실시간 인원 확인 화면으로 전환 */}
            <button
                type="button"
                className={css.button}
                onClick={() => replace("MapTab", { transitionType: "horizontal" }, { animate: true })} // ✅ "Map"로 슬라이드 이동
            >
                <div className={css.buttonIcon}>
                    <IconMenu /> {/* 카테고리 아이콘 */}
                </div>
                <div className={css.buttonLabel}>Map</div> {/* 버튼 라벨 */}
            </button>

            {/* 선물 탭: 선물 보내기 기능 화면으로 전환 */}
            <button
                type="button"
                className={css.button}
                onClick={() =>
                    replace("Gift", { transitionType: "horizontal" }, { animate: true })
                }
            >
                <div className={css.buttonIcon}>
                    <IconSell /> {/* 판매 아이콘 */}
                </div>
                <div className={css.buttonLabel}>Gift</div> {/* 버튼 라벨 */}
            </button>

            {/* 채팅 탭: 채팅 기능 화면으로 전환 */}
            <button
                type="button"
                className={css.button}
                onClick={() =>
                    replace("Chats", { transitionType: "horizontal" }, { animate: true })
                }
            >
                <div className={css.buttonIcon}>
                    <IconChatting /> {/* 채팅 아이콘 */}
                </div>
                <div className={css.buttonLabel}>Chats</div> {/* 버튼 라벨 */}
            </button>

            {/* 내 정보 탭: 사용자 프로필/설정 화면으로 전환 */}
            <button
                type="button"
                className={css.button}
                onClick={() =>
                    replace("My", { transitionType: "horizontal" }, { animate: true })
                }
            >
                <div className={css.buttonIcon}>
                    <IconProfile /> {/* 프로필 아이콘 */}
                </div>
                <div className={css.buttonLabel}>My</div> {/* 버튼 라벨 */}
            </button>
        </div>
    );
};

export default BottomTab; // BottomTab 컴포넌트 내보내기
