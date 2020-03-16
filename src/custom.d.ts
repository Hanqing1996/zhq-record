type RecordItem = {
    tags: string[];
    type: '+' | '-';
    notes: string;
    amount: number;
    createdAt?: Date;
}

type Version=string

type Tag={id:number,name:string}

type TagList=Tag[]
type RecordList=RecordItem[]

// interface RecordStore{
//     recordList:RecordList,
//     cloneRecord:(record: RecordList | RecordItem)=>RecordList|RecordItem,
//     save:()=>void,
//     addRecord:(record:RecordItem)=>void
// }

interface TagStore{
    tagList:TagList,
    addTag:(name: string) => 'duplicated' | 'success',
    updateTag:(id: number, name: string) => 'not found' | 'duplicated' | 'success',
    removeTag:(id: number) => 'not found' | 'success',
    findTag:(id:number)=>Tag
}