import createId from '@/lib/idCreator.ts'
const localStorageKeyName = 'tagList'

// 以下方法及字段不暴露给外界
let data: TagList = []
const fetch = () => {
    data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return data
}
const save = () => {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
}

// 以下方法及字段暴露给外界
const tagStore: TagStore = {
    tagList: fetch(),
    addTag: (name) => {
        const names = data.map(tag => tag.name)
        if (names.indexOf(name) >= 0) return 'duplicated'
        data.push({id: createId(), name})
        save()
        return 'success';
    },
    removeTag: (id) => {
        const idList = data.map(tag => tag.id)
        if (idList.indexOf(id) < 0) return 'not found'
        const targetIndex = idList.indexOf(id)
        data.splice(targetIndex, 1)
        save()
        return 'success'
    },
    updateTag: (id, name) => {
        const idList = data.map(tag => tag.id)
        if (idList.indexOf(id) < 0) return 'not found'
        const names = data.map(tag => tag.name)
        if (names.indexOf(name) >= 0) return 'duplicated'
        const tag = data.filter(tag => tag.id === id)[0]
        tag.name = name
        save()
        return 'success'
    },
    findTag: (id) => {
        return data.filter(tag => tag.id === id)[0]
    }
}

export default tagStore