import React from "react";
import axios from "axios";

export class CreateJob extends React.Component {
    constructor(props) {
        super(props);

        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeIndustry = this.onChangeIndustry.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Position: "",
            Description: "",
            Industry: "Business services",
            Deadline: ""
        }
    }

    onChangePosition(e) {
        this.setState({ Position: e.target.value })
    }

    onChangeDescription(e) {
        this.setState({ Description: e.target.value })
    }

    onChangeIndustry(e) {
        this.setState({ Industry: e.target.value })
    }
    onChangeDeadline(e) {
        this.setState({ Deadline: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const jobObject = {
            Position: this.state.Position,
            Industry: this.state.Industry,
            Description: this.state.Description,
            Deadline: this.state.Deadline
        };

        axios.post('http://localhost:4000/create-job', jobObject)
            .then(res => console.log(res.data))

        console.log("Job added");
        console.log(`${this.state.Deadline}`);
        // console.log((`${this.state.Description}`));

        this.setState({ Position: "", Description: "", Industry: "", Deadline: "" })

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="position">Position of Job</label>
                            <input type="text" placeholder="Enter Job Position" value={this.state.Position} onChange={this.onChangePosition} className="form-control" id="position" />
                        </div>
                        <div className="col form-group">
                            <label htmlFor="industry">Industry</label>
                            <select className="form-control" value={this.state.Industry} onChange={this.onChangeIndustry} id="industry">
                                <option value="Business services">Business services</option>
                                <option value="Information technology">Information technology</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Health care">Health care</option>
                                <option value="Finance">Finance</option>
                                <option value="Media">Media</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Deadline</label>
                        <input placeholder="Deadline" type="date" value={this.state.Deadline} onChange={this.onChangeDeadline} id="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Job Description</label>
                        <textarea className="form-control" placeholder="Enter Job Description" value={this.state.Description} onChange={this.onChangeDescription} id="description" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}