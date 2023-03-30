const resovlers = {
  Query: {
    async getUser(root, { username }, { models }) {
      return models.User.findByPk(username);
    },
  },
  Mutation: {
    async createUser(root, { username, evm_address }, { models }) {},
  },
};
