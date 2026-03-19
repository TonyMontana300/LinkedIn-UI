import User from "../models/User.js";

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const { name, headline, location, profileImage, coverImage } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({message: "User not found!"});

    user.name = name || user.name;
    user.headline = headline || user.headline;
    user.location = location || user.location;
    user.profileImage = profileImage || user.profileImage;
    user.coverImage = coverImage || user.coverImage;

    const updatedUser = await user.save();
    res.json(updatedUser);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
