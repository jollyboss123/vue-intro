<template>
    <div>
        <h2>Statistics</h2>
        <ul>
            <li v-for="(stat, key) in benderStatistics" :key="`bender-${stat}-${key}`">
                {{key}}: {{stat}}
            </li>
        </ul>
        <h2>Characters</h2>
        <p v-if="characters.length === 0">There are no characters</p>
        <ul v-else-if="characters.length % 2 ===0">
            <li v-for="(character, index) in characters" :key="`even-character-${index}`">
                <p>{{character.name}}</p>
                <button @click="favoriteCharacter(character)">Favorite</button>
            </li>
        </ul>
        <p v-else>There are odd number of characters</p>
        <h2>Favorite Characters</h2>
        <ul v-if="favoriteList.length > 0">
            <li v-for="(character, index) in favoriteList" :key="`favorite-${index}`">
                {{character.name}}
            </li>
        </ul>
        <p v-else>No favorite characters</p>
        <h2>Add new character</h2>
        <label for="character-name">Name</label>
        <pre>{{newCharacter}}</pre>
        <input 
        type="text" 
        v-model="newCharacter.name" 
        @keyup.enter="addNewCharacter"
        >
        <p>
            <span v-for="(character, index) in characters" :key="`character-${index}`">
                {{character.name}}{{index === characters.length - 1 ? '' : ', '}}
            </span>
        </p>
    </div>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
export default {
  data: () => ({
            newCharacter: {
                name: '',
                element: []
            },
            characters: [
            {
              name: 'Aang',
              element: ['Air', 'Water', 'Fire', 'Earth']
            },
            {
              name: 'Zuko',
              element: ['Fire']
            },
            {
              name: 'Toph',
              element: ['Earth']
            },
            {
              name: 'Katara',
              element: ['Water']
            }
          ],
          favoriteList: []
        }),
        computed: {
            benderStatistics() {
                const elements = ['Air', 'Water', 'Fire', 'Earth']
                const statistics = {
                    'Air': 0,
                    'Water': 0,
                    'Fire': 0,
                    'Earth': 0
                }

                this.characters.forEach(character => {
                    elements.forEach(element => {
                        if (character.element.indexOf(element) > -1) {
                            statistics[element] += 1
                        }
                    })
                })

                return statistics 
            }
        },
        methods: {
            addNewCharacter() {
                this.characters.push(this.newCharacter)
                this.newCharacter = {name:''}
            },
            favoriteCharacter(character) {
                this.favoriteList.push(character)
            }
        }
}
</script>
