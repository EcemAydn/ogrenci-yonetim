<script setup>
import { useStudentStore } from './stores/student';

const studentStore = useStudentStore();

// studentStore.addStudent({ id: 0, name: 'ecem'});
// studentStore.addStudent({ id: 1, name: 'memed'});
// studentStore.addStudent({ id: 2, name: 'ecem'});
// studentStore.addStudent({ id: 3, name: 'ecem'});

// console.log(JSON.stringify(studentStore.students, null, 2));
// console.log(JSON.stringify(studentStore.filteredStudents, null, 2));

studentStore.getStudents();
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-full flex flex-col items-center">
      <RouterView />
    </div>
  </div>
</template>