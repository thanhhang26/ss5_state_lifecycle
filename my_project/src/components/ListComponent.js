import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllStudent } from "../service/studentService";
import AddComponent from "./AddComponent";

class ListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			studentList: [],
			name: "",
			phone: "",
			email: "",
		};
	}
	// Đây là phương thức lifecycle trong React, được gọi một lần sau khi component đã được render lần đầu tiên
	componentDidMount() {
		// Fetch student data on mount
		getAllStudent().then((studentList) => {
			//Khi bạn muốn thực hiện một loạt các tác vụ bất đồng bộ và mỗi tác vụ phụ thuộc vào kết quả của tác vụ trước đó, bạn có thể nối nhiều .then() vào nhau.
			// .then() nhận một hàm callback được gọi khi Promise thành công, và tham số truyền vào callback là kết quả của Promise (ví dụ: dữ liệu trả về từ API).
			this.setState((prevState) => ({
				...prevState, //à cách cập nhật state dựa trên state trước đó (prevState). Điều này giúp đảm bảo rằng bạn không thay thế toàn bộ state mà chỉ thay đổi phần cần thiết.
				studentList: [...studentList], //Phần này sao chép dữ liệu studentList vào trong state của component. Sử dụng cú pháp [...studentList] để sao chép giá trị của studentList và đảm bảo không thay đổi trực tiếp dữ liệu gốc.
			}));
		});
	}

	render() {
		return (
			<>
				<AddComponent />
				<table className={"table table-light"}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.studentList.map((e, i) => (
							<tr key={e.email}>
								<td>{e.name}</td>
								<td>{e.phone}</td>
								<td>{e.email}</td>
								<td>
									<button className="btn btn-secondary me-3">Edit</button>
									<button className="btn btn-secondary">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}
export default ListComponent;
