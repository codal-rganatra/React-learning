type Info = {
    id: number;
    name: string;
    email: string;
}

type AdminInforList = Info & {
    adminid: number
}

export {type Info, type AdminInforList}