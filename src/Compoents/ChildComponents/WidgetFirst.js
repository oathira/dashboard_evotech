import styles from '../../Css/widgetMiddle.module.css';
function WidgetFirst() {
    return (
      <div className={styles.widgetFirst}>
        <div className={styles.widgetFirstLeft}>
             <div className={styles.widgetfistTop}>
                
                    <p>Categories</p>
                    <button>Export</button>
            
            
                 <svg xmlns="http://www.w3.org/2000/svg" width="628" height="70" viewBox="0 0 628 70" fill="none">
                 <path d="M-7.5 25.5001C44.3989 0.184442 72.1663 0.0489518 119.472 25.5001L154.327 46.5001C204.23 75.6568 230.364 73.5491 274.66 46.5001L328.603 14.0001C356.946 -1.4673 373.884 -1.87389 405.782 14.0001L468.023 51.5001C501.313 69.374 518.887 69.6275 548.522 51.5001L591.676 25.5001C607.304 16.1804 616.503 15.4595 634 25.5001" stroke="#952B37" stroke-opacity="0.1" stroke-width="4"/>
                 </svg>
             </div>
             
        </div>
        <div className={styles.widgetFirstRight}></div>
        
       </div>
    );
  }
  
  export default WidgetFirst;
  