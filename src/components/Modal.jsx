const Modal = ({ currentImage, setCurrentImage }) => {
  const handelClick = e => {
    if (e.target.classList.contains('dismiss')) {
      setCurrentImage(null)
    }
  }
  return (
    <div
      className='fade-in fixed bg-black/80 h-screen w-screen top-0 left-0 grid place-items-center dismiss z-50'
      onClick={handelClick}
    >
      <img
        src={currentImage}
        alt='Bigger picture'
        className='h-4/5'
      />
      <span
        className='absolute top-8 right-8 text-white font-bold text-3xl cursor-pointer hover:text-black dismiss'
        onClick={handelClick}
      >
        X
      </span>
    </div>
  )
}

export default Modal
