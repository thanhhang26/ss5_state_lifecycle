import { Component } from "react";

class StudentItemComponent extends Component {
	render() {
		const { name, phone, email } = this.props.student;
		return (
			<>
				<tr>
					<td>{name}</td>
					<td>{phone}</td>
					<td>{email}</td>
					<td>
						<button className="btn btn-secondary me-3">Edit</button>
						<button className="btn btn-secondary">Delete</button>
					</td>
				</tr>
			</>
		);
	}
}
export default StudentItemComponent;
