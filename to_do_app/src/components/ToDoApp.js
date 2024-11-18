import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addNewElement, getAllElement } from "../service/toDoService";
import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";

class ToDoApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elementList: getAllElement(),
		};
	}

	handleAddElement = (element) => {
		addNewElement(element);
		this.setState({
			...this.state,
			elementList: getAllElement(),
		});
	};
	render() {
		return (
			<>
				<div className="container">
					<div className="card">
						<div className="card-header"></div>
						<h1 className="p-2 text-black bg-opacity-75 text-center">Todo List</h1>
						<AddToDo handleAddElement={this.handleAddElement} />
						{this.state.elementList.length > 0 ? (
							<table className="table table-striped table-hover mt-3">
								<tbody>
									{this.state.elementList.map((s) => (
										<ToDoItem element={s} />
									))}
								</tbody>
							</table>
						) : (
							"Khong co du lieu"
						)}
					</div>
				</div>
			</>
		);
	}
}
export default ToDoApp;
