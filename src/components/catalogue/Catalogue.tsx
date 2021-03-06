import {useState} from 'react'
import BookComponent from './BookComponent'
import {Book} from '../../types/Book'
const books: Book[] =[
	{id: 1, title: 'Sagan Om Ringen', author:'J.R.R Tolkein'},
	{id: 2, title: 'DaVinci Koden', author:'Dan Brown'},
	{id: 3, title: '1984', author:'George Orwell'},
	{id: 4, title: 'Liftarens Guide Till Galaxen', author:'Douglas Adams'},
	{id: 5, title: 'Glasblåsarens Barn', author:'Maria Gripe'},
	{id: 6, title: 'Hata Dig Själv, Som Du Hatar Andra', author:'Oliver Dagnå'},
	{id: 7, title: 'Harry Potter Och Flammande Bägaren', author:'J.K Rowling'}
]
interface Props {
	handleBookBorrowed: (book: Book) => void
}
const Catalouge = ({handleBookBorrowed}: Props) =>{
	const [bookList, setBookList] = useState(books)
	const borrowBook = (borrowedBook: Book) =>{
		let newList = bookList.filter(
			book => book.id !== borrowedBook.id
		)
		setBookList(newList)
		handleBookBorrowed(borrowedBook)
	}
	 return (
	<section className="border">
	   <h1>Catalouge</h1>
		   <div className="flex-container">
		   {bookList.map(book => <BookComponent book={book} borrowBook={borrowBook} key={book.id}/>)}
		</div>
	</section>
  )
}
export default Catalouge
