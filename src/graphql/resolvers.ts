import uuid4 from "uuid4";

const resovlers = {
  Query: {
    async getUser(root, { username }, { models }) {
      return models.User.findByPk(username);
    },
  },
  Mutation: {
    async createUser(root, { username, evm_address }, { models }) {
      const id = uuid4();
      const [user, create] = await models.User.findOrCreate({
        where: {
          username,
        },
        default: {
          id,
          username,
          evm_address,
        },
      });
    },
  },
};
