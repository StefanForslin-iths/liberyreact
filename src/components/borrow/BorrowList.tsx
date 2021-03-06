//import {useState} from 'react'
import {Book} from '../../types/Book'
import BookComponent from './BookComponent'
interface Props {
	borrowed: Book[]
}
const BorrowList = ({borrowed}: Props) => {
    return (
	<section className="border">
	  <h1> My borrowed books</h1>
	   <div className="flex-container">
	   {borrowed.map(book => <BookComponent book={book} key={book.id} />)}
	</div>
</section>
)}
export default BorrowList
