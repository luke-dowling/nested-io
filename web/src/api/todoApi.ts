export const apiCheck = async () => {
  try {
    const response = await fetch("http://localhost:3000/")

    if (response.ok) {
      console.log("API is reachable")
    } else {
      console.error("API is not reachable, status:", response.status)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error("Error reaching API:", error)
  }
}
