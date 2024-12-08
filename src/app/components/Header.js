import '../styles/Header.css'
import Link from 'next/link';

function Header() {
    return (
        <header>
            <div className='everything'>
                <div id='group-1'>
                    <div className='button-container' id='container-1'>
                        <button id='contact'><Link href='/contact'>Contact Me</Link></button>
                    </div>
                </div>
                
                <div id='group-2'>
                    <div className='button-container' id='container-2'>
                        <button id='github'><Link href='https://github.com/thinvanadium903'>My GitHub Profile</Link></button>
                    </div>
                    <div className='button-container' id='container-3'>
                        <button id='linkedin'><Link href='https://www.linkedin.com/in/parker-brademann80/'>LinkedIn</Link></button>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;