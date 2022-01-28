import React from 'react'

const Elements = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Tutorial Republic</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link">Services</a>
                            <a href="#" className="nav-item nav-link">About</a>
                            <a href="#" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <a href="#" className="nav-item nav-link">Register</a>
                            <a href="#" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="p-5 my-4 bg-light rounded-3">
                    <h1>campsite1</h1>
                    <p className="lead">In today's world internet is the most popular way of connecting with the people. At <a href="https://www.tutorialrepublic.com" className="text-success" target="_blank">tutorialrepublic.com</a> you will learn the essential web development technologies along with real life practice examples, so that you can create your own website to connect with the people around the world.</p>
                    <p><a href="https://www.tutorialrepublic.com" target="_blank" className="btn btn-success btn-lg">Get started today</a></p>
                </div>
                <div className="row g-3">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>campsite2</h2>
                        <p>HTML is the standard markup language for describing the structure of the web pages. Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own website.</p>
                        <p><a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>campsite3</h2>
                        <p>CSS is used for describing the presentation of web pages. CSS can save a lot of time and effort. Our CSS tutorials will help you to learn the essentials of latest CSS3, so that you can control the style and layout of your website.</p>
                        <p><a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>JavaScript</h2>
                        <p>JavaScript is the most popular and widely used client-side scripting language. Our JavaScript tutorials will provide in-depth knowledge of the JavaScript including ES6 features, so that you can create interactive websites.</p>
                        <p><a href="https://www.tutorialrepublic.com/javascript-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>Bootstrap</h2>
                        <p>Bootstrap is a powerful front-end framework for faster and easier web development. Our Bootstrap tutorials will help you to learn all the features of latest Bootstrap 4 framework so that you can easily create responsive websites.</p>
                        <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>PHP</h2>
                        <p>PHP is the most popular server-side scripting language for creating dynamic web pages. Our PHP tutorials will help you to learn all the features of latest PHP7 scripting language so that you can easily create dynamic websites.</p>
                        <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>SQL</h2>
                        <p>SQL is a standard language designed for managing data in relational database management system. Our SQL tutorials will help you to learn the fundamentals of the SQL language so that you can efficiently manage your databases.</p>
                        <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>References</h2>
                        <p>Our references section outlines all the standard HTML5 tags and CSS3 properties along with other useful references such as color names and values, character entities, web safe fonts, language codes, HTTP messages, and more.</p>
                        <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                        <h2>FAQ</h2>
                        <p>Our Frequently Asked Questions (FAQ) section is an extensive collection of FAQs that provides quick and working solution of common questions and queries related to web design and development with live demo.</p>
                        <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                    </div>
                </div>
                    <footer>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Copyright &copy; 2021 Oussama Hmaied</p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <a href="#" className="text-dark">Terms of Use</a>
                                <span className="text-muted mx-2">|</span>
                                <a href="#" className="text-dark">Privacy Policy</a>
                            </div>
                        </div>
                    </footer>
            </div>
        </div>
    )
}

export default Elements;