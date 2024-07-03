

export default function CardList({ children, data }) {


    return (
        <main className="Main">
        <h2 className="main_h2"> Stay in any accomodation {data.city}</h2>
            <ul className="Card_list">
            {children}
            </ul> 
        </main>
    )
}