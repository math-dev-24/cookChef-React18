export default function PageManagement({ actualyPage, pageCount, setPage }) {

    function incPage() {
        if (actualyPage < pageCount) {
            setPage(x => x + 1)
        }
    }
    function decPage() {
        if (actualyPage > 1) {
            setPage(x => x - 1)
        }
    }

    return (
        <>
            <div className="flex content-center items-center">
                <div className="flex border-orange-600 text-orange-600 content-center items-center hover:bg-orange-500 hover:border-white hover:text-white rounded-l-lg duration-300 transition p-2 border cursor-pointer"
                    onClick={decPage}><i className="fa-solid fa-arrow-left"></i></div>
                <div className="p-2 mx-2">{actualyPage}</div>
                <div className="flex border-orange-600 text-orange-600 content-center items-center hover:bg-orange-500 hover:border-white hover:text-white rounded-r-lg duration-300 transition p-2 border cursor-pointer"
                    onClick={incPage}><i className="fa-solid fa-arrow-right"></i></div>
                {actualyPage !== pageCount && <div className="mx-2">sur {pageCount}</div>}
            </div>
        </>
    )
}