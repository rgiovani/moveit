import { createContext, ReactNode, useState } from "react";

interface RankingContextProps {
    children: ReactNode;
}

interface RankingContextData {
    isRankingPageOnFocus: boolean;
    showRanking: (isOnFocus: boolean) => void;
}

export const RankingContext = createContext({} as RankingContextData);

export function RankingProvider({ children }: RankingContextProps) {
    const [isRankingPageOnFocus, setIsRankingPageOnFocus] = useState(false);

    function showRanking(isOnFocus: boolean) {
        setIsRankingPageOnFocus(isOnFocus);
    }

    return (
        <RankingContext.Provider value={{
            isRankingPageOnFocus,
            showRanking
        }}>
            {children}
        </RankingContext.Provider>
    )
}