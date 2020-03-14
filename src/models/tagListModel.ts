const localStorageKeyName = 'tagList'


import createId from '@/lib/idCreator.ts'

interface TagListModelInterface {
    data: TagList,
    fetch: () => TagList,
    add: (name: string) => 'duplicated' | 'success',
    update: (id: number, name: string) => 'not found' | 'duplicated' | 'success',
    save: () => void
    remove: (id: number) => 'not found' | 'success',
}

const tagListModel: TagListModelInterface = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },
    add(name: string) {
        const names = this.data.map(tag => tag.name)
        if (names.indexOf(name) >= 0) return 'duplicated'
        this.data.push({id: createId(), name})
        this.save()
        return 'success';
    },
    update(id, name) {
        const idList = this.data.map(tag => tag.id)
        if (idList.indexOf(id) < 0) return 'not found'
        const names = this.data.map(tag => tag.name)
        if (names.indexOf(name) >= 0) return 'duplicated'
        const tag = this.data.filter(tag => tag.id === id)[0]
        tag.id=createId()
        tag.name = name
        this.save()
        return 'success'

    },
    remove(id) {
        const idList = this.data.map(tag => tag.id)
        if (idList.indexOf(id) < 0) return 'not found'
        this.data=this.data.filter(tag=>tag.id!==id)
        this.save()
        return 'success'
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}

export default tagListModel;