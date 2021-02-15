import casual = require('casual');
import { IContact } from '../models/IContact';

const MAX_COUNT = 2000;

export class Contacts {
	static contacts: IContact[] = [];

	static initialize() {
		casual.define('contact', () => {
			return {
				id: casual.uuid,
				name: casual.full_name,
				doorNo: casual.building_number,
				address: casual.street,
				postCode: casual.zip(5),
				city: casual.city,
				phone: casual.phone,
				email: casual.email
			}
		});
	}

	public static getContacts(): IContact[] {
		if (this.contacts.length) {
			return this.contacts;
		}

		let count = 0;
		while (count < MAX_COUNT) {
			if (count === 0) {
				this.initialize();
			}
			const { contact } = casual as any
			this.contacts.push(contact);
			count++;
		}
		return this.contacts;
	};
}
