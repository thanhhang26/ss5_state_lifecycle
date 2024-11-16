import { Component } from "react";

class StudentItem extends Component {
	render() {
		const { name, phone, email } = this.props.student;
		return (
			<tr>
				<td>{name}</td>
				<td>{phone}</td>
				<td>{email}</td>
				<td className="text-center">
					<button className="btn btn-sm btn-info me-2">Edit</button>
					<button className="btn btn-sm btn-danger">Delete</button>
				</td>
			</tr>
		);
	}
}

export default StudentItem;
