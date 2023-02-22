import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useStudentStore = defineStore('student', () => {
    const students = ref([]);
    const filteredStudent = ref('');

    // function findStudent(id){
    //     const findStd = students.value.findIndex(s => s.id === id)
    //     console.log(findStd);
    // }

    // const searchStudents =  computed(() => (search) => {
    //     return students.value.filter((std) => std.ad.toLowerCase().includes(search)
    //         || std.soyad.toLowerCase().includes(search)
    //         || std.tel.toLowerCase().includes(search)
    //         || std.numara.toLowerCase().includes(search)
    //         || std.ogr.toLowerCase().includes(search));
    // });

    function searchStudents(search){
        filteredStudent.value = students.value.filter((std) => {
            return std.ad.toLowerCase().includes(search)
                || std.soyad.toLowerCase().includes(search)
                || std.tel.toString().toLowerCase().includes(search)
                || std.numara.toString().toLowerCase().includes(search)
                || std.sinif.toLowerCase().includes(search)
                || std.ogr.toLowerCase().includes(search);
        });
    }


    
    function getStudents() {
        if(localStorage.getItem('students')){
            students.value = JSON.parse(localStorage.getItem('students'));
        }
    }

    function getStudentById(id) {
        return students.value.find((a) => a.id === id);;
    }
        
    function addStudent(item) {
        students.value.push(item);
        localStorage.setItem('students', JSON.stringify(students.value));
    }

    function updateStudent(student){
        const findStd = students.value.findIndex((a) => a.id === student.id);
        students.value.splice(findStd, 1 , student);
        localStorage.setItem('students', JSON.stringify(students.value));
    }

    function deleteStudent(id) {
        const findIndex = students.value.findIndex((j)=> j.id === id);
        students.value.splice(findIndex, 1);
        localStorage.setItem('students', JSON.stringify(students.value));
     }

    return { students, filteredStudent, getStudents, getStudentById, addStudent, deleteStudent, updateStudent, searchStudents}
});
