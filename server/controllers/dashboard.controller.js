import User from "../models/user.model.js";
import Leaderboard from "../models/leaderboard.model.js";
import Error from "../models/error.model.js"; // Assuming the Error model is properly imported

// Controller function to get user points, total errors, and rank
export const getUserStats = async (req, res) => {
  try {
    const { userId } = req.body; // Extract userId from request body

    // Check if the userId is provided
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }


    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the leaderboard entry for this user
    const leaderboardEntry = await Leaderboard.findOne({ userId: user._id });
    if (!leaderboardEntry) {
      return res.status(404).json({ message: "Leaderboard entry not found for this user" });
    }

    // Find the total errors the user has reported
    const totalErrors = await Error.countDocuments({ "location.longitude": { $exists: true }, userId: user._id });

    // Determine the user's rank based on total points
    const rank = await Leaderboard.countDocuments({ totalPoints: { $gt: leaderboardEntry.totalPoints } }) + 1;

    // Return the user statistics
    res.status(200).json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar:user.avatar,
      },
      stats: {
        totalPoints: leaderboardEntry.totalPoints,
        totalErrors,
        rank,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user statistics", error: error.message });
  }
};
