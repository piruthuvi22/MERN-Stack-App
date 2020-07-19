import React from "react";
import axios from "axios";

import { JobTableRow } from './data-table';

export class ListJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/jobs')
            .then((res) => {
                if (res.data.length !== 0) {
                    this.setState({
                        jobs: res.data
                    })
                }
                else {
                    alert("No Data Found");
                }
            })
            .catch((err) => console.log(err))
    }

    DataTable() {
        return (
            this.state.jobs.map((job, i) => {
                return (
                    <JobTableRow object={job} key={i} />
                )
            })
        )
    }

    render() {
        return (
            <div className="container mt-3">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th >Position</th>
                            <th >Industry</th>
                            <th >Description</th>
                            <th>Deadline</th>
                            <th colSpan={2} className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}