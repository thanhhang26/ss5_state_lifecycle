import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addNewStudent, getAllStudent } from "../service/studentService";
import StudentItemComponent from "./StudentItemComponent";
import AddComponent from "./AddComponent";

class ListComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			studentList: getAllStudent(),
		};
	}

	handleAddStudent = (student) => {
		addNewStudent(student);
		this.setState({
			...this.state,
			studentList: getAllStudent(),
		});
	};
	render() {
		return (
			<>
				<div className="container">
					<div className="card">
						<div className="card-header">
							<h1>Student List</h1>
						</div>
						<div className="card-body">
							<AddComponent handleAddStudent={this.handleAddStudent} />
							{this.state.studentList.length > 0 ? (
								<table className="table table-light">
									<thead>
										<tr>
											<th>Name</th>
											<th>Phone</th>
											<th>Email</th>
											<th className="text-center" style={{ width: 200 }}>
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{this.state.studentList.map((s) => (
											<StudentItemComponent student={s} />
										))}
									</tbody>
								</table>
							) : (
								"Khong co du lieu"
							)}
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default ListComponent;
