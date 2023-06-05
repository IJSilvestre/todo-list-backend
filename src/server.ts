import dotenv from 'dotenv'
import app from './config/app'
import Logger from './config/logger'
import Todo from './models/todos'
dotenv.config()
const PORT = parseInt(`${process.env.PORT || 3000}`)


app.listen(PORT, () => {
    Logger.info(`Server running at http://localhost:${PORT}`)
    const dt = new Date()
    const todo = new Todo(1, 'buscar meninas', false, dt)
    console.log(todo)
})