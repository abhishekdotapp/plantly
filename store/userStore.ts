import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persist, createJSONStorage} from "zustand/middleware";

type userStore = {
    hasUserOnboarded: boolean;
    toogleHadOnbaorded: () => void;
};

export const useUserStore = create(persist<userStore>((set) => ({
    hasUserOnboarded: false,
    toogleHadOnbaorded: () => set((state) => ({...state, hasUserOnboarded: !state.hasUserOnboarded})),
}), {
    name: "plantly-user-store",
    storage: createJSONStorage(() => AsyncStorage),
    }),
);
