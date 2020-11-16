const mongoose = require('mongoose')

const mod = mongoose.model('mod' , {
    title :{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    artist:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    genre: {
        type:String,
        lowercase:true,
        trim:true
    },
    year:{
        type: Number,
        required:true
    },
    bpm:{
        type: Number,
        default: null
    },
    energy:{
        type: Number,
        default: null
    },
    danceability:{
        type: Number,
        default: null
    },
    dB: {
        type: Number,
        default: null
    },
    liveness:{
        type: Number,
        default: null
    },
    valence:{
        type: Number,
        default: null
    },
    duration:{
        type: Number,
        required:true
    },
    accoustice:{
        type: Number,
        default: null
    },
    speech:{
        type: Number,
        default: null
    }

})

module.exports = mod;