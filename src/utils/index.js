export const getDateToDisplay = (date) => {
    var newDate = new Date(date)
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`

}