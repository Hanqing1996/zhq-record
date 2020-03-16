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


interface TagListModelInterface {
    data: TagList,
    fetch: () => TagList,
    add: (name: string) => 'duplicated' | 'success',
    update: (id: number, name: string) => 'not found' | 'duplicated' | 'success',
    save: () => void
    remove: (id: number) => 'not found' | 'success',
    find:(id:number)=>Tag
}

interface RecordModelInterface {
    data: RecordList,
    cloneRecord: <T>(data: T) => T,
    add:(record:RecordItem)=>void
    fetch: () => RecordList,
    save: () => void
}


interface RecordStore{
    recordList:RecordList,
    addRecord:RecordModelInterface['add']
}

interface TagStore{
    tagList:TagList,
    addTag:TagListModelInterface['add'],
    updateTag:TagListModelInterface['update'],
    removeTag:TagListModelInterface['remove']
    findTag:TagListModelInterface['find']
}

// interface Store{
//     tagList:TagList,
//     addTag:TagListModelInterface['add'],
//     updateTag:TagListModelInterface['update'],
//     removeTag:TagListModelInterface['remove']
//     findTag:TagListModelInterface['find']
//
//     recordList:RecordList,
//     addRecord:RecordModelInterface['add']
// }

interface Window {
    tagList:TagList,
    addTag:TagListModelInterface['add'],
    updateTag:TagListModelInterface['update'],
    removeTag:TagListModelInterface['remove']
    findTag:TagListModelInterface['find']

    recordList:RecordList,
    addRecord:RecordModelInterface['add']
}