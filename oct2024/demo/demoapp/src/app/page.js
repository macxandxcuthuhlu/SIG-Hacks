export default async function Page() {
  let data = await fetch('https://api.vercel.app/pokemon')
  let posts = await data.json()
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Pokemons</h1>
      
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.name}</h1>
            
            <img src={`https://img.pokemondb.net/artwork/${post.name.toLowerCase()}.jpg`} alt={post.name} />

            <p>{post.type}</p>
          </div>
        ))}
      </div>
  )
}