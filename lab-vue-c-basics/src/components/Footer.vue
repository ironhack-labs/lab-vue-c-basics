<script setup>
import { computed, ref } from 'vue';
const name = ref({
    firstName: 'Janis',
    lastName: 'Zisler',
    fullName: computed(() => `${name.value.firstName} ${name.value.lastName}`)
});
const showFooter = ref(true);
//const fullName = computed(() => `${name.value.firstName} ${name.value.lastName}`);

</script>

    <template>
    <footer class="footer" @click="showFooter = !showFooter">
        <div v-show="showFooter">
            <p>&copy;{{2000 +26}} {{name.fullName}}. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}
</style>