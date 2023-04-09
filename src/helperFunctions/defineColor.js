export const defineColor = (num) => {
    return String(num).includes('-')
        ? {color: '#e15241'}
        : {color: '#92c950'}
}