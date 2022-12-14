const months = {
  "01": "января",
  "02": "февраля",
  "03": "марта",
  "04": "апреля",
  "05": "мая",
  "06": "июня",
  "07": "июля",
  "08": "августа",
  "09": "сентября",
  "10": "октября",
  "11": "ноября",
  "12": "декабря",
}

export function formatDate(date) {
  const [year, month, day] = date.split('-')
  return `${day} ${months[month]} ${year}`
}
