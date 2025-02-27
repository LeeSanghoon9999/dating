import { vars } from "@seed-design/design-token";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { preloadPlugin } from "@stackflow/plugin-preload";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import React from "react";

import { preloadDataMap } from "./lib/readPreloadData";

declare const window: any;

const activities = {
  Main: React.lazy(() => import("./activities/Main")),
  Article: React.lazy(() => import("./activities/Article")),
  MapTab: React.lazy(() => import("./activities/MapTab")),
  Gift: React.lazy(() => import("./activities/Gift")),
  Chats: React.lazy(() => import("./activities/Chats")),
  My: React.lazy(() => import("./activities/My")),
};


const theme =
    typeof window !== "undefined" &&
    /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())
        ? "cupertino"
        : "android";

const borderColor =
    theme === "cupertino"
        ? vars.$semantic.color.divider3
        : vars.$semantic.color.divider2;

export const { Stack } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme,
      backgroundColor: vars.$semantic.color.paperDefault,
      appBar: {
        borderColor,
        textColor: vars.$scale.color.gray900,
        iconColor: vars.$scale.color.gray900,
      },
    }),
    historySyncPlugin({
      routes: {
        Main: "/",
        Article: "/articles/:articleId",
        MapTab: "/MapTab", // ✅ Map 추가
        Gift: "/Gift", // ✅ Map 추가
        Chats: "/Chats", // ✅ Map 추가
        My: "/My", // ✅ Map 추가
      },
      fallbackActivity: () => "Main",
    }),
    preloadPlugin({
      loaders: {
        Main({
               activityParams,
               isInitialActivity,
               initialContext,
               activityContext,
             }) {
          const key = `Main#${JSON.stringify(activityParams)}`;

          if (isInitialActivity) {
            preloadDataMap[key] = {
              _t: "ok",
              data: initialContext.data,
            };
          }

          if (!preloadDataMap[key]) {
            const promise = window.___loader
                .loadPage((activityContext as any).path)
                .then((result: any) => {
                  preloadDataMap[key] = {
                    _t: "ok",
                    data: result.json.data,
                  };
                });

            preloadDataMap[key] = {
              _t: "pending",
              promise,
            };
          }

          return {
            key,
          };
        },
        Article({
                  activityParams,
                  isInitialActivity,
                  initialContext,
                  activityContext,
                }) {
          const key = `Article#${JSON.stringify(activityParams)}`;

          if (isInitialActivity) {
            preloadDataMap[key] = {
              _t: "ok",
              data: initialContext.data,
            };
          }

          if (!preloadDataMap[key]) {
            const promise = window.___loader
                .loadPage((activityContext as any).path)
                .then((result: any) => {
                  preloadDataMap[key] = {
                    _t: "ok",
                    data: result.json.data,
                  };
                });

            preloadDataMap[key] = {
              _t: "pending",
              promise,
            };
          }

          return {
            key,
          };
        },

        MapTab({ activityParams, isInitialActivity, initialContext, activityContext }) {
          const key = `MapTab#${JSON.stringify(activityParams)}`;

          if (isInitialActivity) {
            preloadDataMap[key] = {
              _t: "ok",
              data: initialContext.data,
            };
          }

          if (!preloadDataMap[key]) {
            const promise = window.___loader
                .loadPage((activityContext as any).path)
                .then((result: any) => {
                  preloadDataMap[key] = {
                    _t: "ok",
                    data: result.json.data,
                  };
                });

            preloadDataMap[key] = {
              _t: "pending",
              promise,
            };
          }


          return { key };
        },

        Gift({ activityParams, isInitialActivity, initialContext, activityContext }) {
          const key = `Gift#${JSON.stringify(activityParams)}`;

          if (isInitialActivity) {
            preloadDataMap[key] = {
              _t: "ok",
              data: initialContext.data,
            };
          }

          if (!preloadDataMap[key]) {
            const promise = window.___loader
                .loadPage((activityContext as any).path)
                .then((result: any) => {
                  preloadDataMap[key] = {
                    _t: "ok",
                    data: result.json.data,
                  };
                });

            preloadDataMap[key] = {
              _t: "pending",
              promise,
            };
          }


          return { key };
        },

        Chats({ activityParams, isInitialActivity, initialContext, activityContext }) {
          const key = `Chats#${JSON.stringify(activityParams)}`;

          if (isInitialActivity) {
            preloadDataMap[key] = {
              _t: "ok",
              data: initialContext.data,
            };
          }

          if (!preloadDataMap[key]) {
            const promise = window.___loader
                .loadPage((activityContext as any).path)
                .then((result: any) => {
                  preloadDataMap[key] = {
                    _t: "ok",
                    data: result.json.data,
                  };
                });

            preloadDataMap[key] = {
              _t: "pending",
              promise,
            };
          }


          return { key };
        },

        My({ activityParams, isInitialActivity, initialContext, activityContext }) {
          const key = `My#${JSON.stringify(activityParams)}`;

          if (isInitialActivity) {
            preloadDataMap[key] = {
              _t: "ok",
              data: initialContext.data,
            };
          }

          if (!preloadDataMap[key]) {
            const promise = window.___loader
                .loadPage((activityContext as any).path)
                .then((result: any) => {
                  preloadDataMap[key] = {
                    _t: "ok",
                    data: result.json.data,
                  };
                });

            preloadDataMap[key] = {
              _t: "pending",
              promise,
            };
          }


          return { key };
        },
      },
    }), // ✅ 여기에서 닫기

  ],
}); // ✅ 여기에서 stackflow 설정 닫기

export type TypeActivities = typeof activities;
