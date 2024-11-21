

import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const password = data.get('password');
		return { success: true };
	},
} satisfies Actions;