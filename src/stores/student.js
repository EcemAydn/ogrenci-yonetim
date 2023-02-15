import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useStudentStore = defineStore('student', () => {
    const students = ref([]);

    if(localStorage.getItem('students')){
        students.value = JSON.parse(localStorage.getItem('students'));
    }

    // const filteredStudents =  computed(() => {
        //     return students.value.filter((std) => std.name === 'ecem');
        // });
        
    function addStudent(item) {
        students.value.push(item);
        localStorage.setItem('students', JSON.stringify(students.value))      

    }
        
        // function deleteStudent(id) {
            //     const findIndex = students.value.findIndex((j)=> j.id === id);
            //     students.value.splice(findIndex, 1);
            // }
    return {students, addStudent}
    // return { students, addStudent, deleteStudent, filteredStudents };
});
