import React from 'react';
import styles from '../styles/Footer.module.css';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import ReportIcon from '@mui/icons-material/Report';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div className={` ${styles.footer_parent}`}>
                <div className={styles.footer_flexparent}>

                    <div className={styles.footer_flexbox1}>
                        <h4>Our Aim</h4>
                        <p>
                            We plan on providing the community alot of swags and merchandise at an affordable price.
                        </p>
                    </div>

                    <div className={styles.footer_flexbox2}>
                        <h4>Contact Us</h4>
                        <p>Feel free to reach out to us</p>
                        <div className={styles.footer_flexbox2_icons}>
                            <EmailIcon className={styles.footer_icons} />
                            <TwitterIcon className={styles.footer_icons} />
                            <FacebookIcon className={styles.footer_icons} />

                        </div>
                    </div>

                    <div className={styles.footer_flexbox3}>
                        <h4>Got something to report ?</h4>
                        <p>You can submit a report to us by filling a form below !</p>
                        {/* <ReportIcon className={styles.footer_icons} /> */}
                        <div className={styles.footer_reportbuttondiv}>
                            <button type="submit" className={`btn btn-warning ${styles.footer_report_button}`}>Report us</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer