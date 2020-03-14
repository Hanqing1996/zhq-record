const localStorageKeyName = 'recordList'

const moneyModel = {
    cloneRecord(data:RecordItem[]|RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    },
    save(newData: RecordItem[]|Version) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(newData))
    }
}

export default moneyModel;