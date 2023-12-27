import styles from '../../Css/sunheader.module.css';

function Sunheader() {
    return (
      <div className={styles.sunheader}>
         <div className={styles.left}>
          <p className={styles.dash}>Dashboard</p>
          <button className={styles.addNew}><span  className={styles.addNewText}>Add new</span></button>
         </div>
         <div className={styles.right}>

          <div>
            <button>
            Today
          </button>
          <button>
            Month
          </button>
          <button>
            Year
          </button>
          </div>
          
          <button>
           Actions
          </button>
         <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
  <path opacity="0.3" d="M9.56315 3.665H21.7063C22.0607 3.665 22.4037 3.79049 22.6744 4.01921L30.328 10.4857C30.6653 10.7707 30.8599 11.1899 30.8599 11.6315V30.8654C30.8599 33.5586 30.8291 33.7483 28.0634 33.7483H9.56315C6.79739 33.7483 6.7666 33.5586 6.7666 30.8654V6.54799C6.7666 3.85471 6.79739 3.665 9.56315 3.665Z" fill="#0ABB87"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3073 21.715L14.2956 21.715C13.4639 21.715 12.7898 21.0416 12.7898 20.2108C12.7898 19.3801 13.4639 18.7067 14.2956 18.7067L17.3073 18.7067L17.3073 15.6983C17.3073 14.8676 17.9814 14.1942 18.8131 14.1942C19.6447 14.1942 20.3189 14.8676 20.3189 15.6983L20.3189 18.7067L23.3306 18.7067C24.1622 18.7067 24.8364 19.3801 24.8364 20.2108C24.8364 21.0416 24.1622 21.715 23.3306 21.715L20.3189 21.715L20.3189 24.7233C20.3189 25.5541 19.6447 26.2275 18.8131 26.2275C17.9814 26.2275 17.3073 25.5541 17.3073 24.7233L17.3073 21.715Z" fill="#0ABB87"/>
</svg>
         </div>
       </div>
    );
  }
  
  export default Sunheader;
  