import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import temp from './convertHTML';
import Pagination from './Pagination';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

function TableData() {
    //console.log(temp)
    const [start, setStart] = useState(true)
    const [search, setSearch] = useState('')
    const [reverseNameOrder, setReverseNameOrder] = useState(false)
    const [alphaNameOrder, setAlphaNameOrder] = useState(false)
    const [reversePositonOrder, setReversePositionOrder] = useState(false)
    const [alphaPositionOrder, setAlphaPositionOrder] = useState(false)
    const [reverseOfficeOrder, setReverseOfficeOrder] = useState(false)
    const [alphaOfficeOrder, setAlphaOfficeOrder] = useState(false)
    const [reverseAgeOrder, setReverseAgeOrder] = useState(false)
    const [ageOrder, setAgeOrder] = useState(false)
    const [reverseStartDateOrder, setReverseStartDateOrder] = useState(false)
    const [alphaStartDateOrder, setAlphaStartDateOrder] = useState(false)
    const [reverseSalaryOrder, setReverseSalaryOrder] = useState(false)
    const [salaryOrder, setSalaryOrder] = useState(false)
    let totalEntries = temp.length
    //const [filteredTable, setFilteredTable] = useState(temp)

    //const [numOfRows, setNumOfRows] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const lastRowIndex = currentPage * rowsPerPage
    const firstRowIndex = lastRowIndex - rowsPerPage
    let currentRows = temp.slice(firstRowIndex, lastRowIndex)

    const getReverseNameOrder = () => {
        /*  setReverseNameOrder(!reverseNameOrder)
         setStart(false) */
        setReverseNameOrder(true)
        setAlphaNameOrder(false)
        setStart(false)
        let sorted = temp.sort((a, b) => b.Name.localeCompare(a.Name))

        console.log(sorted)
    }
    const getAlphaNameOrder = () => {
        /* setAlphaNameOrder(!alphaNameOrder)
        setStart(false) */
        setReverseNameOrder(false)
        setAlphaNameOrder(true)
        setStart(false)
        let sorted = temp.sort((a, b) =>
            a.Name.localeCompare(b.Name)
        )
        console.log(sorted)
    }

    const getReversePositionOrder = () => {
        setReversePositionOrder(true)
        setAlphaPositionOrder(false)
        setStart(false)
        let sorted = temp.sort((a, b) => b.Position.localeCompare(a.Position))

        console.log(sorted)
    }
    const getAlphaPositionOrder = () => {
        setReversePositionOrder(false)
        setAlphaPositionOrder(true)
        setStart(false)
        let sorted = temp.sort((a, b) =>
            a.Position.localeCompare(b.Position)
        )
        console.log(sorted)
    }

    const getReverseOfficeOrder = () => {
        setReverseOfficeOrder(true)
        setAlphaOfficeOrder(false)
        setStart(false)
        let sorted = temp.sort((a, b) => b.Office.localeCompare(a.Office))

        console.log(sorted)
    }
    const getAlphaOfficeOrder = () => {
        setReverseOfficeOrder(false)
        setAlphaOfficeOrder(true)
        setStart(false)
        let sorted = temp.sort((a, b) =>
            a.Office.localeCompare(b.Office)
        )
        console.log(sorted)
    }

    const getReverseAgeOrder = () => {
        setReverseAgeOrder(true)
        setAgeOrder(false)
        setStart(false)
        let sorted = temp.sort((a, b) => b.Age - a.Age)

        console.log(sorted)
    }
    const getAgeOrder = () => {
        setReverseAgeOrder(ageOrder)
        setAgeOrder(true)
        setStart(false)
        let sorted = temp.sort((a, b) =>
            a.Age - b.Age
        )
        console.log(sorted)
    }


    const getReverseStartDateOrder = () => {
        setReverseStartDateOrder(true)
        setAlphaStartDateOrder(false)
        //console.log(temp.sort((a, b) => a['Start date'] - b['Start date']))
        setStart(false)
        // let sorted = [...currentRows].sort((a, b) => b['Start date'] - a['Start date'])
        let regex = /(-)+/g
        let sorted = temp.sort((a, b) =>
            Number(b['Start date'].replace(regex, '')) - Number(a['Start date'].replace(regex, ''))
        )
        console.log(sorted)
    }
    const getAlphaStartDateOrder = () => {
        setReverseStartDateOrder(false)
        setAlphaStartDateOrder(true)
        setStart(false)
        let regex = /(-)+/g
        let sorted = temp.sort((a, b) =>
            Number(a['Start date'].replace(regex, '')) - Number(b['Start date'].replace(regex, ''))
        )
        console.log(sorted)
    }

    const getReverseSalaryOrder = () => {
        setReverseSalaryOrder(true)
        setSalaryOrder(false)
        setStart(false)
        //let withoutDollars = []
        let regex = /(,)+/g
        /*  temp.map((x) => {
             withoutDollars.push(Number(x.Salary.substring(1,).replace(regex, '')))
         })
         withoutDollars = withoutDollars.sort((a, b) => a - b) */

        //console.log(withoutDollars)
        let sorted = temp.sort((a, b) => Number(b.Salary.substring(1,).replace(regex, '')) - Number(a.Salary.substring(1,).replace(regex, '')))

        console.log(sorted)
    }
    const getSalaryOrder = () => {
        setReverseSalaryOrder(false)
        setSalaryOrder(true)
        setStart(false)
        let regex = /(,)+/g
        let sorted = temp.sort((a, b) => Number(a.Salary.substring(1,).replace(regex, '')) - Number(b.Salary.substring(1,).replace(regex, '')))

        /* let sorted = temp.sort((a, b) =>
            a.Salary - b.Salary
        ) */
        console.log(sorted)
    }

    //console.log(currentRows)
    const handleSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
    }

    const rowsToDisplay = (event) => {
        setRowsPerPage(event.target.value)
    }
    console.log(
        'start: ' + start,
        '\nreverseNameOrder: ' + reverseNameOrder,
        '\nalphaNameOrder: ' + alphaNameOrder,

        '\nreversePositonOrder: ' + reversePositonOrder,
        '\nalphaPositionOrder: ' + alphaPositionOrder,

        '\nreverseOfficeOrder: ' + reverseOfficeOrder,
        '\nalphaOfficeOrder: ' + alphaOfficeOrder,

        '\nreverseAgeOrder: ' + reverseAgeOrder,
        '\nageOrder: ' + ageOrder,

        '\nreverseStartDateOrder: ' + reverseStartDateOrder,
        '\nalphaStartDateOrder: ' + alphaStartDateOrder,

        '\nreverseSalaryOrder: ' + reverseSalaryOrder,
        '\nsalaryOrder: ' + salaryOrder)
    return (
        <>
            <div className='controls'>
                <div className="select"><label>Show <select name="tableLength"
                    aria-controls="table" className="" id="itemperpage" onChange={rowsToDisplay}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> entries</label></div>
                <label htmlFor='search' className='search'>

                    <input onChange={handleSearch} type='search' placeholder="Search..." aria-label="Search"></input>
                </label>
            </div>
            <Table striped bordered hover variant="dark" className='table'>
                <thead >
                    <tr>
                        <th className='tableHeader'>Name
                            <div>
                                <button onClick={getAlphaNameOrder}>
                                    <AiOutlineArrowUp className='icon' />
                                </button>
                                <button onClick={getReverseNameOrder}>
                                    <AiOutlineArrowDown className='icon' />

                                </button>
                            </div>
                        </th>
                        <th className='tableHeader'>Position
                            <div>
                                <button onClick={getAlphaPositionOrder}>
                                    <AiOutlineArrowUp className='icon' />
                                </button>
                                <button onClick={getReversePositionOrder}>
                                    <AiOutlineArrowDown className='icon' />

                                </button>
                            </div>
                        </th>
                        <th className='tableHeader'>Office
                            <div>
                                <button onClick={getAlphaOfficeOrder}>
                                    <AiOutlineArrowUp className='icon' />
                                </button>
                                <button onClick={getReverseOfficeOrder}>
                                    <AiOutlineArrowDown className='icon' />

                                </button>
                            </div>
                        </th>
                        <th className='tableHeader'>Age
                            <div>
                                <button onClick={getAgeOrder}>
                                    <AiOutlineArrowUp className='icon' />
                                </button>
                                <button onClick={getReverseAgeOrder}>
                                    <AiOutlineArrowDown className='icon' />

                                </button>
                            </div>
                        </th>
                        <th className='tableHeader'>Start date  <div>
                            <button onClick={getAlphaStartDateOrder}>
                                <AiOutlineArrowUp className='icon' />
                            </button>
                            <button onClick={getReverseStartDateOrder}>
                                <AiOutlineArrowDown className='icon' />

                            </button>
                        </div></th>
                        <th className='tableHeader'>Salary  <div>
                            <button onClick={getSalaryOrder}>
                                <AiOutlineArrowUp className='icon' />
                            </button>
                            <button onClick={getReverseSalaryOrder}>
                                <AiOutlineArrowDown className='icon' />

                            </button>
                        </div></th>
                    </tr>
                </thead>
                <tbody>
                    {/*                  <tr>
                        <td>{!alphaNameOrder ? 'false' : 'true'} reverse: {!reverseNameOrder ? 'false' : 'true'}</td>
                        <td>{alphaNameOrder} reverse: {reverseNameOrder}</td>
                        <td>{alphaNameOrder} reverse: {reverseNameOrder}</td>
                        <td>{alphaNameOrder} reverse: {reverseNameOrder}</td>
                        <td>{alphaNameOrder} reverse: {reverseNameOrder}</td>
                        <td>{alphaNameOrder} reverse: {reverseNameOrder}</td>
                    </tr> */}
                    {
                        start &&
                        currentRows.filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        alphaNameOrder &&
                        [...currentRows].sort((a, b) =>
                            a.Name.localeCompare(b.Name)
                        ).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        reverseNameOrder &&
                        [...currentRows].sort((a, b) =>
                            b.Name.localeCompare(a.Name)
                        ).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        alphaPositionOrder &&
                        [...currentRows].sort((a, b) => a.Position.localeCompare(b.Position)).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        reversePositonOrder &&
                        [...currentRows].sort((a, b) => b.Position.localeCompare(a.Position)).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        alphaOfficeOrder &&
                        [...currentRows].sort((a, b) =>
                            a.Office.localeCompare(b.Office)
                        ).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        reverseOfficeOrder &&
                        [...currentRows].sort((a, b) =>
                            b.Office.localeCompare(a.Office)
                        ).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        ageOrder &&
                        [...currentRows].sort((a, b) => a.Age - b.Age).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        reverseAgeOrder &&
                        [...currentRows].sort((a, b) => b.Age - a.Age).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        alphaStartDateOrder &&
                        [...currentRows].sort((a, b) =>
                            a['Start date'] - b['Start date']
                        ).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        reverseStartDateOrder &&
                        [...currentRows].sort((a, b) =>
                            b['Start date'] - a['Start date']
                        ).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        salaryOrder &&
                        [...currentRows].sort((a, b) => b.Salary - a.Salary).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        !start &&
                        reverseSalaryOrder &&
                        [...currentRows].sort((a, b) => b.Salary - a.Salary).filter((item) => {
                            if (search === '') {
                                return item
                            }
                            else if (item.Name.toLowerCase().includes(search) ||
                                item.Position.toLowerCase().includes(search) ||
                                item.Office.toLowerCase().includes(search) ||
                                item.Age.toLowerCase().includes(search) ||
                                item['Start date'].toLowerCase().includes(search) ||
                                item.Salary.toLowerCase().includes(search)) {
                                return item
                            }
                        }).map((x, i) => {
                            // console.log(x)
                            return (
                                <tr key={i}>
                                    <td>{x.Name}</td>
                                    <td>{x.Position}</td>
                                    <td>{x.Office}</td>
                                    <td>{x.Age}</td>
                                    <td>{x['Start date']}</td>
                                    <td>{x.Salary}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </tfoot>
            </Table>
            <Pagination
                totalRows={temp.length}
                rowsPerPage={rowsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalEntries={totalEntries}
                firstRowIndex={firstRowIndex}
                lastRowIndex={lastRowIndex} />
            {/*    <div>Showing _ to _ of {total} entries </div> */}
        </>
    );
}

export default TableData;