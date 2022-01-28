import React from 'react'

const Elements = (props) => {
    return (
        <div>

            <div className="container">
                <div className="p-5 my-4 bg-light rounded-3">
                    <h1>campsites</h1>
                    <p className="lead">this is the best campsite of this month</p>
                    <p><a href="https://www.tutorialrepublic.com" target="_blank" className="btn btn-success btn-lg">Get started today</a></p>
                </div>
                <div className="row g-3">
                    {props.items.map((item, i) => (
                        <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                            <h2>{item.nameSite}</h2>
                            <p>in: {item.localisation}</p>
                            <img src={item.imageUrl} />
                            <p>capacity: {item.capacity}</p>
                            <p>price/night: {item.price}</p>
                            <p>phone number: {item.phone}</p>
                            <p>email: {item.email}</p>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-primary" onClick={()=>props.changeView()}>Book!</button>
                    </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Elements;