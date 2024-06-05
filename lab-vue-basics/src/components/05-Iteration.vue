
 <template>
    <div class="comps">
        <div :style="{ background: activeColor }"> 
            <h1>Hello Class</h1>
            <p>This is bonus Iteration</p>
            <button @click="changeColor">
                <span>Change Color</span>
            </button>
        </div>      
    </div>
</template>


<script setup>
import { ref } from 'vue';
const activeColor = ref('blue')
const changeColor = () => {
    activeColor.value = activeColor.value === 'blue' ? 'red' : 'blue';
    };
</script>

