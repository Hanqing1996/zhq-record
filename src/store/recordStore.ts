const localStorageKeyName = 'recordList'
function recordListFetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
}

const recordStore: RecordStore = {
    recordList: recordListFetch(),
    cloneRecord(record: RecordList | RecordItem) {
        return JSON.parse(JSON.stringify(record))
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))
    },
    addRecord(record) {
        const newRecord = this.cloneRecord(record) as RecordItem
        this.recordList.push(newRecord)
        this.save()
    }
}

export default recordStore