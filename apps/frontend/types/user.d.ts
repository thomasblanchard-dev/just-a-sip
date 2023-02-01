const UserRoles = ['USER', 'ADMIN', 'SUPERADMIN'] as const;

export type UserRoles = (typeof UserRoles)[number];
