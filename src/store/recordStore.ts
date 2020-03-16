import recordModel from "@/models/recordModel";

const recordStore:RecordStore = {
    recordList:recordModel.fetch(),
    addRecord: (record) => {
        recordModel.add(record)
    }
}

export default recordStore