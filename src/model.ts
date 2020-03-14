const localStorageKeyName = 'recordList'

const model = {
    cloneRecord(data:RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(localStorageKeyName:string) {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    },
    save(localStorageKeyName:string,newData: RecordItem[]|Version) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(newData))
    }
}

export default model;