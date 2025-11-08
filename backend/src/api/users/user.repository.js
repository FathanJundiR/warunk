const prisma = require("../../db/prisma");

class UserRepository {
  static async findById(userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }
  static async findUniqueBy(filter) {
    const users = await prisma.user.findUnique({
      where: filter,
    });
    return users;
  }

  static async createSingle(userData) {
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  }
}

module.exports = UserRepository;
