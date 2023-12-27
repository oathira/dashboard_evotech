import styles from '../../Css/tabs.module.css';

function Tabs() {
    return (
      <div className={styles.tabs}>
        <div className={styles.tab1}>
           <svg xmlns="http://www.w3.org/2000/svg" width="85" height="81" viewBox="0 0 85 81" fill="none">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4387 10.125C14.8864 10.125 14.4387 10.5727 14.4387 11.125V69.875C14.4387 70.4273 14.8864 70.875 15.4387 70.875H23.9635C24.5158 70.875 24.9635 70.4273 24.9635 69.875V11.125C24.9635 10.5727 24.5158 10.125 23.9635 10.125H15.4387ZM32.98 10.125C32.4277 10.125 31.98 10.5727 31.98 11.125V69.875C31.98 70.4273 32.4277 70.875 32.98 70.875H41.5048C42.057 70.875 42.5048 70.4273 42.5048 69.875V11.125C42.5048 10.5727 42.057 10.125 41.5048 10.125H32.98Z" fill="#B5B5C3"/>
           <rect opacity="0.3" width="10.4831" height="61.0087" rx="1" transform="matrix(0.949275 -0.314446 0.336987 0.941509 47.687 13.2442)" fill="#B5B5C3"/>
            </svg>
            <p  className={styles.text}>SaaS Application</p>
        </div>
        <div className={styles.tab1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="81" viewBox="0 0 71 81" fill="none">
  <rect x="12.0042" y="13.5" width="20.501" height="23.625" rx="1.5" fill="#B5B5C3"/>
  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M38.3626 15C38.3626 14.1716 39.0342 13.5 39.8626 13.5H57.3637C58.1921 13.5 58.8637 14.1716 58.8637 15V35.625C58.8637 36.4534 58.1921 37.125 57.3637 37.125H39.8626C39.0342 37.125 38.3626 36.4534 38.3626 35.625V15ZM12.0042 45.375C12.0042 44.5466 12.6757 43.875 13.5042 43.875H31.0052C31.8336 43.875 32.5052 44.5466 32.5052 45.375V66C32.5052 66.8284 31.8336 67.5 31.0052 67.5H13.5041C12.6757 67.5 12.0042 66.8284 12.0042 66V45.375ZM39.8626 43.875C39.0342 43.875 38.3626 44.5466 38.3626 45.375V66C38.3626 66.8284 39.0342 67.5 39.8626 67.5H57.3637C58.1921 67.5 58.8637 66.8284 58.8637 66V45.375C58.8637 44.5466 58.1921 43.875 57.3637 43.875H39.8626Z" fill="#B5B5C3"/>
</svg>
            <p  className={styles.text}>Main
Categories</p>
        </div>
        <div className={styles.highlighttab}>
        <svg className={styles.highlightsvg}xmlns="http://www.w3.org/2000/svg" width="99" height="71" viewBox="0 0 99 71" fill="none">
  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.6313 10.875C16.6313 9.77043 17.5268 8.875 18.6313 8.875H80.4788C81.5834 8.875 82.4788 9.77043 82.4788 10.875V60.125C82.4788 61.2296 81.5834 62.125 80.4788 62.125H18.6313C17.5268 62.125 16.6313 61.2296 16.6313 60.125V10.875ZM20.7468 15.2917C20.7468 15.0155 20.9707 14.7917 21.2468 14.7917H28.4777C28.7539 14.7917 28.9777 15.0155 28.9777 15.2917V20.2083C28.9777 20.4845 28.7539 20.7083 28.4777 20.7083H21.2468C20.9707 20.7083 20.7468 20.4845 20.7468 20.2083V15.2917ZM70.6324 14.7917C70.3563 14.7917 70.1324 15.0155 70.1324 15.2917V20.2083C70.1324 20.4845 70.3563 20.7083 70.6324 20.7083H77.8633C78.1395 20.7083 78.3633 20.4845 78.3633 20.2083V15.2917C78.3633 15.0155 78.1395 14.7917 77.8633 14.7917H70.6324ZM20.7468 27.125C20.7468 26.8489 20.9707 26.625 21.2468 26.625H28.4777C28.7539 26.625 28.9777 26.8489 28.9777 27.125V32.0417C28.9777 32.3178 28.7539 32.5417 28.4777 32.5417H21.2468C20.9707 32.5417 20.7468 32.3178 20.7468 32.0417V27.125ZM70.6324 26.625C70.3563 26.625 70.1324 26.8489 70.1324 27.125V32.0417C70.1324 32.3178 70.3563 32.5417 70.6324 32.5417H77.8633C78.1395 32.5417 78.3633 32.3178 78.3633 32.0417V27.125C78.3633 26.8489 78.1395 26.625 77.8633 26.625H70.6324ZM20.7468 38.9583C20.7468 38.6822 20.9707 38.4583 21.2468 38.4583H28.4777C28.7539 38.4583 28.9777 38.6822 28.9777 38.9583V43.875C28.9777 44.1511 28.7539 44.375 28.4777 44.375H21.2468C20.9707 44.375 20.7468 44.1511 20.7468 43.875V38.9583ZM70.6324 38.4583C70.3563 38.4583 70.1324 38.6822 70.1324 38.9583V43.875C70.1324 44.1511 70.3563 44.375 70.6324 44.375H77.8633C78.1395 44.375 78.3633 44.1511 78.3633 43.875V38.9583C78.3633 38.6822 78.1395 38.4583 77.8633 38.4583H70.6324ZM70.1324 50.7917C70.1324 50.5155 70.3563 50.2917 70.6324 50.2917H77.8633C78.1395 50.2917 78.3633 50.5155 78.3633 50.7917V55.7083C78.3633 55.9845 78.1395 56.2083 77.8633 56.2083H70.6324C70.3563 56.2083 70.1324 55.9845 70.1324 55.7083V50.7917ZM21.2468 50.2917C20.9707 50.2917 20.7468 50.5155 20.7468 50.7917V55.7083C20.7468 55.9845 20.9707 56.2083 21.2468 56.2083H28.4777C28.7539 56.2083 28.9777 55.9845 28.9777 55.7083V50.7917C28.9777 50.5155 28.7539 50.2917 28.4777 50.2917H21.2468Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6699 43.8885C43.6699 44.2587 44.0582 44.5005 44.3904 44.3372L59.1754 37.0725C59.5475 36.8896 59.5482 36.3593 59.1765 36.1755L44.3915 28.8649C44.0592 28.7006 43.6699 28.9424 43.6699 29.3131V43.8885Z" fill="white"/>
</svg>
            <p className={styles.highlighttext}>Video
Tutorials</p>
        </div>
        <div className={styles.tab1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="86" viewBox="0 0 84 86" fill="none">
  <rect opacity="0.3" x="45.5" y="14.3333" width="10.5" height="57.3333" rx="2" fill="#B5B5C3"/>
  <rect x="28" y="32.25" width="10.5" height="39.4167" rx="2" fill="#B5B5C3"/>
  <rect x="63" y="39.4167" width="10.5" height="32.25" rx="2" fill="#B5B5C3"/>
  <rect x="10.5" y="46.5833" width="10.5" height="25.0833" rx="2" fill="#B5B5C3"/>
</svg>
            <p  className={styles.text}>Sales
Statistics</p>
        </div>
        <div className={styles.tab1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="75" viewBox="0 0 96 75" fill="none">
  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.8691 12.5L47.2345 7.85588C47.4287 7.82712 47.6261 7.82712 47.8204 7.85588L79.1857 12.5V49.4123C79.1857 53.5992 76.8087 57.4232 73.0541 59.2763L47.97 71.6566C47.691 71.7943 47.3638 71.7943 47.0849 71.6566L22.0007 59.2763C18.2461 57.4232 15.8691 53.5992 15.8691 49.4123L15.8691 12.5Z" fill="#B5B5C3"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M44.2625 46.0938C43.3144 46.0938 42.3663 45.7943 41.6078 45.1953L34.023 39.2057C32.506 38.0078 32.506 36.2109 34.023 35.013C35.5399 33.8151 38.005 33.8151 39.3323 35.013L44.2625 38.9062L56.7774 29.0234C58.2943 27.8255 60.5698 27.8255 62.0867 29.0234C63.6037 30.2214 63.6037 32.0182 62.0867 33.2161L46.9171 45.1953C46.1587 45.7943 45.2106 46.0938 44.2625 46.0938Z" fill="#B5B5C3"/>
</svg>
            <p className={styles.text}>ARC
Security</p>
        </div>
      </div>
    );
  }
  
  export default Tabs;
  