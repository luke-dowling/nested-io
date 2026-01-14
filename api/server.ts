import app from "./src/app.ts"
import { db } from "./src/libs/db.ts"
import "dotenv/config"

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000

if (process.env.NODE_ENV === "development") {
  await db.sync({ alter: true })
  console.log("Database synced")
} else {
  await db.sync()
  console.log("Database synced")
}

try {
  await db.authenticate()
  console.log("Database connected successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

app.listen(PORT, () => {
  console.log(`[server]: Server is running on port: ${PORT}`)
})
