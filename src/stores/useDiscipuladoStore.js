import {defineStore} from 'pinia'

export const useDiscipuladoStore = defineStore('discipulado', {
  state: () => ({
    discipulado: {
      id: null,
      title: null,
      responsables: [{id: null, nombre: null, apellido: null}],
      startDate: "2001-01-20",
      numInscritos: 0,
      idMonitores: [{id: null, nombre: null, apellido: null}],
      idInscritos: [{id: null, nombre: null, apellido: null}],
      subgrupos: [{
        titulo: null,
        descripcion: null,
        responsables: null,
        integrantes: null,
      }],
    }
  }),

      actions: {
        insertIndividualDiscipulado(discipulado_info) {
          console.log(discipulado_info)
          this.discipulado = discipulado_info
        },
        updateDiscipuladoInscritosList(discipulado_info) {
          this.discipulado.idInscritos = discipulado_info
        },
        updateDiscipuladoMonitorList(discipulado_info) {
          this.discipulado.idMonitores = discipulado_info
        },
        updateDiscipuladoResponsables(responsables) {
          this.discipulado.responsables = responsables
        }

      },
    }
);