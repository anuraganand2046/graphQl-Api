const connectDB = require("../config/db")
connectDB()

const axios = require("axios");
const Anime = require("../models/anime");
const mongoose = require('mongoose');

const importData = async (data) => {
    try {
        await Anime.insertMany(data)
        console.log("Seeder data proceeded successfully")
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
    }
}
 
axios.get("https://gogoanime.consumet.org/recent-release").then(async (res) => {
    console.log("response is ", res.data);
    await importData(res.data);
})