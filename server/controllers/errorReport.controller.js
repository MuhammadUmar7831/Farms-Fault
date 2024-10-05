import Error from "../models/error.model.js";
export async function addError(req, res, next) {
    const { type, photos, description, points, location } = req.body;
    const userId = req.userId;
    if (!type || !photos || !description || !points || !location || !location.longitude || !location.latitude) {
      return res.status(400).send({ message: "All fields are required" });
    }
    console.log(req.body);
    const existingError = await Error.findOne({
      userId,
      type,
      "location.longitude": Number(location.longitude),
      "location.latitude": Number(location.latitude), 
    });
    if (existingError) {
      return res.status(400).send({ message: "Error with this location and type already exists for this user" });
    }

    const newError = new Error({
      type,
      photos,
      description,
      points,
      location: {
        longitude: Number(location.longitude), // Ensure this is a number
        latitude: Number(location.latitude), // Ensure this is a number
      },
      userId,
    });
    await newError.save();
    return res.status(201).send({ message: "Error added successfully", data: newError });
  
}
export function getError(req, res, next) {
  return res.status(200).send({ message: "Daniyal Work" });
}
