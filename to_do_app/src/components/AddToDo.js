import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class AddToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			element: {
				title: "",
			},
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			...this.state,
			element: {
				...this.state.element,
				[name]: value,
			},
		});
	};

	handleSubmit = (e) => {
		// Ngan chan hanh vi mac dinh cua form
		e.preventDefault();
		this.props.handleAddElement(this.state.element);
	};

	render() {
		const { title } = this.state.element;
		return (
			<>
				<form className="d-flex justify-content-center" onSubmit={this.handleSubmit}>
					<div className="col-sm-2">
						<input type="text" name="title" onChange={this.handleChange} className="form-control" value={title} />
					</div>
					<button type="submit" className="btn btn-outline-secondary rounded-0">
						Add
					</button>
				</form>
			</>
		);
	}
}

export default AddToDo;
