<template>
  <div class="w-full h-full flex flex-col items-center justify center gap-2">
    <h1 class="text-2xl">Öğrenci Kayıt</h1>
    <form @submit.prevent="onSave()" class="w-3/5 md:w-2/3 lg:w-1/3 rounded-md p-3 border shadow-lg">
      <div class="mb-6">
        <label for="ad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ad</label>
        <input 
          v-model="ad"
          type="text" 
          id="ad" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: Ecem" required>
      </div>
      <div class="mb-6">
        <label for="soyad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyad</label>
        <input 
          v-model="soyad"
          type="text" 
          id="soyad" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: Aydın" required>
      </div>
      <div class="mb-6">
        <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aile Telefonu</label>
        <input 
          v-model="tel"
          type="tel" 
          pattern="[0-9]{4}[0-9]{3}[0-9]{4}" 
          maxlength="11" 
          id="tel" 
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: 0507820xxxx" required>
    </div>
    <div class="mb-6">
      <label for="numara" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ogrenci Numarası</label>
      <input 
        v-model="numara"
        type="number" 
        id="numara" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: 326" required>
    </div>
    <div class="mb-6">
      <label for="sinif" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sınıfı</label>
      <input 
        v-model="sinif"
        type="text" 
        id="sinif" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: 11/C" required>
    </div>
    <div class="mb-6">
      <label for="ogr" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sınıf Öğretmeni</label>
      <input
        v-model="ogr"
        type="text" 
        id="ogr" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: Ahmet Yılmaz" required>
    </div>
    <div class="flex gap-2 justify-end">
      <router-link class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" :to="{ name : 'ListeSayfasi'}" >İptal</router-link>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Kaydet</button>
    </div>
  </form>
</div>
</template>

<script setup>
import { useStudentStore } from '@/stores/student';
const studentStore = useStudentStore();

  function onSave(){
    studentStore.addStudent({ ad: ad.value, soyad: soyad.value, tel: tel.value, numara: numara.value, sinif: sinif.value, ogr: ogr.value});
  }

</script>
