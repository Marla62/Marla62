import Pet from "./Pet";

function Results({pets}) {
    return (
        <div className="search">
            { 
                !pets.length ?
                (<h2>Not Pet Found</h2>) :
                (
                    pets.map((pet) => (
                        <Pet
                          name={pet.name}
                          animal={pet.animal}
                          breed={pet.breed}
                          id={pet.id}
                          key={pet.id}
                          images={pet.images}
                          location={`${pet.city},${pet.state}`}
                        />

                        // <Pet {...pet} key={pet.id} />
                      ))
                ) 
            }
        </div>
           
    )
}

export default Results;
