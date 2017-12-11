import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaType.ObjectId;

mongoose.promise = global.promise;

const LinksSchema = new Schema({
  url: {type: 'String', require: true},
  description: {type: 'String', require: true}
})

const Links = mongoose.model('Links', LinksSchema);

export default Links;
