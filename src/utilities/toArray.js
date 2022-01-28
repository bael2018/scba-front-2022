
export const toArrayWithId = (res) => {
    if(!res) return []

    return Object.entries(res).map(item => {
        const id = item[0]

        return {
            ...item[1],
            id
        }
    })
}