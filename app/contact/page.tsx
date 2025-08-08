'use client'

import { AppLayout } from '../../components'
import { FixedImageSlider } from '../../components/ui/FixedImageSlider'
import { SendMailPopup } from '../../components/ui/SendMailPopup'
import { WorkHero } from '../../components/ui/WorkPage/WorkHero'
import { WorkProjects } from '../../components/ui/WorkPage/WorkProjectsV2'

export default function ContactPage() {
  return (
    <AppLayout
      title={"Business requests"}
      description={"Si necesitas un ecommerce en Shopify, tienes una tienda online que quieres escalar o estas cansado de lidiar con otras plataformas, estás en el mejor lugar posible."}>
      {/* <FixedImageSlider /> */}
      <div className="contact__header">
        <div className="label">CONTACT</div>
        <h2 className='title'>Something in mind? Let's talk!</h2>
      </div>
      <section className="contact-section">
        <SendMailPopup />
        <div className="contact-section__column__block">
          <h4 className='title-medium'>Career opportunities</h4>
          <p>Are you passionate about building impactful e-commerce experiences?<br/>
            Either you are looking for a full-time position or a freelance eager to get on challenging projects, this is the place to be.<br/>
            Send us your CV or Portfolio and tell us a bit more about you.
          </p>
          <a href="mailto:careers@odein.io" className='link'>careers@odein.io</a>
        </div>
        <div className="contact-section__column__block">
          <h4 className='title-medium'>Partnerships</h4>
          <p>Either you are a software platform or an agency in other field, we are always open to collaborate with brands in the tech space.<br/>
            Feel free to reach out with any proposal!
          </p>
          <a href="mailto:info@odein.io" className='link'>info@odein.io</a>
        </div>
      </section>
    </AppLayout>
  )
} 