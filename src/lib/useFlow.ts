import { useActions } from "@stackflow/react";
import { useCallback, useMemo, useTransition } from "react";
import { TypeActivities } from "../stackflow";

export function useFlow() {
    const [isPending, startTransition] = useTransition();
    const {
        push: _push,
        pop: _pop,
        replace: _replace,
    } = useActions<TypeActivities>();

    const push = useCallback(
        (...args: Parameters<typeof _push>) => {
            if (isPending) {
                // 진행 중이면 반환값을 강제로 기본값으로 지정 (실제 반환값은 무시)
                return {} as ReturnType<typeof _push>;
            }
            startTransition(() => {
                _push(...args);
            });
        },
        [isPending, startTransition, _push]
    ) as typeof _push;

    const replace = useCallback(
        (...args: Parameters<typeof _replace>) => {
            if (isPending) {
                return {} as ReturnType<typeof _replace>;
            }
            startTransition(() => {
                _replace(...args);
            });
        },
        [isPending, startTransition, _replace]
    ) as typeof _replace;

    const pop = useCallback(
        (...args: Parameters<typeof _pop>) => {
            if (isPending) {
                return {} as unknown as ReturnType<typeof _pop>;
            }
            startTransition(() => {
                _pop(...args);
            });
        },
        [isPending, startTransition, _pop]
    ) as typeof _pop;

    return useMemo(
        () => ({
            push,
            pop,
            replace,
        }),
        [push, pop, replace]
    );
}
