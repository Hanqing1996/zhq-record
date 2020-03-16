import createId from "@/lib/idCreator";

const localStorageKeyName = 'recordList'

const recordModel: RecordModelInterface = {
    data: [],
    cloneRecord(data){
        return JSON.parse(JSON.stringify(data))
    },
    add(record:RecordItem){
        const newRecord = recordModel.cloneRecord(record)
        this.data.push(newRecord)
        this.save()
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
    }
}

export default recordModel;