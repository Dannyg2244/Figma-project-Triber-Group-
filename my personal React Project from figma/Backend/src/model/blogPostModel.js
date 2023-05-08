import Mongoose from 'mongoose';

const schema = Mongoose.Schema;

export const blogPostSchema = new schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    publishedDate: {
      type: Date,
      default: Date.now
    },
    authorId: {
      type: schema.Types.ObjectId,
      ref: 'Author'
    }
  });

  const blogPostModel = Mongoose.model('blogPost', blogPostSchema);

  export default blogPostModel;

 