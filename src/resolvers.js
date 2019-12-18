// const users = [
//   { id: 1, name: "Rafael", email: "andersonrafaelferreira@gmail.com" },
//   { id: 2, name: "Ferreira", email: "freela.tech@gmail.com" }
// ];

const User = require("./User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
    checkUser: (_, { email }) => {
      console.log(User.findOne({ email }));
      return User.findOne({ email });
    }
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      let userExists = await User.findOne({ email });
      if (userExists == null) {
        return User.create({ name, email });
      }
    }
  }
};
