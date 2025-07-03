import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('⚠️  Please define the MONGODB_URI env variable in .env.local');
}

// --- Connection caching for hot‑reload & serverless ---
let cached = global.mongoose;          // reuse global variable in dev

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  // Reuse existing connection
  if (cached.conn) return cached.conn;

  // Create a new connection if none exists
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
