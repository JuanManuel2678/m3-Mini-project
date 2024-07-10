import searchLogo from '/public/image/search.svg'

export const Search = ({ search, setSearch, handleSearch,setShowModal }) => {



  return (
    <>
      <div className="search">

        <input
          className='location'
          id="location"
          type="text"
          placeholder="Add location"
          value={search.city}
          onClick={() => setShowModal(true)}
          onChange={(e) => setSearch({ ...search, city: e.target.value })}
        />

        <input
          className='guest'
          id="guest"
          type="number"
          min="1"
          max="10"
          placeholder="Add Guests"
          value={search.guest}
          onClick={() => setShowModal(true)}
          />

        <button onClick={handleSearch}>
          <img src={searchLogo} alt="icono lupa " />
        </button>

      </div>


    </>
  )
}


