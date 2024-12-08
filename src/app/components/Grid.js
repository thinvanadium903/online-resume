import Link from "next/link";
import '../styles/Grid.css'

function Grid() {
    return (
        <div className='group-of-four'>
            <div className='group-of-two'>
                <div className='singular' id='resume'>
                    <p>Download My Resumé</p>
                    <h2>📄</h2>
                </div>
                <div className='singular' id='cover-letter'>
                    <p>Download My Cover Letter</p>
                </div>
            </div>
            <div className='group-of-two'>
                <div className='singular' id='transcript'>
                    <p>See My Transcript</p>
                </div>
                <div className='singular' id='projects'>
                    <p>Read About My Projects</p>
                </div>
            </div>
        </div>
    )
}

export default Grid;