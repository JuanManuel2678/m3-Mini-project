import { Search } from "./Search"

export default function CardList({ children }) {
    // const city = search

    return (
        <main className="Main_container">




            <ul className="Card_list">
            {children}
            </ul> 
        </main>
    )
}