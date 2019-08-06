import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    bio: {
      type: String
    },
    avatar: {
      type: String,
      required: true
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model("User", UserSchema);
