import {OpenTreeObj} from './open-tree-obj';

export interface OpenTreeHandler {

	/**
	 * 树状图列表变更触发
	 * @param {Array<OpenTreeObj>} treeList
	 */
	treeListChanged(treeList: Array<OpenTreeObj>): void;

	/**
	 * 是否可以修改
	 * @param {Array<OpenTreeObj>} parents
	 * @param {OpenTreeObj} item
	 * @returns {boolean}
	 */
	handlerModify(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean;

	/**
	 * 是否可以删除
	 * @param {Array<OpenTreeObj>} parents
	 * @param {OpenTreeObj} item
	 * @returns {boolean}
	 */
	handlerRemove(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean;

	/**
	 * 是否可以增加
	 * @param {Array<OpenTreeObj>} parents
	 * @param {string} name
	 * @returns {boolean}
	 */
	handlerAdd(parents: Array<OpenTreeObj>, name: string): boolean;

	/**
	 * 元素点击
	 * @param {Array<OpenTreeObj>} parents
	 * @param {OpenTreeObj} item
	 */
	handlerItemClick(parents: Array<OpenTreeObj>, item: OpenTreeObj): void;
}
