const { User } = require('../../db');

const createNewUser = async (
  fullName,
  email,
  role,
  password,
  dni,
  gender,
  birthdate,
  phone,
  country,
  avatar,
  status,
  confirmEmail,
  thirdPartyCreated
) => {
  try {
    const newUser = await User.create({
      fullName,
      email,
      role,
      password,
      dni,
      gender,
      birthdate,
      phone,
      country,
      avatar,
      status,
      confirmEmail,
      thirdPartyCreated,
    });

    return newUser;

    // console.log('Prueba');
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      throw new Error('Validation error ' + error.message);
    }

    throw new Error('Failed to created a new user:' + error.message);
  }
};

module.exports = createNewUser;
