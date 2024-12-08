import Header from "../components/Header";
import '../styles/General.css'
import '../styles/Projects.css'

function App() {
    return (
        <body>
            <Header></Header>
            <h1 className='project-title'>Projects</h1>
            <p  className='project-p'>Below are some of the more notable projects I have completed, either during my time 
                at UGA or on my own. This section will be updated periodically.
            </p>
            <h2 className='project-subtitle'>Where My Dawgs At?</h2>
            <p className='project-p'>"Where My Dawgs At?" is a project that was made as part of a group project for 
                UGA's Software Development Course (CSCI4050). Users have the ability to upload 
                photos of their pets, leave 'likes' and comments on others' posts, or just browse 
                the site as a generic user.
            </p>
            <p className='project-p'>The link to the site is: </p>
            <a href='https://uga-pet-blog-3deb8.web.app/' className='project-link'>Where My Dawgs At?</a>
            <div id='pet-blog-demo'></div>
            <h2 className='project-subtitle'>DataGeeks Sports Blog</h2>
            <p className='project-p'>This is my personal blog site where I tell stories in the world 
                of sports that I find funny, historically good/bad, coincidental, or just 
                interesting. It's numbers-oriented, and stories feature an array of visualizations 
                or charts to illustrate key points.
            </p>
            <p className='project-p'>NOTE: this site is in progress! Articles are not yet complete 
                but they will be updated as I finish them.
                </p>
            <p className='project-p'>The link to the site is: </p>
            <a href='https://datageeks-sports-blog.vercel.app/' className='project-link'>DataGeeks Sports Blog</a>
            <div id='datageeks-demo'></div>
        </body>
        
    )
}

export default App;