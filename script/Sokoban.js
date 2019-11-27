import Grid from "./Grid.js"
import player from './player.js'

export default{
    components:{
        Grid,
        player
    },
    template:`
    <div class="sokoban" id="sokobanGrid">
    <section class="difficulty">
    <label for="mapSelect" id="text">Difficulty: </label>
    <select id="mapSelect" v-model="choice">
    <option value="Easy">Easy</option>
    <option value="Normal">Normal</option>
    <option value="Hard">Hard</option>
    <option value="Extreme">Extreme</option>
    </select>
    <button type="button" id="difficultySubmit" @click="diffTest">Load difficulty</button>
    </section>
    <div id="game">
        <Grid v-if="displayGrid"></Grid>
        </div>
    </div>
    `,
    data(){
        return{
            choice:' ',
            displayGrid: false
        }
    },
    methods:{
        diffTest(){
            this.displayGrid= true
        }
    }
    }