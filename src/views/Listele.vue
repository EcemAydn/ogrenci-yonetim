<script setup>
import { ref } from 'vue';
import { useStudentStore } from '@/stores/student';

const studentStore = useStudentStore();
let timeout = null;
const search = ref('');

function deleteButton(e) {
  studentStore.deleteStudent(e);
}

function searchStudents() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    studentStore.searchStudents(search.value.toLowerCase())
  }, 500)
}
</script>

<template>
  <div class="w-full h-full flex flex-col items-center">
    <h1 lang="tr-TR" class="text-2xl">Öğrenci Listesi</h1>
    <div class="border p-4 rounded-md m-8 w-full overflow-hidden h-full shadow-lg">
      <div class="flex justify-between">
        <input type="search" @keyup="searchStudents" v-model="search" class="w-1/2 border rounded-md outline-none p-1" />
        <router-link class="bg-green-500 p-1 pl-4 pr-4 rounded-md text-white shadow-inner hover:shadow-none hover:bg-green-600 hover:transition hover:duration-500" :to="{ name: 'OlusturSayfasi' }">
          + Yeni kayıt oluştur
        </router-link>
      </div>

      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 h-full px-6 pt-4 pb-6">
        <div class="h-full w-full overflow-auto">
          <table class="min-w-full">
            <thead class="border-b bg-gray-800 sticky top-0 left-0 z-10">
              <tr>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Ad
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Soyad
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Aile Telefonu
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Öğrenci Numarası
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Sınıfı
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Sınıf Öğretmeni
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Düzenle
                </th>
                <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                  Sil
                </th>
              </tr>
            </thead>

            <tbody class="">
              <tr
                v-for="student in studentStore.searchStudents(search)" 
                :key="student.id"
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 even:bg-gray-50 last:border-b-0"
              >
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ student.ad }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ student.soyad }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ student.tel }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ student.numara }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ student.sinif }}               
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ student.ogr }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <router-link
                    :to="{ name:'GuncellemeSayfasi', params:{ id: student.id} }"
                    class="bg-blue-500 text-white p-1 pl-4 pr-4 shadow-inner rounded-md hover:shadow-lg" 
                    >Düzenle</router-link>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button class="bg-red-500 text-white p-1 pl-4 pr-4 shadow-inner rounded-md hover:shadow-lg" @click="deleteButton(student.id)">Sil</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

