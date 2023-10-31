import { useAnnouncement } from "@/contexts/announcementContext"
import styles from "./styles.module.scss"

const back: string =  "< Anterior"
const next: string = "Seguinte >"


const PaginationUserAnnouncements = (
  totalPages,
) => {

  //setpage
console.log(totalPages.totalPages)
  const { pageNumberPagination, setPageNumberPagination} = useAnnouncement()

  const nextPage = (pageNumberPagination: number) =>{
    let up: number = pageNumberPagination + 1
    setPageNumberPagination(up)
  }

  const previousPage = (pageNumberPagination: number) => {
    let down: number = pageNumberPagination - 1
    setPageNumberPagination(down)

  }

  return (

    <ul className={styles.ul_controller}>

      {pageNumberPagination === 1 ? (
        null
      ):
      
        <li>
              <button
                onClick={() => previousPage(pageNumberPagination)}
                disabled={pageNumberPagination === 1}
                type="button"
                className={styles.button}
              >
                {back}
              </button>
        </li>

      }
    


    <li>
        <span className={styles.page}>{pageNumberPagination}</span>  <span className={styles.total_page}>de {totalPages.totalPages}</span>
    </li>

   
    {pageNumberPagination === totalPages.totalPages ? (
      null
    ): 
    
      <li>
        <button
          onClick={() => nextPage(pageNumberPagination)}
          disabled={pageNumberPagination === totalPages.totalPages}
          type="button"
          className={styles.button}
        >
          {next}
        </button>
      </li>
    
    }
    
  </ul>
  )
}

export default PaginationUserAnnouncements