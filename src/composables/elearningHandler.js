import {ref} from 'vue';

function elearningHandler() {
    const baseUrl = "https://akbarhps.github.io";
    const path = "/elearning/elearning.json";
    const endpoint = new URL(path, baseUrl);

    const elearningList = ref([]);

    async function getElearning() {
        try {
            const res = await fetch(endpoint);
            const data = await res.json();
            elearningList.value = data;
        } catch (err) {
            console.log(err.message);
        }
    }

    return {getElearning, elearningList};
}

export default elearningHandler;