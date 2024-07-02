import searchLogo from '/public/image/search.svg'

export const Search = ({ search, setSearch }) => {


  return (
    <>
      <div className="search">

        <input
          className='location'
          id="location"
          type="text"
          placeholder="Add location"
          value={search.fullLocation}
          // onClick={hanleLocationInputClick}
          onChange={(e) => setSearch({ ...search, fullLocation: e.target.value })}
        />

        <input
          className='gest'
          id="guest"
          type="text"
          placeholder="Add Guests"
          value={search.guests > 0 ? `${search.guests} guests` : ''}
          // onClick={handleGuestsInputclic}
          readOnly
          />

        <button>
          <img src={searchLogo} alt="icono lupa " />
        </button>

      </div>


    </>
  )
}


