import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class AddComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			student: {
				name: "",
				phone: "",
				email: "",
			},
		};
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			...this.state,
			student: {
				...this.state.student,
				[name]: value,
			},
		});
	};

	handleSubmit = (e) => {
		// Ngan chan hanh vi mac dinh cua form
		e.preventDefault();
		this.props.handleAddStudent(this.state.student);
	};

	render() {
		const { name, phone, email } = this.state.student;
		return (
			<>
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className="row  mb-3">
							<label className="col-sm-1">Name:</label>
							<div className="col-sm-4">
								<input type="text" name="name" onChange={this.handleChange} value={name} className="form-control" placeholder="Enter your name" />
							</div>
						</div>
						<div className="row mb-3">
							<label className="col-sm-1">Phone:</label>
							<div className="col-sm-4">
								<input
									type="number"
									name="phone"
									onChange={this.handleChange}
									value={phone}
									className="form-control"
									placeholder="Enter your phone"
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label className="col-sm-1">Email:</label>
							<div className="col-sm-4">
								<input type="email" name="email" onChange={this.handleChange} value={email} className="form-control" placeholder="Enter your email" />
							</div>
						</div>
						<button type="submit" className="btn btn-secondary btn-sm mb-3">
							Submit
						</button>
					</form>
				</div>
			</>
		);
	}
}

export default AddComponent;
