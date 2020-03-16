import createId from '@/lib/idCreator.ts'
const localStorageKeyName = 'tagList'

// 以下方法及字段不暴露给外界
let _data: TagList = []
const _fetch = () => {
    _data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return _data
}
const _save = () => {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(_data))
}

// 以下方法及字段暴露给外界
const tagStore: TagStore = {
    tagList: _fetch(),
    addTag: (name) => {
        const names = _data.map(tag => tag.name)
        if (names.indexOf(name) >= 0) return 'duplicated'
        _data.push({id: createId(), name})
        _save()
        return 'success';
    },
    removeTag: (id) => {
        const idList = _data.map(tag => tag.id)
        if (idList.indexOf(id) < 0) return 'not found'
        const targetIndex = idList.indexOf(id)
        _data.splice(targetIndex, 1)
        _save()
        return 'success'
    },
    updateTag: (id, name) => {
        const idList = _data.map(tag => tag.id)
        if (idList.indexOf(id) < 0) return 'not found'
        const names = _data.map(tag => tag.name)
        if (names.indexOf(name) >= 0) return 'duplicated'
        const tag = _data.filter(tag => tag.id === id)[0]
        tag.name = name
        _save()
        return 'success'
    },
    findTag: (id) => {
        return _data.filter(tag => tag.id === id)[0]
    }
}

export default tagStore