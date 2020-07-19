import React from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
export class EditJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Position: '',
            Industry: '',
            Description: '',
            Deadline: ''
        }

        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeIndustry = this.onChangeIndustry.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/edit-job/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    Position: res.data.Position,
                    Industry: res.data.Industry,
                    Description: res.data.Description,
                    Deadline: res.data.Deadline
                })
            })
            .catch(err => console.log(err));

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

        const Obj = {
            Position: this.state.Position,
            Industry: this.state.Industry,
            Description: this.state.Description,
            Deadline: this.state.Deadline,
        }
        axios.put('http://localhost:4000/edit-job/' + this.props.match.params.id, Obj)
            .then(res => {
                axios.get('http://localhost:4000/jobs')
                    .then((res) => {
                        this.setState({
                            Position: res.data.Position,
                            Industry: res.data.Industry,
                            Description: res.data.Description,
                            Deadline: res.data.Deadline
                            // jobs: res.data
                        })
                    })
                    .catch((err) => console.log(err))
                // console.log(res.data);
                console.log("Updated");
                this.props.history.push('/jobs')

            })
            .catch(err => console.log(err));
        // <Redirect push to="/jobs" />
        // this.props.history.push('/jobs')
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="position">Position of Job</label>
                            <input type="text" value={this.state.Position} onChange={this.onChangePosition} className="form-control" id="position" />
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
                        <textarea className="form-control" value={this.state.Description} onChange={this.onChangeDescription} id="description" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary">Edit</button>
                </form>
            </div>
        );
    }
}