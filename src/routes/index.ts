import { Router }from 'express';
const router = Router();


import {createPhoto, getPhotos,getphoto,deletephoto, updatePhoto} from '../controllers/photo.controller'
import multer from '../libs/multer'

router.route('/photo')
.get(getPhotos)
.post(multer.single('image'),createPhoto);  //crear una foto

router.route('/photo/:id')
    .get(getphoto)                    //traer una foto por id
    .delete(deletephoto) // se elimina la foto por id  
    .put(updatePhoto)           


export default router;
