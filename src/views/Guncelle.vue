<template>
    <div class="w-full h-full flex flex-col items-center jsutify center gap-2">
      <h1 class="text-2xl">Öğrenci Güncelle</h1>
      <form class="w-2/3 md:w-1/3 rounded-md p-3 border shadow-lg">
        <div class="mb-6">
          <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id</label>
          <input type="text" value="1" id="id" class="bg-gray-300 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" readonly>
        </div>
        <div class="mb-6">
          <label for="ad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ad</label>
          <input type="text" id="ad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: Ecem" required>
        </div>
        <div class="mb-6">
          <label for="soyad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyad</label>
          <input type="text" id="soyad" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: Aydın" required>
        </div>
        <div class="mb-6">
          <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aile Telefonu</label>
          <input type="tel" pattern="[0-9]{4}[0-9]{3}[0-9]{4}" maxlength="11" id="tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: 0507820xxxx" required>
      </div>
      <div class="mb-6">
        <label for="numarasi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ogrenci Numarası</label>
        <input type="number" id="numarasi" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: 326" required>
      </div>
      <div class="mb-6">
        <label for="sinif" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sınıfı</label>
        <input type="text" id="sinif" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: 11/C" required>
      </div>
      <div class="mb-6">
        <label for="ogr" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sınıf Öğretmeni</label>
        <input type="text" id="ogr" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400" placeholder="Örn: Ahmet Yılmaz" required>
      </div>
      <div class="flex gap-2 justify-end">
        <router-link class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" :to="{ name : 'ListeSayfasi'}" >İptal</router-link>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Güncelle</button>
      </div>
    </form>
  </div>
</template>
  