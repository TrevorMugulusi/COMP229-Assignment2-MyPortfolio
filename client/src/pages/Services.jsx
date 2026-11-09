import { PageHeader } from '../components/PageHeader.jsx'
import { ServiceCard } from '../components/ServiceCard.jsx'
import { serviceList } from '../data/services.js'

/**
 * Services page: a short list of the capabilities listed on the resume. These
 * describe my own skills as a student, not a commercial business.
 */
export function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        description="The areas I can work in, based on my skills and previous experience."
      />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {serviceList.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
