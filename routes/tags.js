const express = require('express');
const fakesTags = require('../data/tags');
const fakePosts = require('../data/posts');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.json(fakesTags);
});

router.get('/:tagId/posts', (req, res) => {

  const tagId = Number(req.params.tagId);
  const foundTag = fakePosts.find((tag) => tag.id === tagId);
  
  if (!foundTag) {

    return res.status(404).json({
      error: 'Post not found',
    });
  }
  const filtPost = fakePosts.filter((post) => post.tag_ids.includes(tagId));

  res.json(filtPost);
});

module.exports = router;