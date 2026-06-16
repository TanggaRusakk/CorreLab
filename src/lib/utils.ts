import crypto from 'crypto';

/**
 * Generates an MD5 hash of the given file buffer.
 * Used for detecting duplicate dataset uploads.
 *
 * @param buffer - The file buffer to hash.
 * @returns The hex representation of the MD5 hash.
 */
export function generateFileHash(buffer: Buffer): string {
  const hash = crypto.createHash('md5');
  hash.update(buffer);
  return hash.digest('hex');
}
