const useGenre = (ids, genre) => {
    return genre ?.  genre.find(el => el.id === ids?.el.name)
}

export {useGenre}