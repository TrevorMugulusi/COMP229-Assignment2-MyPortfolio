/**
 * Form validation helpers for the contact form. Kept outside the component so
 * the rules are testable and the JSX stays focused on rendering.
 */

// Pragmatic email check: something@something.tld — deliberately not stricter
// than RFC 5322, which rejects many valid real-world addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

/** Canadian and US friendly phone shape: digits, spaces, dashes, brackets. */
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/

export function validateEmail(email) {
  const value = email.trim()
  if (value.length === 0) return 'Email address is required.'
  if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address, for example name@example.com.'
  return ''
}

export function validatePhone(contactNumber) {
  const value = contactNumber.trim()
  if (value.length === 0) return 'Contact number is required.'
  if (!PHONE_PATTERN.test(value)) return 'Enter a valid contact number (digits, spaces, dashes or brackets only).'
  return ''
}

function validateRequired(value, label) {
  return value.trim().length === 0 ? `${label} is required.` : ''
}

/**
 * Validates the whole contact form at once and returns an object keyed by
 * field name. An empty object means the form is valid.
 */
export function validateContactForm(contactFormData) {
  const errors = {}

  const firstNameError = validateRequired(contactFormData.firstName, 'First name')
  if (firstNameError) errors.firstName = firstNameError

  const lastNameError = validateRequired(contactFormData.lastName, 'Last name')
  if (lastNameError) errors.lastName = lastNameError

  const phoneError = validatePhone(contactFormData.contactNumber)
  if (phoneError) errors.contactNumber = phoneError

  const emailError = validateEmail(contactFormData.email)
  if (emailError) errors.email = emailError

  const messageError = validateRequired(contactFormData.message, 'Message')
  if (messageError) {
    errors.message = messageError
  } else if (contactFormData.message.trim().length < 10) {
    errors.message = 'Please provide a little more detail (at least 10 characters).'
  }

  return errors
}

export const initialContactFormData = {
  firstName: '',
  lastName: '',
  contactNumber: '',
  email: '',
  message: '',
}
