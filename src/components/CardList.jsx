

export default function CardList({ children, search}) {


    return (
        <main className="Main">
        <h2 className="main_h2"> Stay in any accomodation {search.city}</h2>
            <ul className="Card_list">
            {children}
            </ul> 
        </main>
    )
} 