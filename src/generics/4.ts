type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): Partial<User> {
  if (Object.keys(initialValues).length === 0) {
    throw new Error('At least one field must be provided.');
  }
  return { ...initialValues };
}

console.log(
  createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123',
  })
);
