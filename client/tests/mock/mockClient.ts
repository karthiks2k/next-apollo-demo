import { createMockClient } from 'mock-apollo-client';
import { GET_CONTACTS } from "../../graphql/queries";

const data = {
	getContacts:
		[{ id: 1, name: 'Rufus', doorNo: '122', address: 'test road', city: 'london', postCode: '2312122', phone: '121232323', email: 'test"tst.co' }]
};
const mockClient = createMockClient();
mockClient.setRequestHandler(
	GET_CONTACTS,
	() => Promise.resolve(
		{
			data
		}
	)
);

export default { client: mockClient, mockData: data };