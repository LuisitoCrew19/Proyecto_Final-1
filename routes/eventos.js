const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const Post = require('../models/eventos');

var urlencodedParer=bodyParser.urlencoded({ extended: true });
//get back all posts
router.get('/', async (req,res) =>{
    try{
         const posts = await Post.find();
         res.json(posts);
    } catch (err) {
         res.json({message: err});
    }

});
  //submit posts
   router.post('/', urlencodedParer ,async (req,res) => {
     const post = new Post({
        Codigo_Evento: req.body.Codigo_Evento,
        Descripcion_Evento: req.body.Descripcion_Evento
       
     });
     try{
     const savedPost = await post.save();
      res.json(savedPost);
     }catch{
         res.json({message: err});
     }
     res.render('/eventos', {data: req.body})
   });

   //Specific post
   router.get('/:postId', async (req,res) => {
        try{
        const post = await Post.findById(req.params.postId);
        res.json(post);

        } catch (err){
              res.json({message: err});
        }
   });

   //Delete post

   router.delete('/:postId', async (req,res) =>{
       try{
       const removedPost = await Post.remove({_id: req.params.postId});
       res.json(removedPost);
       } catch (err) {
        res.json({message: err});
       }
   });

   //updatePost

   router.patch('/:postId', async (req,res) => {
       try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {Codigo_Evento:req.body.Codigo_Evento}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }
       res.redirect('/eventos');
   });


  module.exports = router;