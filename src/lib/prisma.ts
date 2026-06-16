import { PrismaClient } from '../generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Ambil URL dari .env
const connectionString = `${process.env.DIRECT_URL}`;

// Buat connection pool menggunakan pg
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Singleton pattern khusus Next.js agar tidak kebanyakan koneksi saat Hot-Reload
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;