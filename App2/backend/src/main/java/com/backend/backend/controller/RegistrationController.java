package com.backend.backend.controller;

import com.backend.backend.model.Student;
import com.backend.backend.model.Teacher;
import com.backend.backend.model.User;
import com.backend.backend.service.StudentService;
import com.backend.backend.service.TeacherService;
import com.backend.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = "http://localhost:5173")
public class RegistrationController {
    @Autowired
    private UserService userService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String password = payload.get("password");
        String role = payload.get("role");
        if (userService.emailExists(email)) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        User user = userService.registerUser(email, password, role);
        return ResponseEntity.ok(Map.of("userId", user.getId()));
    }

    @PostMapping("/student")
    public ResponseEntity<?> registerStudent(@RequestBody Map<String, Object> payload) {
        Long userId = Long.valueOf(payload.get("userId").toString());
        // Map payload fields to Student entity
        Student student = new Student();
        User user = new User(); user.setId(userId); student.setUser(user);
        student.setFullName((String) payload.get("fullName"));
        student.setDob((String) payload.get("dob"));
        student.setGender((String) payload.get("gender"));
        student.setPhoneNumber((String) payload.get("phoneNumber"));
        student.setSecondaryEmail((String) payload.get("secondaryEmail"));
        student.setAadhaar((String) payload.get("aadhaar"));
        student.setAddress((String) payload.get("address"));
        student.setPincode((String) payload.get("pincode"));
        student.setCity((String) payload.get("city"));
        student.setDistrict((String) payload.get("district"));
        student.setState((String) payload.get("state"));
        student.setDepartment((String) payload.get("department"));
        student.setSemester((String) payload.get("semester"));
        student.setYear((String) payload.get("year"));
        student.setReligion((String) payload.get("religion"));
        student.setCategory((String) payload.get("category"));
        student.setCaste((String) payload.get("caste"));
        student.setSslcMarks((String) payload.get("sslcMarks"));
        student.setRegNumber((String) payload.get("regNumber"));
        student.setAdmissionYear((String) payload.get("admissionYear"));
        student.setSspId((String) payload.get("sspId"));
        student.setNspId((String) payload.get("nspId"));
        student.setApaarId((String) payload.get("apaarId"));
        student.setAdmissionType((String) payload.get("admissionType"));
        student.setEduBoard((String) payload.get("eduBoard"));
        student.setFatherName((String) payload.get("fatherName"));
        student.setMotherName((String) payload.get("motherName"));
        student.setParentMobile((String) payload.get("parentMobile"));
        studentService.registerStudent(student);
        return ResponseEntity.ok("Student registration successful");
    }

    @PostMapping("/teacher")
    public ResponseEntity<?> registerTeacher(@RequestBody Map<String, Object> payload) {
        Long userId = Long.valueOf(payload.get("userId").toString());
        Teacher teacher = new Teacher();
        User user = new User(); user.setId(userId); teacher.setUser(user);
        teacher.setFullName((String) payload.get("fullName"));
        teacher.setDob((String) payload.get("dob"));
        teacher.setGender((String) payload.get("gender"));
        teacher.setPhoneNumber((String) payload.get("phoneNumber"));
        teacher.setDepartment((String) payload.get("department"));
        teacher.setQualification((String) payload.get("qualification"));
        if (payload.get("experience") != null) {
            try {
                teacher.setExperienceYears(Integer.valueOf(payload.get("experience").toString()));
            } catch (Exception e) {
                teacher.setExperienceYears(0);
            }
        }
        // Add more fields as needed
        teacherService.registerTeacher(teacher);
        return ResponseEntity.ok("Teacher registration successful");
    }

    @GetMapping("/check-email")
    public ResponseEntity<?> checkEmailExists(@RequestParam String email) {
        boolean exists = userService.emailExists(email);
        return ResponseEntity.ok(Map.of("exists", exists));
    }
}
