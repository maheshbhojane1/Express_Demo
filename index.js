const express = require('express')

const app = express()
const port = 4000

const data = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

app.get('/', (req, res)=>{
    res.send("Hello Bhojane")
})

app.get('/link', (req, res)=>{
    res.json(data)
})

app.listen(port, ()=>{
    console.log(`My name is Mahesh ${port}`);
})