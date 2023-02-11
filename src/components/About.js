import React from 'react'
import PropTypes from 'prop-types'

function About(props) {
    var style = {
        color: props.theme === 'light' ? 'black' : '#e0e9f2',
        backgroundColor: props.theme === 'light' ? 'white' : '#131c23',
        borderColor: props.theme === 'light' ? 'black' : 'white'
    }

    return (
        <div className="container accordion my-5" id="accordionExample" style={{textAlign: 'justify'}}>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About HTML LI
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                            <strong>HTML (Hypertext Markup Language)</strong> is a standard markup language for creating 
                            web pages and web applications. HTML allows developers to create content, define structure, 
                            and add multimedia elements to web pages. It is the backbone of the modern web and is widely 
                            used for creating dynamic and interactive web pages. HTML is an essential tool for web developers 
                            and is used in conjunction with other web technologies such as CSS and JavaScript.
                        </p>
                        <p>
                            An HTML live interpreter is a website or online tool that allows developers to write and 
                            execute HTML code in real-time. These websites offer an interactive environment for 
                            developers to test and experiment with HTML code, without the need to set up a development 
                            environment or run code on a local machine. HTML live interpreters are a convenient way to 
                            quickly try out HTML code snippets, without having to worry about setting up a development 
                            environment or saving the code to a file.
                        </p>

                        <p>
                            In conclusion, HTML live interpreters are a valuable tool for web developers of all levels. 
                            They offer an interactive and accessible environment for testing and experimenting with HTML 
                            code, making it easier for developers to create dynamic and engaging web pages. HTML live 
                            interpreters also provide a convenient way to learn and practice HTML, and are an essential tool 
                            for any web developer looking to improve their skills and create innovative web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Benefits of Using an HTML Live Interpreter
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                            One of the key benefits of using an HTML live interpreter is the ability to instantly see the 
                            results of the code being written. This helps developers to quickly identify any issues or errors 
                            in their code and make necessary changes. The real-time feedback provided by HTML live interpreters 
                            also makes it easier for developers to understand the behavior of different HTML elements and how 
                            they interact with other web technologies such as CSS and JavaScript.
                        </p>
                        <p>
                            Another advantage of HTML live interpreters is the ease of use and accessibility. They are usually 
                            web-based and can be accessed from any device with an internet connection. This makes it convenient 
                            for developers to test and experiment with HTML code, regardless of their location. HTML live 
                            interpreters also eliminate the need to install any software or tools, making them an ideal solution 
                            for beginner and hobbyist developers.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        About Me
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                            <span role="img" aria-label="bye">👋</span> Hi, I'm <strong>Shubhranshu Gupta</strong>.<br/>
                            I have good knowledge & skills in the Latest and High-End Technologies like Machine Learning, 
                            Deep Learning, and Computer Vision. I love the integration of technologies as it helps us to learn 
                            many new things and also helps in improving our troubleshooting skills.I am a young, energetic, and 
                            geeky individual with an endless desire to learn.Apart from technical knowledge. Also, I like to play video 
                            games <span role="img" aria-label="console">🎮</span> and watch SciFi movies <span role="img" aria-label="movie">🎬</span> in my leisure time.
                        </p>

                        <span role="img" aria-label="pc">💻</span> <strong>My Technical Skills</strong>
                        <ul>
                            <li>
                                Artificial Intelligence: Machine Learning, Deep Learning, Data Science, Computer Vision
                            </li>
                            <li>
                                AI Tools: Sklearn, Tensorflow, Keras, Pandas, Matplotlib, Numpy, NLTK, Pytorch.
                            </li>
                            <li>
                                DevOps: Docker, Git, Github
                            </li>
                            <li>
                                Cloud Computing: AWS
                            </li>
                            <li>
                                Web Development: HTML, CSS, JS, Flask
                            </li>
                            <li>
                                Database: MySQL
                            </li>
                            <li>
                                Hardware: Arduino, Raspberry PI
                            </li>
                            <li>
                                OS: Ubuntu, RHEL7/8
                            </li>
                            <li>
                                Programming Language: Python, C, C++
                            </li>
                        </ul>
                        <span role="img" aria-label="face">👱‍♂️</span><span role="img" aria-label="pc">💻</span> <strong>My Profile</strong>
                        <ul>
                            <li>
                                <a href="https://www.hackerrank.com/shubranshugupta" target="_blank" rel="noopener noreferrer">HackerRank</a>
                            </li>
                            <li>
                                <a href="https://www.codingninjas.com/codestudio/profile/4765a9e6-eb81-4c59-97f8-5b438dc17e28" target="_blank" rel="noopener noreferrer">CodeStudio</a>
                            </li>
                            <li>
                                <a href="https://github.com/shubranshugupta" target="_blank" rel="noopener noreferrer">Github</a>
                            </li>
                            <li>
                                <a href="https://www.kaggle.com/shubhranshugupta24" target="_blank" rel="noopener noreferrer">Kaggle</a>
                            </li>
                            <li>
                                <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">DockerHub</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/shubhranshu-gupta24/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </li>
                        </ul>
                        <p>
                            Knowledge increase by sharing not by saving. When I am not coding, I like to write a blog about what 
                            I have learned on the @Medium Platform. You can follow me there if you want my work.<span role="img" aria-label="peace">✌️</span><br/>
                            <span role="img" aria-label="pin">📌</span> <a href="https://medium.com/@shubhranshugupta" target="_blank" rel="noopener noreferrer">Medium</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {
    theme: PropTypes.string.isRequired
}

About.defaultProps = {
    theme: 'light'
}

export default About
