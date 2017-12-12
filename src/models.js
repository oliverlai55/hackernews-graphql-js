import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaType.ObjectId;

mongoose.promise = global.promise;

const LinksSchema = new Schema({
  url: {type: 'String', require: true},
  description: {type: 'String', require: true}
})

// I guess this is where I define another collection?
const UsersSchema = new Schema({
  name: {type: 'String', require: true},
  email: {type: 'String', require: true},
  password: {type: 'String', require: true}
})

const Links = mongoose.model('Links', LinksSchema);
const Users = mongoose.model('Users', UsersSchema);

module.exports = {
  Links,
  Users
}
// export default Links;
// export default Users;
