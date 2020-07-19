import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class JobTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteJob = this.deleteJob.bind(this);
    }

    deleteJob() {
        axios.delete('http://localhost:4000/delete-job/' + this.props.object._id)
            .then((res) => {
                window.location.reload(false);
                console.log("Deleted");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.object.Position}</td>
                <td>{this.props.object.Industry}</td>
                <td>{this.props.object.Description}</td>
                <td>{this.props.object.Deadline}</td>
                <td className="text-center">
                    <button className="btn btn-dark  m-1">
                        <Link to={"/edit-job/" + this.props.object._id} className="text-light text-decoration-none"> Edit </Link>
                    </button>
                </td>
                <td className="text-center">
                    <button className="btn btn-danger m-1" onClick={this.deleteJob}>Delete</button>
                </td>
            </tr>
        );

    }
}