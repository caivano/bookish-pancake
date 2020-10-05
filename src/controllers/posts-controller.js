const mongoose = require('mongoose');
const Post = mongoose.model('Post');

// list
exports.listPosts = async (req, res) => {
  try {
    const data = await Post.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as posts.'});
  }
};

// create
exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      text: req.body.text
    });

    console.log(post)

    await post.save();

    res.status(201).send({message: 'Post criado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao criar post.'});
    console.log(e)
  }
};