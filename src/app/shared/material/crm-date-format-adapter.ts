import {NativeDateAdapter} from '@angular/material';

/**
 * 日期国际化格式化等接口
 */
export class CrmDateFormatAdapter extends NativeDateAdapter {
	format(date: Date, displayFormat: Object): string {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		if (displayFormat === 'input') {
			return `${year}-${this.digital2(month)}-${this.digital2(day)}`;
		} else if (displayFormat === 'monthYearLabel') {
			return `${year}年${this.digital2(month)}月`;
		} else {
			return date.toDateString();
		}
	}

	digital2(num: number): string {
		return (num > 9 ? '' : '0') + num;
	}
}

/**
 * 日期国际化格式化属性
 * @type {{parse: {dateInput: string}; display:
 * 			{dateInput: string; monthYearLabel: string; dateA11yLabel: string; monthYearA11yLabel: string}}}
 */
export const CRM_DATA_FORMATS = {
	parse  : {
		dateInput: 'input'
	},
	display: {
		dateInput         : 'input',
		monthYearLabel    : 'monthYearLabel',
		dateA11yLabel     : 'input',
		monthYearA11yLabel: 'input'
	}
};
