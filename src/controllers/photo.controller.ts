import { Request, Response } from "express";
import photo from "../models/photo";

export function getPhotos(req: Request, res: Response) {}

export async function createPhoto(req: Request, res: Response) {
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
    message: "Photo created successfully",
  });
}
