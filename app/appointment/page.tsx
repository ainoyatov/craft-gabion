import CalendlyBooking from '@/components/calendars/CalendlyBooking'
import { Suspense } from 'react'


const Appointment = () => {
  return (
    <Suspense>
      <CalendlyBooking />
    </Suspense>
  )
}

export default Appointment