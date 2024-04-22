const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());


app.get("/api/AverageActiveTime", (req, res) => {
    res.json({
        "user": [
            { name: 'John', time: '04:27:12' },
            { name: 'Alice', time: '07:15:43' },
            { name: 'Bob', time: '06:59:54' },
            { name: 'Eve', time: '05:32:01' },
            { name: 'Charlie', time: '06:18:37' },
            { name: 'Jane', time: '03:45:10' },
            { name: 'Allison', time: '07:41:17' },
            { name: 'Charlie', time: '05:09:28' },
            { name: 'William', time: '06:23:49' }
        ]
    })
})



app.get("/api/AverageHandleTime", (req, res) => {
    res.json({
        "user": [
            { name: 'John', time: '00:14:22' },
            { name: 'Alice', time: '00:17:38' },
            { name: 'Bob', time: '00:18:11' },
            { name: 'Eve', time: '00:12:57' },
            { name: 'Charlie', time: '00:19:21' },
            { name: 'Jane', time: '00:14:08' },
            { name: 'Allison', time: '00:19:14' },
            { name: 'Charlie', time: '00:12:19' },
            { name: 'William', time: '00:17:10' }
        ]

    })
})


app.get("/api/AverageNonTalkTime", (req, res) => {
    res.json({
        "user": [
            { name: 'John', time: '00: 02: 17' },
            { name: 'Alice', time: '00: 08: 43' },
            { name: 'Bob', time: '00: 05: 59' },
            { name: 'Eve', time: '00: 07: 12' },
            { name: 'Charlie', time: '00: 04: 38' },
            { name: 'Jane', time: '00: 09: 54' },
            { name: 'Allison', time: '00: 05: 22' },
            { name: 'Charlie', time: '00: 06:07' },
            { name: 'William', time: '00: 03: 48' }
        ]
    })
})

app.listen(4000, () => { console.log("server started in port 4000") })