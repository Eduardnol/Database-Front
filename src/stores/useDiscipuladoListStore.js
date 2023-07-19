import {defineStore} from 'pinia'

export const useDiscipuladoListStore = defineStore('discipuladoList', {
    state: () => ({
        discipuladoList: [{
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
        },],
    }),
    actions: {
        addDiscipuladoList(newDiscipuladoList) {
            console.log(newDiscipuladoList);
            this.discipuladoList = newDiscipuladoList;
        },
        deleteFromArray(discipulado) {
            const toBeDeleted = this.discipuladoList.map(
                item => item.id).indexOf(discipulado.id);
            this.discipuladoList.splice(toBeDeleted, 1);
        }
    },
})