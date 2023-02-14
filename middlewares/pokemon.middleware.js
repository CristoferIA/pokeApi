const Pokemon = require('../models/pokemon.model');

exports.validateExistPokemon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({
      where: {
        id,
        status: 'enabled',
      },
    });

    if (!pokemon) {
      return res.status(404).json({
        status: 'error',
        message: 'Pokemon not fount',
      });
    }
    req.pokemon = pokemon;
    next();
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Internal server error',
    });
  }
};
