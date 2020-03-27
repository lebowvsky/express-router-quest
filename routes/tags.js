const express = require('express');
const router = express.Router({mergeParams:true});

const tags = require('../data/tags');
const fakePosts = require('../data/posts');

// GET /api/tags
router.get('/', (req, res) => {
    res.json(tags);
})

router.get('/:tagId/posts', (req, res) => {
    const tagId = Number(req.params.tagId);
    const foundTag = tags.find((tag) => tag.id === tagId);

    const goodsIdPosts = fakePosts.filter(elt => elt['tag_ids'] == tagId);
   
    res.send(goodsIdPosts);
    
})


module.exports = router;