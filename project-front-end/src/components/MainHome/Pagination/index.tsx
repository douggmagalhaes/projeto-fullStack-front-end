import React from 'react';
import styles from "./styles.module.scss"

const back: string =  "< Anterior"
const next: string = "Seguinte >"


const Pagination = ({
  totalPages, 
  page,
  setpage
}) => {
  

  return (
    <ul className={styles.ul_controller}>

      {page === 1 ? (
        null
      ):

      <li>
        <button
          onClick={() =>  setpage(page - 1)}
          disabled={page === 1}
          type="button"
          className={styles.button}
        >
          {back} 
        </button>
      </li>
      
      }
      

      <li>
        <span className={styles.page}>{page}</span>  <span className={styles.total_page}>de {totalPages}</span>
      </li>


      {page === totalPages ? (
        null
      ):
      <li>
        <button
          onClick={() => setpage(page + 1)}
          disabled={page === totalPages}
          type="button"
          className={styles.button}
        >
          {next}
        </button>
      </li>
      }
      
    </ul>
  );
};

export default Pagination;
