const localStorageKeyName = 'recordList'

let _data:RecordList=[]
const _fetch=()=>{
    console.log('tag 的 fetch');
    _data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return _data
}
const _cloneRecord=(_data:RecordList|RecordItem)=>{
    return JSON.parse(JSON.stringify(_data))
}
const _save=()=>{
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(_data))
}

const recordStore:RecordStore = {
    recordList:_fetch(),
    addRecord: (record) => {
        const newRecord = _cloneRecord(record)
        _data.push(newRecord)
        _save()
    }
}

export default recordStore