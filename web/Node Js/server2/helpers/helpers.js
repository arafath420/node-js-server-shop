import fs from "fs";

/**
 * create rendom id
 */
import crypto from "crypto";

export const generateRandomId = (length = 10) => {
  // Generate a random buffer of specified length
  const buffer = crypto.randomBytes(length);

  // Convert the buffer to a hex string
  const randomId = buffer.toString("hex");

  return randomId;
};

/**
 * Generate Slug
 */
export const generateSlug = (name) => {
  // Convert to lowercase and replace spaces with dashes
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  // Remove special characters
  const cleanedSlug = slug.replace(/[^\w\-]+/g, "");

  return cleanedSlug;
};

/**
 * Get Data From Database
 */
export const getDataFromDb = (dbname) => {
  return JSON.parse(fs.readFileSync(`db/${dbname}`).toString());
};

/**
 * Set Data in Database
 */
export const setDataInDb = (dbname, dataname) => {
  return fs.writeFileSync(`db/${dbname}`, JSON.stringify(dataname));
};
