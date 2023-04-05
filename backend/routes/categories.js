const express = require('express')
const Category = require('../models/Category')
const router = express.Router()

// Post Categories
router.post('/', async (req, res) => {
  const newCategory = new Category(req.body)
  try {
    const savedCategory = await newCategory.save()
    res.status(200).json(savedCategory)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get Categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
