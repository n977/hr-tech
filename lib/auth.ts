import { create } from "zustand";

export class User {
  accessToken: string;
  name: string | null;
  avatarUrl: string | null;

  public constructor(accessToken: string) {
    this.accessToken = accessToken;
    this.name = null;
    this.avatarUrl = null;
  }
}

type State = {
  user: User | null;
};

type Action = {
  login: (accessToken: string) => void;
  logout: () => void;
  setName: (name: User["name"]) => void;
  setAvatar: (avatarUrl: User["avatarUrl"]) => void;
};

export const useAuth = create<State & Action>((set) => ({
  user: null,
  login: (accessToken) => set({ user: new User(accessToken) }),
  logout: () =>
    set(() => {
      console.log("Logging out. All user data will be cleared.");
      window.localStorage.removeItem("refreshToken");

      return {
        user: null,
      };
    }),
  setName: (name) =>
    set((state) => {
      if (!state.user) return state;

      return {
        user: {
          ...state.user,
          name,
        },
      };
    }),
  setAvatar: (avatarUrl) =>
    set((state) => {
      if (!state.user) return state;

      return {
        user: {
          ...state.user,
          avatarUrl,
        },
      };
    }),
}));
