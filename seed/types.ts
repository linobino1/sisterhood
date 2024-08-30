export type Seed<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>
