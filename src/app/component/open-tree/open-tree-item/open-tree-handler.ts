import {OpenTreeObj} from './open-tree-obj';

export interface OpenTreeHandler {

	/**
	 * 是否可以增加
	 * @param {Array<OpenTreeObj>} parents 父节点数组
	 * @param {string} name 本元素名
	 * @returns {boolean}  返回true，表示，可以增加
	 */
	openTreeHandlerAdd(parents: Array<OpenTreeObj>, name: string): boolean;

	/**
	 * 是否可以删除
	 * @param {Array<OpenTreeObj>} parents 父节点数组
	 * @param {OpenTreeObj} item 本元素
	 * @returns {boolean} 返回true，表示，可以删除
	 */
	openTreeHandlerRemove(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean;

	/**
	 * 是否可以修改
	 * @param {Array<OpenTreeObj>} parents 父节点数组
	 * @param {OpenTreeObj} item 本元素
	 * @returns {boolean} 返回true，表示，可以修改
	 */
	openTreeHandlerModify(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean;

	/**
	 * 树状图元素点击触发
	 * @param {Array<OpenTreeObj>} parents parents 父节点数组
	 * @param {OpenTreeObj} item 本元素
	 */
	openTreeHandlerItemClick(parents: Array<OpenTreeObj>, item: OpenTreeObj): void;
	/**
	 * 树状图列表变更触发
	 * @param {Array<OpenTreeObj>} treeList 所有变更后的列表
	 */
	openTreeListChanged(treeList: Array<OpenTreeObj>): void;
}
