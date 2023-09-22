import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../data/data'

const Contact = () => {
  const lan = 'es'
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    setSending(true)
    const sender = {
      to: 'etipack@fagra.com.ar',
      from: 'etipack@fagra.com.ar',
      from_name: 'Etipack',
      subject: 'Contacto'
    }

    axios.post('https://etipack.com.ar/send-mail.php', { ...data, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-sm font-medium mt-1 text-primary'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <div className='w-full max-w-5xl m-auto p-6 py-12'>
          <span className='text-2xl font-bold'>{dataContact[lan].error}</span>
        </div>
      ) : sended ? (
        <div className='w-full max-w-5xl m-auto p-6 py-12'>
          <span className='text-3xl font-bold'>{dataContact[lan].thanks}</span>
        </div>
      ) : (
        <section id='contact'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full max-w-5xl m-auto p-6 py-12'>
              <div className='border border-gray-200 rounded-lg p-6'>
                <h1 className='mb-6 text-3xl font-semibold'>Nos encantaría saber de vos</h1>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div>
                    <input
                      className='w-full h-11 p-3 rounded-md border border-gray-200'
                      placeholder={dataContact[lan].name}
                      {...register('name', { required: true })}
                    />
                    {errors.name && <Error />}
                  </div>
                  <div>
                    <input
                      className='w-full h-11 p-3 rounded-md border border-gray-200'
                      placeholder={dataContact[lan].email}
                      {...register('email', { required: true })}
                    />
                    {errors.email && <Error />}
                  </div>
                </div>
                <div className='mb-4'>
                  <textarea
                    className='w-full p-3 rounded-md border border-gray-200'
                    placeholder={dataContact[lan].message}
                    {...register('message')}
                  />
                </div>

                <div>
                  {sending ? (
                    <BeatLoader className='mt-6' />
                  ) : (
                    <button
                      type='submit'
                      className='bg-black btn-nav-contact text-white px-8 py-2 rounded-lg hover:shadow-lg'
                    >
                      {dataContact[lan].send}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  )
}

export default Contact
