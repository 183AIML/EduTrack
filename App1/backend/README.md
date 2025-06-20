# EduTrack Backend (Spring Boot)

## Structure

- `config/` — Security, CORS, and other configuration classes
- `controller/` — REST API controllers
- `dto/` — Data Transfer Objects for API requests/responses
- `exception/` — Custom exception classes and handlers
- `filter/` — Security filters (only JwtAuthFilter should be present)
- `model/` — JPA entities (User, Student, Teacher, etc.)
- `repository/` — Spring Data JPA repositories
- `service/` — Business logic and JWT handling
- `utils/` — Utility classes (should be minimal)

## Getting Started

1. Configure your database in `src/main/resources/application.properties`.
2. Set your JWT secret in `application.properties` as `jwt.secret=your_super_secret_key`.
3. Build and run with `./mvnw spring-boot:run` (Linux/macOS) or `mvnw.cmd spring-boot:run` (Windows).

## Notes

- All JWT logic is handled by `JwtService`.
- Exception handling is in `exception/`.
- DTOs are used for all API input/output.
- Remove sensitive info from `application.properties` before sharing.
