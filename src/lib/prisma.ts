import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// WAJIB pakai DATABASE_URL (Pooler) untuk aplikasi Next.js
const connectionString = `${process.env.DATABASE_URL}`;

// Buat connection pool menggunakan pg
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Singleton pattern khusus Next.js agar tidak kebanyakan koneksi saat Hot-Reload
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;