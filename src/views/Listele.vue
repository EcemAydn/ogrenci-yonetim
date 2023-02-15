<template>
  <div class="w-full h-full flex flex-col items-center">
    <h1 class="text-2xl">Öğrenci Listesi</h1>
    <div class="border p-4 rounded-md m-8 w-fit overflow-hidden h-full shadow-lg">
      <div class="flex justify-end">
        <router-link class="bg-green-500 p-1 pl-4 pr-4 rounded-md text-white shadow-inner hover:shadow-none hover:bg-green-600 hover:transition hover:duration-500" :to="{ name: 'OlusturSayfasi' }">
          + Yeni kayıt oluştur
        </router-link>
      </div>
      <div class="flex flex-col  h-full">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 h-full">
          <div class="py-2 inline-block min-w-full relative sm:px-6 lg:px-8 h-full">
            <div class="h-full overflow-y-auto">
              <table class="min-w-full h-full">
                <thead class="border-b bg-gray-800 sticky top-0 left-0 z-10">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      #
                    </th>
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
                    v-for="ogrenciler in ogrListesi" 
                    :key="ogrenciler.id"
                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {{ ogrenciler.id }}</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ogrenciler.ad
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ogrenciler.soyad
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ogrenciler.tel
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ogrenciler.numara
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ogrenciler.sinif                
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      ogrenciler.ogr
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <router-link
                        :to="{ name:'GuncellemeSayfasi' }">
                        class="bg-blue-500 text-white p-1 pl-4 pr-4 shadow-inner rounded-md hover:shadow-lg" 
                        Düzenle</router-link>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                       <button class="bg-red-500 text-white p-1 pl-4 pr-4 shadow-inner rounded-md hover:shadow-lg">Sil</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ogrListesi : [],
    }
  },
  created(){
    
  }
}
</script>

<!-- import { useStudentStore } from '@/stores/student';
const studentStore = useStudentStore();
JSON.stringify(studentStore.students, null, 2) -->