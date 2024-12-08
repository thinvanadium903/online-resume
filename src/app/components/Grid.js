import Link from "next/link";
import '../styles/Grid.css'

function Grid() {
    return (
        <div className='group-of-four'>
            <div className='group-of-two'>
                <div className='singular' id='resume'>
                    <a href='https://drive.google.com/file/d/1l2E_mP3rzWOF9Q19oS1zr6lHn6_pjZ93/view?usp=sharing'>See My Resumé</a>
                    <h2>📄</h2>
                </div>
                <div className='singular' id='cover-letter'>
                    <a href='https://drive.google.com/file/d/1uAQ5zjlafLGPoscUQe8w2hGDm2e0wFKL/view?usp=sharing'>See A Sample Cover Letter</a>
                    <h2>🪶</h2>
                </div>
            </div>
            <div className='group-of-two'>
                <div className='singular' id='transcript'>
                    <a href='https://drive.google.com/file/d/1kvJzbpPq1woLxVEGVZuKtp52gRf5yNjS/view?usp=sharing'>See My Transcript</a>
                    <h2>📝</h2>
                </div>
                <div className='singular' id='projects'>
                    <a href='/projects'>Read About My Projects</a>
                    <h2>🔨</h2>
                </div>
            </div>
        </div>
    )
}

export default Grid;