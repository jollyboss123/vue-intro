<template>
    <div>
        <BenderStatistics :characters="characters"/>
        <h2>Characters</h2>
        <p v-if="characters.length === 0">There are no characters</p>
        <ul v-else-if="characters.length % 2 ===0">
            <li v-for="(character, index) in characters" :key="`even-character-${index}`">
                <CharacterCard :character="character" @favorite="addFavoriteCharacter"/>
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
</template>

<script>
import BenderStatistics from './components/BenderStatistics.vue'
import CharacterCard from './components/CharacterCard.vue'

export default {
    components: {
        BenderStatistics,
        CharacterCard
    },
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
        methods: {
            addNewCharacter() {
                this.characters.push(this.newCharacter)
                this.newCharacter = {name:''}
            },
            addFavoriteCharacter(payload) {
                this.favoriteList.push(payload)
            }
        }
}
</script>
