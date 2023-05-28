import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "430b8ce01962448ba409c6859662fce3",
  },
})
