export const getDateToDisplay = (date) => {
    var newDate = new Date(date)
    var today = new Date()
    if (newDate.getDate() === today.getDate() && today.getMonth() === newDate.getMonth() && today.getFullYear() === newDate.getFullYear()) {
        return `${newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours()}:${newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()}`
    }
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`

}

export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}