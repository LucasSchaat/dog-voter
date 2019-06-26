import React, {Component} from 'react'

class Dog extends Component {
    constructor(props) {
        super()
        this.state = {
            editing: false,
            rating: props.dog.rating
        }
    }

    flipEdit = () => {
        this.setState ({ editing: !this.state.editing })
    }

    saveChanges = () => {
        this.flipEdit()
        this.props.editDogRating(this.state.rating, this.props.dog.id)
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        let { dog } = this.props
        let { editing, rating } = this.state

        return (
        <div>
            <img src={dog.image} alt="6 dogs in a suitcase"/>
            {editing ? (
                <input value={rating} onChange={this.handleChange} name='rating' />
            ) : (
                <p>Rating: {dog.rating}</p>
            )}
            {editing ? (
                <button onClick={this.saveChanges}>Save Changes</button>
            ) : (
                <button onClick={this.flipEdit}>Edit Rating</button>
            )}
            <button onClick={e => this.props.deleteDog(dog.id)}>Delete Dog</button>
        </div>
        )
    }
}

export default Dog