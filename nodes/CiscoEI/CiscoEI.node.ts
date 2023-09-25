import { INodeType, INodeTypeDescription } from 'n8n-workflow';
// import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class CiscoEI implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Cisco EI',
		name: 'CiscoEI',
		icon: 'file:httpbin.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with HttpBin API',
		defaults: {
			name: 'CiscoEI',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [ ],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},
		],
	};
}
