import { create } from 'zustand';

export const useFeatureStore = create(set => ({
  inViewFeature: null,
  setInViewFeature: feature => set({ inViewFeature: feature }),
  fullScreenFeature: null,
  setFullScreenFeature: feature => {
    set({ fullScreenFeature: feature });
    if (feature !== null) {
      set({ lastFullScreenFeature: feature });
    }
  },

  lastFullScreenFeature: null,
  setLastFullScreenFeature: feature => set({ lastFullScreenFeature: feature }),
  inViewTitle: null,
  setInViewTitle: feature => set({ inViewTitle: feature }),

  leng: localStorage.getItem('leng') || 'ua',
  setLeng: feature => set({ leng: feature }),

  pict: null,
  setPict: feature => set({ pict: feature }),

  name: null,
  setName: feature => set({ name: feature }),

  selectedMenu: false,
  setSelectedMenu: feature => set({ selectedMenu: feature }),

  refTop: null,
  setRefTop: feature => set({ refTop: feature }),
}));
