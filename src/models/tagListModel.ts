const localStorageKeyName = 'tagList'

interface TagListModelInterface {
    data:TagList,
    fetch:()=>TagList,
    add:(name:string)=>'duplicated'|'success',
    save:()=>void
}

const tagListModel:TagListModelInterface = {
    data:[],
    fetch() {
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },
    add(name:string){
        if(this.data.indexOf(name)>=0) return 'duplicated'
        this.data.push(name)
        this.save()
        return 'success';
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}

export default tagListModel;