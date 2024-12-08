import Link from "next/link";
import '../styles/Grid.css'

function Grid() {
    return (
        <div className='group-of-four'>
            <div className='group-of-two'>
                <div className='singular' id='resume'>
                    <a href='../media/Parker Brademann Resume.pdf' download={'Parker Brademann Resume.pdf'}>Download My Resumé</a>
                    <h2>📄</h2>
                </div>
                <div className='singular' id='cover-letter'>
                    <a href='../media/Cover Letter.pdf' download={'Cover Letter.pdf'}>Download A Sample Cover Letter</a>
                    <h2>🪶</h2>
                </div>
            </div>
            <div className='group-of-two'>
                <div className='singular' id='transcript'>
                    <a href='../media/Unofficial Transcript.pdf' download={'Unofficial Transcript.pdf'}>See My Transcript</a>
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