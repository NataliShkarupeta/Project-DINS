import {create} from "zustand"

export const useFeatureStore = create(set => ({
  inViewFeature: null,
  setInViewFeature: feature => set({ inViewFeature: feature }),
  fullScreenFeature: null,
  setFullScreenFeature: feature => set({ fullScreenFeature: feature }),
}));
