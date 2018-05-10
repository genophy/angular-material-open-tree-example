import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OpenTreeObj}                                    from './open-tree-obj';

@Component({
	selector   : 'crm-open-tree-item',
	templateUrl: './open-tree-item.component.html',
	styleUrls  : ['./open-tree-item.component.scss']
})
export class OpenTreeItemComponent implements OnInit {
	/**
	 * 上级节点
	 */
	@Input() parentObjs: Array<OpenTreeObj>;

	/**
	 * 树列表
	 */
	@Input() treeList: Array<OpenTreeObj>;

	/**
	 * 剩余多少层级，当为0，表示是最后一级。当手动设置为-1，表示无限制 。（树层级个数为 childrenHierarchy + 1_root ）
	 */
	@Input() childrenHierarchy: number;

	/**
	 * 是否可选择
	 */
	@Input() checkboxAble = false;

	/**
	 * 修改方法. 返回true表示，可以修改。参数item:OpenTreeObj
	 */
	@Input() handlerModify: Function;

	/**
	 * 增加方法. 返回true表示，可以增加。参数item:OpenTreeObj
	 */
	@Input() handlerAdd: Function;

	/**
	 * 删除方法. 返回true表示，可以删除。参数item:OpenTreeObj
	 */
	@Input() handlerRemove: Function;

	/**
	 * 元素点击方法
	 */
	@Input() handlerItemClick: Function;

	/**
	 * 树列表变更
	 * @type {EventEmitter<Array<OpenTreeObj>>}
	 */
	@Output() treeListChanged: EventEmitter<Array<OpenTreeObj>> = new EventEmitter<Array<OpenTreeObj>>();

	/**
	 * 当前全部checkbox变更
	 * @type {EventEmitter<boolean>}
	 */
	@Output() allCheckedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	/**
	 * 用于增加的子节点名字
	 */
	_nameForAdd;

	/**
	 * 用于修改的当前节点名字
	 */
	_nameForModify;

	_addAble = false;

	_editAble = false;

	_removeAble = false;

	/**
	 * 构造方法
	 */
	constructor() {

	}

	ngOnInit() {

		if ('function' === typeof this.handlerAdd) {
			this._addAble = true;
		} else if ('boolean' === typeof this.handlerAdd) { // 传真错误，必须传入方法名
			throw new Error('传入的handlerAdd，必须是方法名。如 [handlerAdd]="fn"，不可传入"fn()"等方法');
		}

		if ('function' === typeof this.handlerModify) {
			this._editAble = true;
		} else if ('boolean' === typeof this.handlerModify) { // 传真错误，必须传入方法名
			throw new Error('传入的handlerModify，必须是方法名。如 [handlerModify]="fn"，不可传入"fn()"等方法');
		}
		if ('function' === typeof this.handlerRemove) {
			this._removeAble = true;
		} else if ('boolean' === typeof this.handlerRemove) { // 传真错误，必须传入方法名
			throw new Error('传入的handlerRemove，必须是方法名。如 [handlerRemove]="fn"，不可传入"fn()"等方法');
		}
	}

	/**
	 *
	 * @param {OpenTreeObj} item
	 * @returns {any}
	 */
	pureItem(item: OpenTreeObj) {
		const tmp = Object.assign({}, item);
		tmp.children = [];
		return tmp;
	}

	/**
	 * 折叠切换
	 * @param {OpenTreeObj} item
	 */
	btnToggleUnFold(item: OpenTreeObj) {
		item.isUnFold = !item.isUnFold;
		// 若已经折叠起来，则子元素也折叠起来
		if (!item.isUnFold) {
			this.unFoldAllChild(item);
		}
	}

	/**
	 * 节点点击
	 * @param {SugarTreeElement} item
	 */
	btnItemClick(item: OpenTreeObj) {
		if ('function' === typeof this.handlerItemClick) {
			this.handlerItemClick(this.parentObjs, item);
		}
	}

	/**
	 * 增加子节点
	 * @param item
	 */
	btnAddChild(item: OpenTreeObj) {
		item.isUnFold = true;
		if (!(item.children && item.children instanceof Array)) {
			item.children = [];
		}
		// 若children为空，且children最后一个元素的additionAble属性不为true,表示还没有增加。可以push
		if (0 === item.children.length || true !== item.children[item.children.length - 1].additionAble) {
			item.children.push(OpenTreeObj.newInstance(null, null, null, false, true));
		}
	}

	/**
	 * 保存子节点，用于父节点向此节点发送新增子节点(addChild)后。
	 */
	btnSaveChild(item) {
		item.additionAble = false;
		if (this._nameForAdd && this.handlerAdd(this.parentObjs, this._nameForAdd)) {
			item.name = this._nameForAdd;
			// this.treeList[this.treeList.length - 1].name = this._nameForAdd;
			// this.treeList[this.treeList.length - 1].additionAble = false;
			this._nameForAdd = '';
			// 新增节点，默认不会选中。所以也默认向父节点发送不选中的event
			this.sendAllChildCheckStatusEvent();
			this.treeListChanged.emit(this.treeList);
		} else {
			// 删除最后一个，默认增加失败，最后一个元素名字为空。需要删除
			this.treeList.splice(this.treeList.length - 1, 1);
		}
	}

	/**
	 * 修改当前节点
	 * @param {OpenTreeObj} item
	 */
	btnModifyCurrentItem(item: OpenTreeObj) {
		this._nameForModify = item.name;
		item.editable = true;
	}

	/**
	 * 保存当前节点，用于修改后
	 */
	btnSaveModifiedItem(item: OpenTreeObj) {
		item.editable = false;
		if (this._nameForModify && item.name !== this._nameForModify && true === this.handlerModify(this.parentObjs, item)) {
			item.name = this._nameForModify;
			this.treeListChanged.emit(this.treeList);
		}
	}

	/**
	 * 删除当前节点
	 * @param {number} idx
	 */
	btnRemoveCurrentItem(idx: number) {
		if (this.handlerRemove(this.parentObjs, this.treeList[idx])) {
			this.treeList.splice(idx, 1);
			this.treeListChanged.emit(this.treeList);
		}
	}

	/**
	 * 改变当前的treeList
	 */
	changeItemTreeList(item: OpenTreeObj, children: Array<OpenTreeObj>) {
		item.children = children;
		this.treeListChanged.emit(this.treeList);
	}

	/**
	 * 按钮切换checkbox
	 * @param {OpenTreeObj} item
	 * @param {boolean} checked
	 * @param {boolean} childChange
	 */
	btnToggleCheckbox(item: OpenTreeObj, checked: boolean, childChange: boolean = false) {

		this.itemIterationForUpdateChecked(item, checked, childChange);
		this.sendAllChildCheckStatusEvent();
		this.treeListChanged.emit(this.treeList);
	}

	/**
	 * 折叠所有子节点
	 * @param {OpenTreeObj} item
	 */
	private unFoldAllChild(item: OpenTreeObj) {
		for (const child of item.children) {
			if (child) {
				child.isUnFold = false;
				this.unFoldAllChild(child);
			}
		}
	}

	/**
	 * 若同级都checked为true ，则提交 allChildChecked.emit(true) 事件，否则提交 allChildChecked.emit(false)
	 */
	private sendAllChildCheckStatusEvent() {

		let allChildCheckedFlag = true;
		for (const i of this.treeList) {
			// 若有一个没选中，则 allChildCheckedFlag 为false，break
			if (true !== i['checked']) {
				allChildCheckedFlag = false;
				break;
			}
		}
		this.allCheckedChanged.emit(allChildCheckedFlag);
	}

	/**
	 * 元素递归更新checked属性 ，用来执行子节点的allCheckedChanged
	 * @param item
	 * @param {boolean} checked
	 * @param {boolean} childChange
	 */
	private itemIterationForUpdateChecked(item: OpenTreeObj, checked: boolean, childChange: boolean = false) {
		item.checked = checked;
		if (childChange) {
			for (const child of (item.children || [])) {
				if (child) {
					this.itemIterationForUpdateChecked(child, checked, childChange);
				}
			}
		}

	}

}
