
export default function CardList({ children }) {

    return (
        <main className="main-container">
            <ul className="Card_list">
            {children}
            </ul>
            
        </main>
    )
}