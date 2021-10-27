import React from "react";

class TeamInfo extends React.Component {
    render() {
        const {shortName, crestUrl, venue, address, email, phone, founded} = this.props.team

        return (
            <div className="teamBox col-3 mt-3 my-4 border bg-light rounded">
                <div className="d-flex pt-2 flex-column align-items-center">
                    <h2 className="p-1 rounded bg-dark text-white">{shortName}</h2>
                    <img className="p-1" src={crestUrl}/>
                    <p className="fst-italic fw-light">Founded in {founded}</p>
                </div>
                <div className="p-2">
                    <h4>Informations</h4>
                    <p><span className= "fw-bold">Venue :</span> {venue}</p>
                    <p><span className= "fw-bold">Address :</span> {address}</p>
                    <p><span className= "fw-bold">Email :</span> {email}</p>
                    <p><span className= "fw-bold">Phone Number :</span> {phone}</p>
                </div>
            </div>
        )
    }
}

export default TeamInfo