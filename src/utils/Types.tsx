 export type HeaderProps =  {
    title: string;
}

export interface ContextStruct {
    title: string;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}