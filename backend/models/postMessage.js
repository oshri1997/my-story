import mongoose from "mongoose";
import moment from "moment";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: [String],
    default: [],
  },
  createAt: {
    type: Date,
    default: moment(),
  },
});

const PostMessage = mongoose.model("postMessage", postSchema);

export default PostMessage;
