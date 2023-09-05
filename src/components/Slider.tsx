import { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { imagesList } from '../data/data'
import Modal from './Modal'

const Slider = ({ category, title }: { category: Number; title: String }) => {
  const [currentImage, setCurrentImage] = useState(null)

  const handelCLick = item => {
    setCurrentImage(item)
  }

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  const buttonStyle1 = {
    width: '30px',
    background: 'none',
    border: '0px',
    marginRight: '-25px'
  }
  const buttonStyle2 = {
    width: '30px',
    background: 'none',
    border: '0px',
    marginLeft: '-25px'
  }
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          fill='#CCC'
          height='40'
        >
          <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle1 }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
          fill='#CCC'
          height='40'
        >
          <path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z' />
        </svg>
      </button>
    ),
    transitionDuration: 400,
    autoplayInterval: 5000,
    indicator: false,
    autoplay: false
  }
  return (
    <>
      <div className='w-full max-w-5xl m-auto px-6 py-10'>
        <h1 className='text-3xl font-semibold mb-8'>{title}</h1>
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          responsive={responsiveSettings}
          {...properties}
        >
          {imagesList
            .filter(item => item.category === category)
            .map((item, index) => (
              <div
                className='p-2 cursor-pointer hover:opacity-70 transition-all '
                key={index}
                onClick={() => handelCLick('./images/' + item.file)}
              >
                <img
                  src={`/images/${item.file}`}
                  className='aspect-square object-cover w-full rounded-xl border'
                />
              </div>
            ))}
        </Slide>
      </div>
      {currentImage && (
        <Modal
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      )}
    </>
  )
}

export default Slider
