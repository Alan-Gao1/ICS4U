import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

let students = [
    {id: 1, name: 'Fred', age: 16},
    {id: 2, name: 'Michael', age: 18},
    {id: 3, name: 'Kyle', age: 16},
    {id: 4, name: 'Alan', age: 16},
]

app.get('/api/students', (req, res) => {
    res.send(students)
})

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found')
    res.send(student)
})

app.post('/api/students', (req, res) => {
    if (!req.body.name) res.status(400).send('Name is required.')
    const student = {
        id: student.length+1,
        name: req.body.name,
        age: req.body.age
    }

    students.push(student)
    res.send(student)
})

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Student not found')

    student.name = req.body.name
    student.age = req.body.age
    
    res.send(student)
})

app.delete('/api/students/:id')

app.listen(PORT, () => console.log('Server started on PORT ' + PORT))