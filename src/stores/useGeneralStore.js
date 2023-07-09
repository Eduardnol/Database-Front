import {defineStore} from 'pinia'

export const useGeneralStore = defineStore('generalStore', {
      state: () => ({
        isInscritos: false,
      }),
      actions: {
        //***********************Extras***********************//
        updateInscritosBoolean(boolValue) {
          this.isInscritos = boolValue;
        }
      },
    })
;