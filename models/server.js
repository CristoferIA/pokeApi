const express = require('express');
const cors = require('cors');
const { db } = require('../database/db');
const { pokemonRouter } = require('../routes/pokemon.route');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      pokemon: '/api/v1/pokemon',
    };
    this.database();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.paths.pokemon, pokemonRouter);

    this.app.all('*', (req, res) => {
      res.status(404).json({
        status: 'not fount',
        message: `¡Can't find ${req.originalUrl} on this server!`,
      });
    });
  }
  database() {
    db.authenticate()
      .then(() => console.log('database authenticated'))
      .catch(err => console.log(err));

    db.sync() // {force:true} :sincroniza los cambios de los models pero borra todos los datos
      .then(() => console.log('Database synced'))
      .catch(err => console.log(err));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }
}

module.exports = Server;
