import {create} from "zustand"

export const useFeatureStore = create(set => ({
  inViewFeature: null,
  setInViewFeature: feature => set({ inViewFeature: feature }),
  fullScreenFeature: null,
  setFullScreenFeature: feature => {
 set({ fullScreenFeature: feature });
 if(feature !== null){
  set({ lastFullScreenFeature :feature});
 }
  },
 
  lastFullScreenFeature: null,
  setLastFullScreenFeature: feature => set({ lastFullScreenFeature: feature }),
  inViewTitle: null,
  setInViewTitle: feature => set({ inViewTitle: feature }),
}));
