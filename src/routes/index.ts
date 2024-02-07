import { Router }from 'express';
const router = Router();


import {createPhoto, getPhotos} from '../controllers/photo.controller'
import multer from '../libs/multer'

router.route('/photo')
.post(multer.single('image'),createPhoto)  //crear una foto
 .get(getPhotos);

export default router;
