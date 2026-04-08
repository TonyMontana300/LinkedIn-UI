import Comment from "../models/Comment.js";

export const createComment = async (req, res) => {
  try {

    console.group("Create Comment");
    console.log("User ID: ", req.user._id);
    console.log("Post ID: ", req.params.postId);
    console.log("Comment content: ", req.body.content);

    const { content } = req.body;
    const postId = req.params.postId;

    const comment = await Comment.create({
      content,
      user: req.user._id,
      post: postId,
    });

    console.log("Raw comment created: ", comment);

    const populatedComment = await comment.populate(
      "user",
      "name profileImage headline",
    );

    res.status(200).json(populatedComment);
    console.log("Populated comment: ", populatedComment);
    console.log("Populated user: ", populatedComment.user);
    console.groupEnd();

  } catch (error) {
    console.group("Create Comment Error");
    console.error(error);
    console.groupEnd();
    res.status(500).json({ message: error.message });
  }
};

export const getCommentsByPost = async (req, res) => {
  try {

    console.group(`Get Comments by Post: ${req.params.postId}`);

    const postId = req.params.postId;

    console.log("Sending response...");
    const comments = await Comment.find({ post: postId })
      .populate("user", "name profileImage headline")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
    console.log(`Comments count: `, comments.length);
    if (comments.length > 0) {
      console.log("First Comment: ", comments[0]);
      console.log("First Comment User: ", comments[0]?.user);
    }
    console.groupEnd();

  } catch (error) {
    console.group(`Get Comments by Post Error: ${req.params.postId}`);
    console.error(error);
    console.groupEnd();
    res.status(500).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);
    if (!comment)
      return res.status(404).json({ message: "Comment not found!" });
    if (comment.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not allowed" });
    await comment.deleteOne();
    res.status(200).json({ message: "Comment deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
