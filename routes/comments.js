const express = require('express');
const fakeComments = require('../data/comments');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const postId = Number(req.params.postId);
  const postComments = fakeComments.filter((comment) => comment.post_id === postId);
  res.json(postComments);
});

router.get('/', (req, res) => {
  const tagId = Number(req.params.tagId);
  const tagComments = fakeComments.filter((comment) => comment.tag_id === tagId);
  res.json(tagComments);
});


module.exports = router;