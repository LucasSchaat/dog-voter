const dogs = [
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS1BpxgmU8dZtUcZM9ZhCLH0MVGioF9jOuVeSUeKJorZqblc6Zw',
        rating: 1
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS1BpxgmU8dZtUcZM9ZhCLH0MVGioF9jOuVeSUeKJorZqblc6Zw',
        rating: 1
    }
]

let id = 2

module.exports = {
    favoriteDogs(req, res) {
        res.status(200).send(dogs)
    },
    updateRating(req, res) {
        let { id } = req.params
        let { newRating } = req.query
        let index = dogs.findIndex( dog => dog.id === +id)
        dogs[index].rating = +newRating
        res.status(200).send(dogs)
    },
    addDog(req, res) {
        let { image } = req.body
        let newDog = {
            image,
            id,
            rating: 1
        }
        id++
        dogs.push(newDog)
        res.status(200).send(dogs)
    },
    deleteDog(req, res) {
        let { id } = req.params
        let index = dogs.findIndex( dog => dog.id === +id)
        index !== -1  && dogs.splice(index, 1)
        res.status(200).send(dogs)
    }
}