import React, { useCallback, useMemo, useState } from 'react'

export default {
  title: 'useCallback'
}
//
// COMPONENT
//
// use CALLBACK

type SecretBooksType = {
  books: Array<string>
  addBook: () => void
}

const SecretBooks = (props: SecretBooksType) => {
  console.log('SecretBooks rendered')
  return (
    <div>
      {props.books.map((b, i) => (
        <div key={i}>{b}</div>
      ))}
      <button
        onClick={() => {
          props.addBook()
        }}
      >
        Add book
      </button>
    </div>
  )
}

const Book = React.memo(SecretBooks)

export const LikeUseCallback = () => {
  // BLL
  console.log('LikeUseCallback rendered')

  let [counter, setCounter] = useState(0)
  let [books, setBooks] = useState(['React', 'JS', 'Alphabet'])

  // новый отфильтрованный мемоизированный массив книг.
  const newArray = useMemo(() => {
    return books.filter(item => item.indexOf('a') > -1)
  }, [books])
  //

  // в случае с функцией можно использовать useMemo()
  // будет сложный синтаксис

  const memoisedAddBook = useMemo(() => {
    return () => {
      console.log('books rendered')
      const newBooks = [...books, 'Angular' + new Date().getTime()]
      setBooks(newBooks)
    }
  }, [books])

  // но лучше использовать useCallBack()

  const memoisedAddBook2 = useCallback(() => {
    console.log('useCallback called')
    const newBooks = [...books, 'Angular' + new Date().getTime()]
    setBooks(newBooks)
  }, [books])

  // const addBook = () => {
  //   const newBooks = [...books, 'Angular' + new Date().getTime()]
  //   setBooks(newBooks)
  // }

  // UI
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Increment
      </button>

      {counter}
      <Book books={newArray} addBook={memoisedAddBook2} />
    </>
  )
}
