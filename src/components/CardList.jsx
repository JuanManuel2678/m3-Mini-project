
export default function CardList({ children }) {

    return (
        <main className="Main_container">
            <ul className="Card_list">
            {children}
            </ul> 
        </main>
    )
}