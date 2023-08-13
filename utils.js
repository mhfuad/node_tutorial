const { User, Role } = require('./models')
const resolveUserRoles =async (id) => {
  //Would query DB
  const user = await User.findByPk(id, {include: Role})
  console.log(user);
  //return userWithRole.roles
  // const user = await User.findByPk(1)
  // const role = await Role.findByPk(1)
  // await user.addRole(role);
  const users = await User.findAll({ 
    include: {
      model: Role,
      include: {
        model: Permission,
      },
    },
  },);
  const formattedUsers = users.map((user) => {
    const roles = user.Roles.map((role) => {
      return {
        roleName: role.name,
        permissions: role.Permissions.map((permission) => permission.name),
      };
    });

    return {
      username: user.username,
      roles,
    };
  });

  res.send(formattedUsers);
}

module.exports = {
  resolveUserRoles
}