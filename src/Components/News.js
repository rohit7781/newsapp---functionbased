import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    articles =
        [
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": null,
                "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                "publishedAt": "2020-04-27T11:41:47Z",
                "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": null,
                "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
                "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
                "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
                "publishedAt": "2020-03-30T15:26:05Z",
                "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": "Harry Lyles Jr.",
                "title": "Penn State football hires ex-Miami Hurricanes coach Manny Diaz as defensive coordinator",
                "description": "Manny Diaz, who was fired earlier this month as the head coach of the Miami Hurricanes, has been hired to be the defensive coordinator at Penn State, it was announced.",
                "url": "http://espn.go.com/college-football/story/_/id/32843537/penn-state-football-hires-ex-miami-hurricanes-coach-manny-diaz-defensive-coordinator",
                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0725%2Fr574762_1296x729_16%2D9.jpg",
                "publishedAt": "2021-12-11T15:36:00Z",
                "content": "Penn State announced the hiring of former Miami head coach Manny Diaz as defensive coordinator and linebackers coach on Saturday. Diaz replaces Brent Pry, who was announced as Virginia Tech's new he… [+1452 chars]"
            },
            {
                "source": {
                    "id": "espn",
                    "name": "ESPN"
                },
                "author": null,
                "title": "New York Giants legend, TV personality Michael Strahan flies in space with astronaut's daughter",
                "description": "Football star and TV celebrity Michael Strahan caught a ride to space with Jeff Bezos' rocket-launching company Saturday, sharing the trip with the daughter of America's first astronaut.",
                "url": "http://espn.go.com/nfl/story/_/id/32843495/new-york-giants-legend-tv-personality-michael-strahan-flies-space-astronaut-daughter",
                "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1123%2Fr941446_1296x729_16%2D9.jpg",
                "publishedAt": "2021-12-11T15:31:43Z",
                "content": "Football star and TV celebrity Michael Strahan caught a ride to space with Jeff Bezos' rocket-launching company Saturday, sharing the trip with the daughter of America's first astronaut. Blue Origin… [+2455 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "MARCIA DUNN / AP",
                "title": "Michael Strahan Launches Toward Space on Blue Origin Rocket",
                "description": "Football star and TV celebrity Michael Strahan hurtled toward space with Jeff Bezos’ rocket company Saturday, sharing the ride with the daughter of America’s first astronaut.",
                "url": "http://time.com/6127695/michael-strahan-launches-toward-space-on-blue-origin-rocket/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2021/12/Space.jpg?quality=85&w=1200&h=628&crop=1",
                "publishedAt": "2021-12-11T15:24:50Z",
                "content": "Football star and TV celebrity Michael Strahan hurtled toward space with Jeff Bezos’ rocket company Saturday, sharing the ride with the daughter of America’s first astronaut. The co-host of ABC’s “G… [+1617 chars]"
            },
            {
                "source": {
                    "id": "bbc-sport",
                    "name": "BBC Sport"
                },
                "author": "BBC Sport",
                "title": "Legend Eto'o elected president of Cameroon FA",
                "description": "Former international Samuel Eto'o will run Cameroonian football for the next four years after being elected head of the country's FA on Saturday.",
                "url": "http://www.bbc.co.uk/sport/football/59622746",
                "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/432B/production/_122059171_97066aca-87e8-4799-8d55-ed1b57571bf6.jpg",
                "publishedAt": "2021-12-11T14:22:25.7435943Z",
                "content": "Eto'o has appeared at four World Cups, but could not help Cameroon progress from the group stages Former international Samuel Eto'o will run Cameroonian football for the next four years after being … [+2424 chars]"
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "MARCIA DUNN",
                "title": "NFL, TV's Strahan flies in space with astronaut's daughter ",
                "description": "Football star and TV celebrity Michael Strahan caught a ride to space with Jeff Bezos’ rocket-launching company Saturday, sharing the trip with the daughter of America’s first astronaut.Blue Origin’s New Shepard rocket blasted off from West Texas, sending the…",
                "url": "https://apnews.com/c807253884a451bc3e82cb5d860cc05c",
                "urlToImage": "https://storage.googleapis.com/afs-prod/media/423a7b6e27bd408b8aece086dbf01717/3000.jpeg",
                "publishedAt": "2021-12-11T11:25:23Z",
                "content": "Football star and TV celebrity Michael Strahan caught a ride to space with Jeff Bezos’ rocket-launching company Saturday, sharing the trip with the daughter of America’s first astronaut.Blue Origin’s… [+3297 chars]"
            }
        ]

    static defaultProps = {
        pageSize: '6',
        category: 'science'
    }

    static propTypes = {
        pageSize: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            pageno: 1,
            totalResults: 0
        }
        document.title = `${this.props.category} - News App`
    }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e637e8f9c432450a918c81f6b2745d90&page=1&pageSize=${this.props.pageSize}`;
        this.props.setProgress(40); 
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(70);
        let passeddata = await data.json()
        this.setState({
            articles: passeddata.articles,
            totalResults: passeddata.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e637e8f9c432450a918c81f6b2745d90&page=${this.state.pageno + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let passeddata = await data.json()
        this.setState({
            articles: this.state.articles.concat(passeddata.articles),
            pageno: this.state.pageno + 1,
            loading: false
        })

    }



    render() {
        console.log(this.state.pageno);
        return (
            <div>

                <h2 className='my-3 text-center'>My News App</h2>
                <p className='text-center'>{this.state.loading && <Spinner />}</p>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                let total_count = 200 - (element.title.length)
                                return <div className="col-md-4 my-1" key={element.url}>
                                    <Newsitem title={element.title ? element.title : "Something"} description={element.description ? element.description.slice(0, total_count) + "..." : "Something"} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0725%2Fr574762_1296x729_16%2D9.jpg"} newsUrl={element.url} pub={element.publishedAt.slice(0, 10)} author={element.author ? element.author : "Unknown"} />
                                </div>

                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>

        )
    }
}

export default News
