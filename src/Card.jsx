import mark from '../public/assets/mark.png'

export default function Section(props) {
    return (
        <div className="section">
            <img src={props.item.img} alt="image" className='location-img'/>
            <div className="info">
                <div className="location">
                    <img src={mark} alt="location-mark" className='mark'/>
                    <div className="country">{props.item.location}</div>
                    <div className="countryUrl"><a href={props.item.googleMapsUrl}>View on Google Maps</a></div>
                </div>
                <h3 className="title">{props.item.title}</h3>
                <div className="date">{props.item.startDate} - {props.item.endDate}</div>
                <div className="description">{props.item.description}</div>
            </div>
        </div>
    )
}