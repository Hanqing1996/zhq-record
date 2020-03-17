type RecordItem = {
    tags: string[];
    type: '+' | '-';
    notes: string;
    amount: number;
    createdAt?: string;
}

type Version=string

type Tag={id:number,name:string}

type TagList=Tag[]
type RecordList=RecordItem[]



