import Image from "next/image"
import logo from '../public/images/logo.png'
import styles from './Header.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
    return (
        <>

            <div className={styles.header}>
                <div className={styles.left}>
                    <Image src={logo} alt="NextZon logo" />
                    <h1>NextZon</h1>
                </div>

                <div className={styles.right}>
                    <button><ShoppingCartIcon /></button>
                </div>
            </div>
            
        </>
    )
}