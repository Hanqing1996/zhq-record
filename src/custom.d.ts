type RecordItem = {
    tags: string[];
    type: '+' | '-';
    notes: string;
    amount: number;
    createdAt?: Date;
}

type Version=string