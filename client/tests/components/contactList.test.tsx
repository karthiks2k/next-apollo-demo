import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import ContactList from "../../components/contactList";
import { ApolloProvider } from '@apollo/client';
import mockClient from '../mock/mockClient';

describe("ContactList", () => {
	it("should be defined", () => {
		const contactList = render(<ApolloProvider client={mockClient.client}><ContactList /></ApolloProvider>);
		expect(contactList).toBeDefined();
	});

	it("should match the snapshot", () => {
		const contactList = render(<ApolloProvider client={mockClient.client}><ContactList /></ApolloProvider>);
		expect(contactList).toMatchSnapshot();
	});

	it("should render contacts", () => {
		const { getByTestId } = render(<ApolloProvider client={mockClient.client}><ContactList /></ApolloProvider>);
		const { getContacts } = mockClient.mockData;
		getContacts.map(contact => {
			const elementId = `contactList__contact_${contact.id}`;
			expect(elementId).toBeDefined();
		});
	});
});