export const lens = prop => () => prop

export const view = lens => obj => obj[lens()]

export const set = lens => value => obj => ({ ...obj, [lens()]: value })

export const over = lens => fn => obj => ({ ...obj, [lens()]: fn(obj[lens()]) })
