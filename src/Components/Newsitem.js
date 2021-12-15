import React from 'react'

const Newsitem = (props)=> {




        let { title, description, imageUrl ,newsUrl,pub,author } = props
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">Published On - {pub} By - {author} </small></p>

                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitem
