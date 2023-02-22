<script setup> 
import { ref } from 'vue';
import { useStudentStore } from '@/stores/student';
import { useRoute, useRouter } from 'vue-router';

const studentStore = useStudentStore();
const route = useRoute();
const router = useRouter();
const student = ref({
  id: '',
  ad: '',
  soyad: '',
  tel: '',
  numara: '',
  sinif: '',
  ogr: ''
});

if(route.params.id) {
  student.value = studentStore.getStudentById(route.params.id);
} else {
  router.push({ name: 'ListeSayfasi' })
}

function updateButton() {
  studentStore.updateStudent(student.value)
}

  // function updateButton(){
  //   studentStore.filteredStudents();
  // }
    // function updateButton(a){
    //   studentStore.findStudent(a)
    // }
      // const bla = ref("asdfghjk");
      

</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-2">
      <h1 class="text-2xl">Öğrenci Güncelle</h1>
      <form @submit.prevent="updateButton" class="w-2/3 md:w-1/3 rounded-md p-3 border shadow-lg">
        <div class="mb-6">
          <label for="ad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ad</label>
          <input 
            v-model="student.ad"
            type="text" 
            id="ad" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" 
            required>
        </div>
        <div class="mb-6">
          <label for="soyad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyad</label>
          <input 
            v-model="student.soyad"
            type="text" 
            id="soyad" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" 
            required>
        </div>
        <div class="mb-6">
          <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aile Telefonu</label>
          <input 
            v-model="student.tel"
            type="tel" 
            pattern="[0-9]{4}[0-9]{3}[0-9]{4}" 
            maxlength="11" 
            id="tel" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" 
            required>
      </div>
      <div class="mb-6">
        <label for="numarasi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Öğrenci Numarası</label>
        <input 
          v-model="student.numara"
          type="number" 
          id="numarasi" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" 
          required>
      </div>
      <div class="mb-6">
        <label for="sinif" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sınıfı</label>
        <input 
          v-model="student.sinif"
          type="text" 
          id="sinif" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" 
          required>
      </div>
      <div class="mb-6">
        <label for="ogr" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sınıf Öğretmeni</label>
        <input 
          v-model="student.ogr"
          type="text" 
          id="ogr" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" 
          required>
      </div>
      <div class="flex gap-2 justify-end">
        <router-link tag="button" type="reset" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" :to="{ name : 'ListeSayfasi'}" >İptal</router-link>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Güncelle</button>
      </div>
    </form>
  </div>
</template>
  