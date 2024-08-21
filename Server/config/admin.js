module.exports = ({ env }) => {
  console.log('API_TOKEN_SALT:', env('API_TOKEN_SALT'));
  console.log('JWT_SECRET:', env('JWT_SECRET'));

  return {
    auth: {
      secret: env('JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT', 'Sf8TQ5mU4+OYn01oaNxu/Q=='),
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  };
};
