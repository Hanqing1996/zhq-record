import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recordList: [] as RecordList,
    },
    mutations: {
        fetch(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        },
        cloneRecord(state, record: RecordList | RecordItem) {
            return JSON.parse(JSON.stringify(record))
        },
        save(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        },
        addRecord(state, record) {
            const newRecord = this.cloneRecord(record) as RecordItem
            state.recordList.push(newRecord)
        }
    },

    // Your initialization state will be some sort of mutation or action depending upon the needs of async and side effects. This actions should be fired only once during initialization.
    // In your case, since you wish to inflate/deflate state from local storage (which is a side effect), it makes sense to make an action.
    actions: {
        initializeRecordList({commit}) {
            commit('fetch')
        },
        addwithSave({commit},record){
            commit('addRecord',record)
            commit('save')
        }
    }
})
