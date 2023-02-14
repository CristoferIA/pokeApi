const { Router } = require('express');
const {
  createPokemon,
  findPokemons,
  findPokemon,
  updatePokemon,
  deletePokemon,
} = require('../controllers/pokemon.controller');
const { validateExistPokemon } = require('../middlewares/pokemon.middleware');

const router = Router();

router.get('/', findPokemons);
router.get('/:id', validateExistPokemon, findPokemon);
router.post('/', createPokemon);
router.patch('/:id', validateExistPokemon, updatePokemon);
router.delete('/:id', validateExistPokemon, deletePokemon);

module.exports = {
  pokemonRouter: router,
};
