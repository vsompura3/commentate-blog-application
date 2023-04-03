const express = require('express')
const User = require('../models/User')
const Post = require('../models/Post')
const router = express.Router()

// Create New Post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Update Post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true },
        )
        res.status(200).json(updatedPost)
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You are the not author of this post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.username === req.body.username) {
      try {
        await post.deleteOne()
        res.status(200).json('Post has been deleted...')
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You are the not author of this post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get Post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get All Post
router.get('/', async (req, res) => {
  const username = req.query.user
  const category = req.query.cat
  try {
    let posts
    if (username) {
      posts = await Post.find({ username })
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      })
    } else {
      posts = await Post.find()
    }
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
