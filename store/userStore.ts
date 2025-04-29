import {create} from "zustand";

type userStore = {
    hasUserOnboarded: boolean;
    toogleHadOnbaorded: () => void;
};

export const useUserStore = create<userStore>((set) => ({
    hasUserOnboarded: false,
    toogleHadOnbaorded: () => set((state) => ({...state, hasUserOnboarded: !state.hasUserOnboarded})),
}));
