import React from 'react'
import { useState } from 'react'
const Pagination = ({ totalRows, rowsPerPage, setCurrentPage, currentPage, firstRowIndex, lastRowIndex, totalEntries }) => {
    let pages = []
    const [isDisabled, setIsDisabled] = useState(false)
    //console.log(totalRows, rowsPerPage)
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pages.push(i)
    }
    // console.log(pages)
    return (
        <div className='pagination'>
            <button onClick={() => {
                if (currentPage - 1 > 0)
                    setCurrentPage(currentPage - 1)
            }}
                className={currentPage - 1 > 0 ? 'edge' : 'edge disabled'} >Previous</button>

            {
                pages.map((page, i) => {
                    return <button
                        className={page == currentPage ? 'center active' : 'center'}
                        key={i} onClick={() => setCurrentPage(page)}>{page}</button>
                })
            }

            <button onClick={() => {
                if (currentPage + 1 <= Math.ceil(totalRows / rowsPerPage))
                    setCurrentPage(currentPage + 1)
            }}
                className={currentPage < Math.ceil(totalRows / rowsPerPage) ? 'edge' : 'edge disabled'} >Next</button>
            <div className='bottomPagination'>
                Showing {firstRowIndex} to {lastRowIndex <= totalEntries ? lastRowIndex : totalEntries} of {totalEntries}
            </div>
        </div >
    )
}

export default Pagination