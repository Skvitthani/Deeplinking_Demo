import Toast from 'react-native-toast-message';

export const showToast = text => {
  Toast.show({
    type: 'success',
    text1: text,
  });
};

export function generateRandomId() {
  const timestampPart = new Date().getTime().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 10);

  return `${timestampPart}-${randomPart}`;
}
