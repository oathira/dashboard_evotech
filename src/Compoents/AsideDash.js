import styles from '../Css/asideDash.module.css'

function AsideDash() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.topHead}>
            <h1 className={styles.mainHead}>DASHBOARD </h1>
            <svg className={styles.svg}xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
             <path d="M15.5158 8.13755C15.9863 7.66762 15.9863 6.90571 15.5158 6.43578C15.0454 5.96585 14.2826 5.96585 13.8122 6.43578L6.58416 13.6558C6.1281 14.1113 6.11214 14.8449 6.54796 15.3198L13.1736 22.5398C13.6232 23.0297 14.3852 23.0628 14.8757 22.6137C15.3661 22.1646 15.3992 21.4034 14.9497 20.9135L9.10341 14.5429L15.5158 8.13755Z" fill="#6993FF"/>
             <path opacity="0.3" d="M23.9486 8.13755C24.419 7.66762 24.419 6.90571 23.9486 6.43578C23.4781 5.96585 22.7154 5.96585 22.2449 6.43578L15.0169 13.6558C14.5608 14.1113 14.5449 14.8449 14.9807 15.3198L21.6064 22.5398C22.0559 23.0297 22.818 23.0628 23.3084 22.6137C23.7989 22.1646 23.832 21.4034 23.3824 20.9135L17.5362 14.5429L23.9486 8.13755Z" fill="#6993FF"/>
            </svg>
        </div>
     
        <p className={styles.subHead}>Dashboard</p>
        <p>CUSTOM</p>
        <p className={styles.subHead}>Applications</p>
      
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="98" viewBox="0 0 7 98" fill="none">
  <line x1="0.981934" y1="1.18002" x2="7.00527" y2="1.18002" stroke="#5B5D80"/><p className={styles.subItems}>users</p>
  <line x1="0.981934" y1="49.3133" x2="7.00527" y2="49.3133" stroke="#5B5D80"/>
  <line x1="0.981934" y1="97.4467" x2="7.00527" y2="97.4467" stroke="#5B5D80"/>
</svg>
        

       </div>
    );
  }
  
  export default AsideDash;