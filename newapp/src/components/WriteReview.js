import React, {Component} from 'react'
import ReviewForm from './ReviewForm'
import MovieCard from './Movie container/card'





export default class NewApp extends Component {
    constructor(props)
    super(props)
    
   
    //add review

    addReview = (newReview) => {
        const movieReview = {
            id: this.state.movieList[this.state.movieList.length-1].id + 1,
            type: newReview

        }
    }
    
    //add copy of array
    updateReview = (idToUpdate)=> {
        const updateThisReview = this.state.movieList.find(movie.id === idToUpdate)
        const index = this.state.movieList.indexOf(movieToUpdate);

        const copyOfMovieList = this.state.movieList.slice()
        copyOfMovieList[index]=copyOfMovie;

        this.setState({movieList: copyOfMovieList})
    }
    //remove review
    removeReview = (idToDelete) => {
        this.setState({movieList: this.state.movieList.filter(movie => movie.id !== idToDelete)})
    }

    render (){
        return (
            <Div>
                {this.state.movie}
                {this.props.ReviewForm}
                <ReviewForm addReview={this.addReview} />
                <MovieCard movieList={this.state.movieList} 
                removeReview={this.removeReview} 
                updateReview={this.updateReview} />
            </Div>
        )
    }

}

function newFunction() {
    return this
}
