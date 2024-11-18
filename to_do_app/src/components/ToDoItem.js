import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class ToDoItem extends React.Component {
	render() {
		const { title } = this.props.element;
		return (
			<>
				<tr>
					<td>{title}</td>
				</tr>
			</>
		);
	}
}
export default ToDoItem;
