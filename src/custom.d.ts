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
}

interface Window {
    tagList:TagList,
    recordList:RecordList,
    addTag:TagListModelInterface['add'],
    updateTag:TagListModelInterface['update'],
    saveTag:TagListModelInterface['save'],
    removeTag:TagListModelInterface['remove']
}