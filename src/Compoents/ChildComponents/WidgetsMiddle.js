import styles from '../../Css/widgetMiddle.module.css';
import WidgetFirst from './WidgetFirst';
import WidgetSecond from './WidgetSecond';

function WidgetsMiddle() {
    return (
      <div className={styles.widgetMiddle}>
         <WidgetFirst/>
         <WidgetSecond/>
       </div>
    );
  }
  
  export default WidgetsMiddle;
  