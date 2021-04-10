const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie', 
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov', 
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ],
    philosophy: [
      'Friedrich Nietzsche',
      'Platon',
      'Aristotle'
    ],
  },
    [Symbol.iterator](){
      // this gets the values of all the authors within allAuthors.
      //returns and array with 3 arrays.

      const genres = Object.values(this.allAuthors);
      let currentAuthorIndex = 0
      let currentGenreIndex = 0


      return{
        next(){
          const authorsInCurrentGenre = genres[currentGenreIndex]
          const noMoreAuthorsInGenre = !(currentAuthorIndex < authorsInCurrentGenre.length)
          if(noMoreAuthorsInGenre){
            // move to next genre
            currentGenreIndex++;
            // reset author index to 0
            currentAuthorIndex = 0
          }
          // check if there are not more genres left
          const noMoreGenres = !(currentGenreIndex < genres.length)
          
          if(noMoreGenres){
            // if no more genres return done true to stop iterator
            return {
              value: undefined,
              done: true
            }
          }
          return {
            // return and increment currentAuthorIndex so we can get the next author
            value: genres[currentGenreIndex][currentAuthorIndex++],
            done: false

          }

        }
        // end of next
      }
      // end of return

    }
  
};

module.exports = myFavouriteAuthors