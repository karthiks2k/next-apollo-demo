import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Contact from "../../components/contact";
import mockClient from '../mock/mockClient';

describe("Contact", () => {
    const { getContacts } = mockClient.mockData;
	it("should be defined", () => {
		const contactList = render(<Contact contact={getContacts[0]} />);
		expect(contactList).toBeDefined();
	});

	it("should match the snapshot", () => {
		const contactList = render(<Contact contact={getContacts[0]} />);
		expect(contactList).toMatchSnapshot();
	});

	it("should render contacts", () => {
		const { getByText } = render(<Contact contact={getContacts[0]} />);
        const name = getByText(getContacts[0].name);
		expect(name).toBeDefined();

        const address = getByText(`${getContacts[0].doorNo} ${getContacts[0].address}`);
		expect(address).toBeDefined();

        const city = getByText(getContacts[0].city);
		expect(city).toBeDefined();

        const postCode = getByText(getContacts[0].postCode);
		expect(postCode).toBeDefined();

        const email = getByText(getContacts[0].email);
		expect(email).toBeDefined();

        const phone = getByText(getContacts[0].phone);
		expect(phone).toBeDefined();
	});
});