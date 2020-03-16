const localStorageKeyName = 'recordList'

let data:RecordList=[]
const fetch=()=>{
    data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return data
}
const cloneRecord=(data:RecordList|RecordItem)=>{
    return JSON.parse(JSON.stringify(data))
}
const save=()=>{
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
}

const recordStore:RecordStore = {
    recordList:fetch(),
    addRecord: (record) => {
        const newRecord = cloneRecord(record)
        data.push(newRecord)
        save()
    }
}

export default recordStore