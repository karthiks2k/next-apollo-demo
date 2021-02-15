import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import IndexPage from "../../pages/index";
import { ApolloProvider } from '@apollo/client';
import mockClient from '../mock/mockClient';

describe("IndexPage", () => {
	it("should be defined", () => {
		const indexPage = render(<ApolloProvider client={mockClient.client}><IndexPage /></ApolloProvider>);
		expect(indexPage).toBeDefined();
	});

	it("should render the heading", () => {
		const { getByText } = render(<ApolloProvider client={mockClient.client}><IndexPage /></ApolloProvider>);
		const heading = getByText(/My Contacts/i);
		expect(heading).toBeInTheDocument();
	});
});