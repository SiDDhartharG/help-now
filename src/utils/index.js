export const getDateToDisplay = (date) => {
    var newDate = new Date(date)
    var today = new Date()
    if (newDate.getDate() === today.getDate() && today.getMonth() === newDate.getMonth() && today.getFullYear() === newDate.getFullYear()) {
        return `${newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()}:${newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()}`
    }
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`

}