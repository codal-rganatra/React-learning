type employee = {
    id: number,
    name: boolean
}

type manager = {
    id: string,
    name: string
}

const raj: employee | manager = {
    id: 555,
    name: true
    
}

console.log(raj.id)