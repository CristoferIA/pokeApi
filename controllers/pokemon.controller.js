const Pokemon = require('../models/pokemon.model');

exports.findPokemons = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findAll({
      where: {
        status: 'enabled',
      },
    });
    return res.status(200).json({
      status: 'success',
      message: 'Pokemon was found successfully',
      pokemon,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Internal server error',
    });
  }
};

exports.findPokemon = async (req, res, next) => {
  try {
    const { pokemon } = req;
    return res.status(200).json({
      status: 'success',
      message: 'Pokemon was found successfully',
      pokemon,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Internal server error',
    });
  }
};

exports.updatePokemon = async (req, res, next) => {
  try {
    const { pokemon } = req;
    const { name, image, status } = req.body;
    await pokemon.update({ name, image, status });
    return res.status(200).json({
      status: 'success',
      message: 'Pokemon update successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Internal server error',
    });
  }
};

exports.createPokemon = async (req, res, next) => {
  try {
    const { name, image } = req.body;
    const pokemon = await Pokemon.create({ name, image });
    return res.status(201).json({
      status: 'success',
      message: 'Pokemon created successfully',
      pokemon,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Internal server error',
    });
  }
};

exports.deletePokemon = async (req, res, next) => {
  try {
    const { pokemon } = req;
    await pokemon.update({ status: 'disabled' });
    return res.status(200).json({
      status: 'success',
      message: 'Pokemon deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Internal server error',
    });
  }
};
