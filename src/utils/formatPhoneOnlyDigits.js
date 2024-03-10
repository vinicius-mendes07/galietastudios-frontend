export default function formatPhoneOnlyDigits(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '');
}
