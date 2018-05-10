import {Component, OnInit} from '@angular/core';
import {OpenTreeHandler}   from './open-tree-item/open-tree-handler';
import {OpenTreeObj}       from './open-tree-item/open-tree-obj';

@Component({
	selector   : 'crm-open-tree',
	templateUrl: './open-tree.component.html',
	styleUrls  : ['./open-tree.component.scss']
})
export class OpenTreeComponent implements OpenTreeHandler {

	treeList: Array<OpenTreeObj> = [
		OpenTreeObj.newInstance('江苏省', null, [
			OpenTreeObj.newInstance('南京', null, [
				OpenTreeObj.newInstance('秦淮区', null, []),
				OpenTreeObj.newInstance('鼓楼区', null, []),
				OpenTreeObj.newInstance('栖霞区', null, [])
			]),
			OpenTreeObj.newInstance('无锡', null, []),
			OpenTreeObj.newInstance('苏州', null, []),
			OpenTreeObj.newInstance('常州', null, [])
		], false, true, false),
		OpenTreeObj.newInstance('浙江省', null, [
			OpenTreeObj.newInstance('杭州', null, []),
			OpenTreeObj.newInstance('景德镇', null, [])
		])
	];

	constructor() {}

	/**
	 * 是否让sugar树增加元素
	 * @param {Array<OpenTreeObj>} parents
	 * @param {string} name
	 * @returns {boolean}
	 */
	openTreeHandlerAdd(parents: Array<OpenTreeObj>, name: string): boolean {
		return true;
	}

	/**
	 * 是否让sugar树改变元素
	 * @param {Array<OpenTreeObj>} parents
	 * @param {OpenTreeObj} item
	 * @returns {boolean}
	 */
	openTreeHandlerModify(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean {
		return true;
	}

	/**
	 * 是否让sugar树删除元素
	 * @param {Array<OpenTreeObj>} parents
	 * @param {OpenTreeObj} item
	 * @returns {boolean}
	 */
	openTreeHandlerRemove(parents: Array<OpenTreeObj>, item: OpenTreeObj): boolean {
		return true;
	}

	/**
	 * sugar树元素点击监听
	 * @param {Array<OpenTreeObj>} parents
	 * @param {OpenTreeObj} item
	 */
	openTreeHandlerItemClick(parents: Array<OpenTreeObj>, item: OpenTreeObj): void {

		console.log(parents, item);
	}

	/**
	 * sugar树元素变更监听
	 * @param {Array<OpenTreeObj>} treeList
	 */
	openTreeListChanged(treeList: Array<OpenTreeObj>): void {
	}

}
