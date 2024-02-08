 export interface obj {
    id: number;
    value: string;

}[]

export interface Item {
    id:number;
    value: string;
}
export interface ContextStruct {
    title: string;
    search: string;
    items: (obj|[])
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface fetchedData {
    data: object[]
    error: (object | null)
}
export interface MouseEvents{
    onMouseDown: React.MouseEvent
}
