-- User Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Teacher Table
CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    phone VARCHAR(15),
    address VARCHAR(255),
    subject_specialization VARCHAR(100),
    experience_years INTEGER
);
-- New Student Table Structure for EduTrack
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    dob DATE NOT NULL,
    religion VARCHAR(20) NOT NULL,
    category VARCHAR(20) NOT NULL,
    caste VARCHAR(50),
    aadhaar VARCHAR(16),
    github_id VARCHAR(100),
    phone VARCHAR(15) NOT NULL,
    secondary_email VARCHAR(100),
    address TEXT NOT NULL,  
    pincode VARCHAR(10),
    city VARCHAR(50),
    district VARCHAR(50),
    state VARCHAR(50),
    father_name VARCHAR(100),
    mother_name VARCHAR(100),
    parents_mobile VARCHAR(15),
    sslc_marks DECIMAL(5,2),
    registration_number VARCHAR(20),
    admission_year INT,
    department VARCHAR(50),
    semester INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add unique constraint for Aadhaar and registration_number if needed
-- ALTER TABLE student ADD CONSTRAINT unique_aadhaar UNIQUE (aadhaar);
-- ALTER TABLE student ADD CONSTRAINT unique_registration_number UNIQUE (registration_number);
