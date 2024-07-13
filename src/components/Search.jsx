import searchLogo from '/public/image/search.svg'

export const Search = ({setShowModal }) => {



  return (
    <>
      <div className="search">

        <input
          className='location'
          id="location"
          type="text"
          placeholder="Add location"
          value=''
          onClick={() => setShowModal(true)}
        />

        <input
          className='guest'
          id="guest"
          type="text"
          placeholder="Add Guests"
          value=''
          onClick={() => setShowModal(true)}
          readOnly
          />

        <button>
          <img src={searchLogo} alt="icono lupa " />
        </button>

      </div>


    </>
  )
}


