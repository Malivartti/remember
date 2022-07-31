import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczNTMzODUxfQ.mhO4ZBLZqybD8fNkg4wRK52oqsEXxOEIwglwmZh1NII";
const URL = {
  people: "https://spb-archive.gate.petersburg.ru/api/v1/mini-story/get/all",
  dates: "https://dates.gate.petersburg.ru/memorable_dates?skip=0&limit=400",
}
const config = {
  headers: { Authorization: `Bearer ${TOKEN}` }
}

export async function getPeople() {
  try {
    const response = await axios.get(URL.people, config)
    return response.data
  } catch (e) {
    throw new Error(e)
  }
}

export async function getDates() {
  try {
    const response = await axios.get(URL.dates, config)
    return response.data
  } catch (e) {
    throw new Error(e)
  }
}