
interface StatusInterface{
    name: string,
    color: string
}

export interface TaskInterface{
    id?:number,
    name: string,
    due_date?: string,
    observation?: string,
    status: StatusInterface
}

