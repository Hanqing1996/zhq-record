import Vue from 'vue'
import Vuex from 'vuex'

import createId from '@/lib/idCreator.ts'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recordList: [] as RecordList,
        recordStatusMessage: '',
        tagList: [] as TagList,
        tagStatusMessage: '',
        findedTag: {} as Tag
    },
    mutations: {
        // record
        fetchRecord(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        },
        saveRecord(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
        },
        addRecord(state, record) {
            const newRecord = JSON.parse(JSON.stringify(record))
            state.recordList.push(newRecord)
        },

        // tag
        fetchTag(state) {
            console.log(window.localStorage.getItem('tagList'));
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        saveTag(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
        },
        addTag(state, name) {
            console.log('add?');
            const names = state.tagList.map(tag => tag.name)
            if (names.indexOf(name) >= 0) {
                state.tagStatusMessage = 'duplicated'
            } else {
                state.tagList.push({id: createId(), name})
                state.tagStatusMessage = 'success'
            }
        },
        removeTag(state, id) {
            const idList = state.tagList.map(tag => tag.id)
            if (idList.indexOf(id) < 0) {
                state.tagStatusMessage = 'not found'
            } else {
                const targetIndex = idList.indexOf(id)
                state.tagList.splice(targetIndex, 1)
                state.tagStatusMessage = 'success'
            }
        },
        updateTag(state, {id, name}) {
            const idList = state.tagList.map(tag => tag.id)
            if (idList.indexOf(id) < 0) {
                state.tagStatusMessage = 'not found'
            } else {
                const names = state.tagList.map(tag => tag.name)
                if (names.indexOf(name) >= 0) {
                    state.tagStatusMessage = 'duplicated'
                } else {
                    const tag = state.tagList.filter(tag => tag.id === id)[0]
                    tag.name = name
                    state.tagStatusMessage = 'success'
                }
            }
        },
        findTag(state, id) {

            const tag = state.tagList.filter(tag => tag.id === id)[0]
            tag ? state.findedTag = tag : {} as Tag
        }
    },

    // Your initialization state will be some sort of mutation or action depending upon the needs of async and side effects. This actions should be fired only once during initialization.
    // In your case, since you wish to inflate/deflate state from local storage (which is a side effect), it makes sense to make an action.
    actions: {
        initializeRecordList({commit}) {
            commit('fetchRecord')
        },
        addwithSaveRecord({commit}, record) {
            commit('addRecord', record)
            commit('saveRecord')
        },

        initializeTagList({commit}) {
            commit('fetchTag')
        },
        addwithSaveTag({commit}, tagName) {
            commit('addTag', tagName)
            commit('saveTag')
        },
        removewithSaveTag({commit}, id) {
            commit('removeTag', id)
            commit('saveTag')
        },
        updatewithSaveTag({commit}, {id, name}) {
            commit('updateTag', {id, name})
            commit('saveTag')
        }
    }
})
