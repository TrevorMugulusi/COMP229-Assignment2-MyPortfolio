import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  initialContactFormData,
  validateContactForm,
} from '../utils/contactValidation.js'

/** Short delay so the pending state on the button is visible. */
const SUBMIT_DELAY_MS = 800
/** Delay between the success message and the redirect back to the home page. */
const REDIRECT_DELAY_MS = 1500

const textFields = [
  { name: 'firstName', label: 'First Name', type: 'text', autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last Name', type: 'text', autoComplete: 'family-name' },
  { name: 'contactNumber', label: 'Contact Number', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email' },
]

/**
 * Contact form required by the assignment.
 *
 * There is no backend, so a valid submission is handled locally: the button is
 * disabled while "sending", a success message is shown, and the visitor is then
 * sent back to the Home page with React Router. To connect a real backend later,
 * replace the code inside the first setTimeout with a fetch request.
 */
export function ContactForm() {
  const navigate = useNavigate()

  // Every value the visitor types is held in React state.
  const [contactFormData, setContactFormData] = useState(initialContactFormData)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleFieldChange(event) {
    const { name, value } = event.target
    setContactFormData((previousData) => ({ ...previousData, [name]: value }))

    // Remove the error for a field as soon as the visitor starts correcting it.
    setFormErrors((previousErrors) => {
      if (!previousErrors[name]) return previousErrors
      const nextErrors = { ...previousErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault()

    const validationErrors = validateContactForm(contactFormData)
    setFormErrors(validationErrors)

    // Stop here if anything is missing or invalid.
    if (Object.keys(validationErrors).length > 0) {
      const firstInvalidField = Object.keys(validationErrors)[0]
      document.getElementById(firstInvalidField)?.focus()
      return
    }

    setIsSubmitting(true)

    // Simulated submission — no server and no email service involved.
    window.setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Send the visitor back to the home page as required by the assignment.
      window.setTimeout(() => navigate('/'), REDIRECT_DELAY_MS)
    }, SUBMIT_DELAY_MS)
  }

  if (isSubmitted) {
    return (
      <div className="form-success" role="status">
        <h2 className="form-success__title">Thank you</h2>
        <p>
          Your message has been sent. Taking you back to the home page&hellip;
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
      {Object.keys(formErrors).length > 0 && (
        <p className="form-error-summary" role="alert">
          Please correct the highlighted fields and try again.
        </p>
      )}

      {textFields.map((field) => {
        const errorMessage = formErrors[field.name]

        return (
          <div className="form-field" key={field.name}>
            <label className="form-field__label" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              className={`form-field__input${errorMessage ? ' has-error' : ''}`}
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={contactFormData[field.name]}
              onChange={handleFieldChange}
              aria-invalid={errorMessage ? 'true' : undefined}
              aria-describedby={errorMessage ? `${field.name}-error` : undefined}
              disabled={isSubmitting}
              required
            />
            {errorMessage && (
              <p className="form-field__error" id={`${field.name}-error`}>
                {errorMessage}
              </p>
            )}
          </div>
        )
      })}

      <div className="form-field">
        <label className="form-field__label" htmlFor="message">
          Message
        </label>
        <textarea
          className={`form-field__input${
            formErrors.message ? ' has-error' : ''
          }`}
          id="message"
          name="message"
          rows="6"
          value={contactFormData.message}
          onChange={handleFieldChange}
          aria-invalid={formErrors.message ? 'true' : undefined}
          aria-describedby={formErrors.message ? 'message-error' : undefined}
          disabled={isSubmitting}
          required
        />
        {formErrors.message && (
          <p className="form-field__error" id="message-error">
            {formErrors.message}
          </p>
        )}
      </div>

      <button className="button button--primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit'}
      </button>
    </form>
  )
}
