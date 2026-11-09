import { PageHeader } from '../components/PageHeader.jsx'
import { ContactForm } from '../components/ContactForm.jsx'
import { personalInfo } from '../data/profile.js'

/** Contact Me page: contact details and the required message form. */
export function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Me"
        description="You can reach me by phone, email, or by using the form below."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="card contact-card">
            <h2 className="card__title">Contact Information</h2>

            <dl className="contact-card__list">
              <div>
                <dt>Location</dt>
                <dd>{personalInfo.location}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}>
                    {personalInfo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="card">
            <h2 className="card__title">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
