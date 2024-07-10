import lupa from '/public/image/lupa.svg'
export const Modal = ({ setShowModal }) => {
  return (
    <header className="full_modal">
      <div className="modal">
        <div className="modal_container">
            <div className="modal_container_location">
                <span>LOCATION</span>
                <input
            className=""
            id="location"
            type="text"
            placeholder="Add location"
            value=''
          />
            </div>

          <div className="modal_container_guest">
            <span>GUESTS</span>
            <input
            className=""
            id="guest"
            type="text"
            placeholder="Add Guests"
            value=''
          />
          </div>

          <div className="modal_container_button">
             <button  onClick={() => setShowModal(false)}>
                <img src={lupa} alt="icono lupa " /> Search
             </button>
        </div>
 
        </div>
      </div>
    </header>
  );
};
