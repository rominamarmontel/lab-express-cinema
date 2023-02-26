const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

router.get('/movies', async (req, res, next) => {
  try {
    const allMovies = await Movie.find()
    res.render('movie/movies', { movies: allMovies })
    //res.json(allMovies)
  } catch (error) {
    next(error)
  }
})

router.get('/movies/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.json(movie)
    console.log(movie)

    if (!movie) {
      return res.render('not-found')
    }
    res.render('movie/movie-detail', movie)
  } catch (error) {
    next(error)
  }
})

module.exports = router
