const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animeSchema = new Schema({
    episodeId: {
        type: String,
        required: true,
    },
    animeId: {
        type: String,
        required: true
    },
    animeTitle: {
        type: String,
        required: true,
    },
    episodeNum: {
        type: String,
        required: true,
    },
    subOrDub: {
        type: String,
        required: true,
    },
    animeImg: {
        type: String,
        required: true
    },
    episodeUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Anime', animeSchema);