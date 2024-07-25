
const express = require('express');
const googleTTS = require('google-tts-api');
const http = require('http');
const cors = require('cors');
class RedirectServer{
  constructor() {
    this.setupServer();
  }
  setupServer() {
    this.app = express();
    this.server = http.createServer( this.app );
    this.server.listen( 3000, function listening(){
        console.log("say started");
    });
    this.app.use(cors());
    this.app.get('/say/:something(*)', (req, res) => {
      const data = googleTTS.getAudioBase64(req.params.something,{
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
        timeout: 10000,
      })
      .then(data => res.send(data))
      .catch(console.error);
    })
  }
}

const redirectServer = new RedirectServer(); 

