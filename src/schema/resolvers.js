import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaType.ObjectId;

module.exports = {
  Query: {
    allLinks: async (parent, args, { Links }) => await Links.find(),
  },
  Mutation: {
    createLink: async (parent, args, { Links }) => await new Links(args).save()
  }
}

// module.exports = {
//   Query: {
//     allLinks: () => async (root, data, {mongo: {Links}}) => {
//       return await Links.find({}).toArray();
//     },
//   },
//
//   Mutation: {
//     createLink: async (root, data, {mongo: {Links}}) => {
//       const response = await Links.insert(data);
//       return Object.assign({id: response.insertedIds[0]}, data);
//     },
//   },
//
//   Link: {
//     id: root => root._id || root.id,
//   },
// };
