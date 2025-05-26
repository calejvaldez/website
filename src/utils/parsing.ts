export const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export function timestampToString(timestamp: number, long?: boolean): string {
    let date = new Date(timestamp*1000);
    if (long) {
        return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    } else {
        return `${date.getFullYear().toString().slice(2, 4)}-${date.getMonth()+1}-${date.getDate()}`
    }
    
}
