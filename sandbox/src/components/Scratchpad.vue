<template>
    <BaseLayout>
      <template v-slot:sidebar>
        Aside 
      </template>
      <template #main>
        <UserCard :user="refinedUserData" @change-name="changeName"/>
      </template>
      <template v-slot:footer>
        <BaseCounter />
      </template>
    </BaseLayout>
      <BaseButton> 
        Star - Hello
      </BaseButton>
      <BaseButton />
      <BaseButton left/>
      <BaseButton>{{ userData.name }}</BaseButton>
      <hr />
      <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
      <p v-else>Odd: {{ message }}</p>
      <ul v-for="(item, index) in listOfNumbers" :key="`item-${index}`">
        <li>
          {{ item.id }}
          <ul>
            <li v-for="(number, index) in item.list" :key="`number-${index}`">{{ number }}</li>
          </ul>
        </li>
      </ul>
  </template>
  
  <script>
  import BaseLayout from "./components/BaseLayout.vue";
  import BaseButton from "./components/BaseButton.vue";
  import BaseCounter from "./components/BaseCounter.vue"
  import UserCard from "./components/UserCard.vue";
  
  export default {
    components: {
      BaseCounter,
      UserCard,
      BaseButton,
      BaseLayout 
    },
    data() {
            return {
              message: 'Hello it works',
              listOfNumbers: [
                {
                  name: 1,
                  id: '6a887cd2-f0bf-4321-b192-92016f82a883',
                  list: [1, 2, 3]
                },
                {
                  name: 2,
                  id: '8d14d90b-2d47-473e-8293-d5c324111d0d',
                  list: [1, 2, 3]
                },
                {
                  name: 3,
                  id: 'cd806d65-2309-4625-9104-dcd636cd79b5',
                  list: [1, 2, 3]
                },
                {
                  name: 4,
                  id: '00c939cd-fbf4-46d0-8e61-0bc2ce8a5332',
                  list: [1, 2, 3]
                },
                {
                  name: 5,
                  id: '295a8170-59c1-4462-9de1-3c9cd41cedab',
                  list: [1, 2, 3]
                }
              ],
              userData: {
                name: 'Ben',
                preferredFramework: 'Vue',
                favoriteFood: 'sushi'
              }
            }
          },
    computed: {
      refinedUserData() {
        return {
          name: this.userData.name,
          food: this.userData.favoriteFood
        }
      }
    },
    methods: {
      changeName() {
        this.userData.name = 'Charlie'
      }
    }
  }
  </script>
  
  