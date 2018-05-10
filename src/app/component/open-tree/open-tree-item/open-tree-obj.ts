export class OpenTreeObj {
	/**
	 * 是否可增加
	 */
	addAble: boolean;
	/**
	 * 是否可编辑
	 */
	editAble: boolean;

	/**
	 * 是否可删除
	 */
	removeAble: boolean;
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
	 * 切换到增加
	 * @type {boolean}
	 */
	_toggleToAdd: boolean;

	/**
	 * 切换到编辑
	 * @type {boolean}
	 */
	_toggleToEdit: boolean;

	/**
	 * 是否展开
	 */
	_toggleToUnFold: boolean;

	/**
	 * 子元素
	 */
	children: Array<OpenTreeObj>;

	/**
	 * 构造方法
	 * @param {string} name 显示的名字
	 * @param item 保存的对象
	 * @param {Array<SugarTreeElement>} children 子节点
	 * @param {boolean} addAble 可以增加
	 * @param {boolean} editAble 可以编辑
	 * @param {boolean} removeAble 可以删除
	 * @param {boolean} checked 可以选择
	 * @param {boolean} _toggleToAdd
	 * @param {boolean} _toggleToEdit
	 * @param {boolean} _toggleToUnFold 已经展开
	 */

	constructor(
		name: string,
		item: any,
		children: Array<OpenTreeObj> = [],
		addAble: boolean                  = true,
		editAble: boolean                 = true,
		removeAble: boolean               = true,
		checked: boolean                  = false,
		_toggleToAdd: boolean             = false,
		_toggleToEdit: boolean            = false,
		_toggleToUnFold: boolean          = false
	) {
		this.name = name;
		this.item = item;
		this.children = children;
		this.addAble = addAble;
		this.editAble = editAble;
		this.removeAble = removeAble;
		this.checked = checked;
		this._toggleToAdd = _toggleToAdd;
		this._toggleToEdit = _toggleToEdit;
		this._toggleToUnFold = _toggleToUnFold;
	}

	/**
	 * 返回新的SugarTreeElement对象
	 *
	 * @param {string} name 显示的名字
	 * @param item 保存的对象
	 * @param {boolean} _toggleToUnFold 已经展开
	 * @param {boolean} addAble 可以增加
	 * @param {boolean} editAble 可以编辑
	 * @param {boolean} removeAble 可以删除
	 * @param {boolean} checked 可以选择
	 * @param {boolean} _toggleToAdd
	 * @param {boolean} _toggleToEdit
	 * @param {Array<SugarTreeElement>} children 子节点
	 * @returns {SugarTreeElement}
	 */
	static newInstance(
		name: string,
		item: any,
		children: Array<OpenTreeObj> = [],
		addAble: boolean                  = true,
		editAble: boolean                 = true,
		removeAble: boolean               = true,
		checked: boolean                  = false,
		_toggleToAdd: boolean             = false,
		_toggleToEdit: boolean            = false,
		_toggleToUnFold: boolean          = false
	) {
		return new OpenTreeObj(
			name,
			item,
			children,
			addAble,
			editAble,
			removeAble,
			checked,
			_toggleToAdd,
			_toggleToEdit,
			_toggleToUnFold
		);
	}
}
