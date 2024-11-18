const elementList = [
	{
		title: "Setup development environment",
	},
	{
		title: "Develop website and add content",
	},
	{
		title: "Deploy to live server",
	},
];

export function getAllElement() {
	return elementList;
}

export function addNewElement(element) {
	// kết nối API để thêm mới
	elementList.push(element);
}
