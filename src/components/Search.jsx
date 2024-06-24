

export const Search = () => {
  const [search, setSearch] = useState({ name: "" });
  return (
    <>
    <div className="search_container">
    <input
      type="text"
      placeholder="Search caracter"
      value={search.name}
      onChange={(e) => setSearch({ ...search, name: e.target.value })}
    />
    <select onChange={()=>setSearch()}>
      <option value="">Slect Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <button onClick={search_character}>Search</button>
  </div>
  

  </>
  )
}


