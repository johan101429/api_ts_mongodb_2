import { Request, Response, response } from "express";
import photo from "../models/photo";
import path from "path";
import fs from "fs-extra"
export async function getPhotos(req: Request, res: Response): Promise<Response> {
  const photos = await photo.find();
  return res.json(photos);

}

export async function getphoto(req:Request, res:Response): Promise<Response> {
  const {id} = req.params; 
  const Photo= await photo.findById(id);
 
  
  return res.json(Photo);
  
}
export async function createPhoto(req: Request, res: Response): Promise<Response> {
  const { title, description } = req.body;
  console.log(req.file?.path);
  console.log(req.body);

  const newPhoto = {
    title: title,
    description: description,
    imagePath: req.file?.path,
  };
  const photos = new photo(newPhoto);
  await photos.save();

  return res.json({
    message: "Photo created successfully", photos
  });
};
export async function deletephoto(req:Request,res:Response): Promise<Response> {
const {id} = req.params;
 const Photo = await photo.findByIdAndDelete(id);
 if (Photo) {
  await fs.unlink(path.resolve(Photo.imagePath))
  
 }
  return res.json({
    message: 'photo deteted',Photo
  })
}


export async function updatePhoto(req:Request,res:Response): Promise<Response> {
  const {id} = req.params;
  const { title,description}=req.body;
  const updatePhoto = await photo.findByIdAndUpdate(id ,{
    title,
    description
  })




  return res.json({
    message: 'photo updated',updatePhoto
  })
}