export class OpenTreeObj {
	/**
	 * 是否展开
	 */
	isUnFold: boolean;
	/**
	 * 是否可增加
	 */
	additionAble: boolean;
	/**
	 * 是否可编辑
	 */
	editable: boolean;
	/**
	 * 是否已经选中
	 */
	checked: boolean;
	/**
	 * 名称
	 */
	name: string;
	/**
	 * 对象
	 */
	item: any;
	/**
	 * 子元素
	 */
	children: Array<OpenTreeObj>;

	constructor(
		name: string,
		item: any,
		children: Array<OpenTreeObj> = [],
		isUnFold: boolean            = false,
		additionAble: boolean        = false,
		editable: boolean            = false,
		checked: boolean             = false
	) {
		this.name = name;
		this.item = item;
		this.children = children;
		this.isUnFold = isUnFold;
		this.additionAble = additionAble;
		this.editable = editable;
		this.checked = checked;
	}

	static newInstance(
		name: string,
		item: any,
		children: Array<OpenTreeObj> = [],
		isUnFold: boolean            = false,
		additionAble: boolean        = false,
		editable: boolean            = false,
		checked: boolean             = false
	) {
		return new OpenTreeObj(
			name,
			item,
			children,
			isUnFold,
			additionAble,
			editable,
			checked
		);
	}
}
