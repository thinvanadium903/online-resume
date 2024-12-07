import '../styles/Header.css'
import Link from 'next/link';

function Header() {
    return (
        <header>
            <div className='everything'>
                <div id='group-1'>
                    <div className='button-container' id='container-1'>
                        <button id='contact'>Contact Me</button>
                    </div>
                </div>
                
                <div id='group-2'>
                    <div className='button-container' id='container-2'>
                        <button id='github'>My GitHub Profile</button>
                    </div>
                    <div className='button-container' id='container-3'>
                        <button id='linkedin'>LinkedIn</button>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header;