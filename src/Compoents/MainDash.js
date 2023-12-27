import Header from "./ChildComponents/header";
import Sunheader from "./ChildComponents/Sunheader";
import Tabs from "./ChildComponents/Tabs";
import WidgetBottom from "./ChildComponents/WidgetBottom";
import WidgetsMiddle from "./ChildComponents/WidgetsMiddle";
function MainDash() {
    return (
      <div className="mainDash">
        <Header/>
        <Sunheader/>
        <Tabs/>
        <WidgetsMiddle/>
        <WidgetBottom/>

       </div>
    );
  }
  
  export default MainDash;