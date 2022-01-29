import React from 'react'

const Elements = (props) => {
    return (
        <div>
            <div>

            </div>
            <div className="container">
                <div className="p-5 my-4 bg-light rounded-3">
                    <div>
                        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://wwfafrica.awsassets.panda.org/img/img_0280_1_58142.jpg" class="d-block w-100" alt="Slide 1" />
                                </div>
                                <div class="carousel-item">
                                    <img src="http://www.webdo.tn/wp-content/uploads/2017/11/dreamers.png" class="d-block w-100" alt="Slide 2" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Rtiba.jpg" class="d-block w-100" alt="Slide 3" />
                                </div>
                            </div>

                            <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    {props.items.map((item, i) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                            <h2>{item.nameSite}</h2>
                            <p>in: {item.localisation}</p>
                            <img className='imgsize' src={item.imageUrl} />
                            <p>capacity: {item.capacity}</p>
                            <p>price/night: {item.price}</p>
                            <p>phone number: {item.phone}</p>
                            <p>email: {item.email}</p>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-primary" onClick={() => props.changeView()}>Book!</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Elements;