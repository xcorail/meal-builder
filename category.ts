export const CATEGORIES = ['vegetable', 'protein'] as const
export type category = typeof CATEGORIES[number]

export default category