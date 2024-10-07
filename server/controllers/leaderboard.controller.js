
import User from "../models/user.model.js";
import Leaderboard from "../models/leaderboard.model.js";
import Error from "../models/error.model.js";

export const getLeaderboardUsers = async (req, res) => {
    const usersWithPoints = await User.aggregate([
        {
          $lookup: {
            from: "leaderboard", // Join with the leaderboard collection
            localField: "_id",   // Match user _id with leaderboard userId
            foreignField: "userId",
            as: "pointsData"     // Output array of points data
          }
        },
        {
          $unwind: {
            path: "$pointsData",  // Unwind pointsData to merge user and leaderboard data
            preserveNullAndEmptyArrays: true // Keep users without points
          }
        },
        {
          $project: {
            _id: 0,                // Exclude _id from the output
            userId: "$_id",        // Include userId
            firstName: 1,          // Include firstName
            lastName: 1,           // Include lastName
            avatar: 1,             // Include avatar
            totalPoints: { $ifNull: ["$pointsData.totalPoints", 0] } // Get totalPoints or default to 0
          }
        }
      ]).toArray(); // Convert cursor to array
  
      console.log("Users with Points: ", usersWithPoints);
  
      // Step 2: Send the response
      res.status(200).json(usersWithPoints);
  };
  
