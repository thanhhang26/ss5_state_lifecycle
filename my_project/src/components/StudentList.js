import { Component } from "react";
import { addNewStudent, getAllStudent } from "../service/studentService";
import StudentItem from "./StudentItem";
import AddComponent from "./AddComponent";

class StudentList extends Component {
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
			<div className="container">
				<div className="card">
					<div className="card-header">
						<h1>Student List</h1>
					</div>
					<div className="card-body">
						<AddComponent handleAddStudent={this.handleAddStudent} />
						{this.state.studentList.length > 0 ? (
							<table className="table table-bordered">
								<thead>
									<tr>
										<th>Ten</th>
										<th>So dien thoai</th>
										<th>Email</th>
										<th className="text-center" style={{ width: 200 }}>
											Hanh dong
										</th>
									</tr>
								</thead>
								<tbody>
									{this.state.studentList.map((s) => (
										<StudentItem student={s} />
									))}
								</tbody>
							</table>
						) : (
							"Khong co du lieu"
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default StudentList;
