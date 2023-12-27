import styles from '../../Css/sunheader.module.css';

function Sunheader() {
    return (
      <div className={styles.sunheader}>
         <div className={styles.left}>
          <p className={styles.dash}>Dashboard</p>
          <button className={styles.addNew}><span  className={styles.addNewText}>Add new</span></button>
         </div>
         <div className={styles.right}></div>
       </div>
    );
  }
  
  export default Sunheader;
  