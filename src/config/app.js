require('dotenv').config();

const language = (process.env.DEFAULT_LANGUAGE) ? process.env.DEFAULT_LANGUAGE : 'fr';
const debugMode = process.env.DEBUG_MODE === 'true';

module.exports = {
    language: language,
    debugMode: debugMode,
};