import express from "express";
import { Resolver, Query, Arg } from "type-graphql";
import { Contacts } from '../contacts/index';
import { Contact } from '../schema/contactSchema';
import { PaginationInput } from "../schema/paginationSchema";

@Resolver()
export class ContactsResolver {
	@Query(returns => [Contact])
	getContacts(@Arg("pagination") pagination: PaginationInput) {
		const contacts = Contacts.getContacts();
		const { offset, limit } = pagination;
		const startIndex: number = offset;
		const endIndex: number = offset + limit;
		const res = [];
		if (startIndex >= contacts.length) {
			return [];
		}

		for (let i = startIndex; i < endIndex; i++) {
			res.push(contacts[i]);
		}
		console.log(res.length);
		return res;
	}
}
