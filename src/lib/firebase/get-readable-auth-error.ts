export const getReadableAuthError = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'The email you entered isn’t connected to any account.';
    case 'auth/wrong-password':
      return 'The password you’ve entered is incorrect.';
    case 'auth/email-already-in-use':
      return 'That email address is already in use';
    default:
      return '';
  }
};
