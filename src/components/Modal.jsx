import { useState } from 'react';
import lupa from '/public/image/lupa.svg'



export const Modal = ({ setShowModal, data, setSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const [countAdult, setCountAdult] = useState(0)
  const [countChild, setCountChild] = useState(0)

  const searchLocation = () => {
    const  rs = data.filter((item) => item.city.toLowerCase().includes(searchValue.toLowerCase())
  )
    setSearch(rs)
    setShowModal(false)
  }

  return (
    <header className="full_modal">
      <div className="modal">
        <div className="modal_container">
            <div className="modal_container_location">
                <span>LOCATION</span>
                <input
            className=""
            type="text"
            placeholder="Add location"
            value={data.ciy}
            onChange={(e) => setSearchValue(e.target.value)}
          />
            </div>

          <div className="modal_container_guest">
            <span>GUESTS</span>
            <input
            className=""
            type="number"
            placeholder="Add Guests"
          />
          <div className='guest_container'>
              <div className='guest_container_div'>
                <span >Adults</span>
                <span >Ages 13 or above</span>
                <div class="gest_butom">
                  <button onClick={() => setCountAdult(countAdult - 1 ? 0 : 0)}>-</button>
                  <span >{countAdult}</span>
                  <button onClick={() => setCountAdult(countAdult + 1)} >+</button>
                </div>
              </div>
              <div  className='guest_container_div'>
                <span >Children</span>
                <span >Ages 2-12</span>
                <div class="gest_butom">
                  <button onClick={() => setCountChild(countChild - 1 ? 0 : 0)}>-</button>
                  <span >{countChild}</span>
                  <button onClick={() => setCountChild(countChild + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal_container_button">
             <button  
             onClick={searchLocation}>
                <img src={lupa} alt="icono lupa " /> Search
             </button>
        </div>
 
        </div>
      </div>
    </header>
  );
};
