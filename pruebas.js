var tasks = [
    {
        'name': 'Work out',
        'duration': 120
    },
    {
        'name': 'Write for Envato Tuts+',
        'duration': 60
    },
    {
        'name': 'Procrastinate on Duolingo',
        'duration': 240
    }
];


// let value = tasks.map((task, index, array) => {
//     return task.name;
// })

// let value = tasks.filter((task, index, array) => {
//     return task.duration >= 120
// })

let value = tasks.reduce((previous, current) => {
    return previous.duration
})
console.log(value)