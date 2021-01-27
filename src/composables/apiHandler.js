import {ref} from "vue";

function apiHandler() {
    const assignmentList = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    function getLastWeekInSeconds() {
        return Math.floor(Date.now() / 1000) - 604800;
    }

    function createApiURL(tokenCred) {
        // timesortfrom is currently hardcode because i have no
        //  assignment on my account last 7 days
        const params = {
            "wstoken": tokenCred.token,
            "moodlewsrestformat": "json",
            "timesortfrom": 1601521200, //TODO: Change this to function call
            "wsfunction": "core_calendar_get_action_events_by_timesort"
        }
        const url = new URL("/webservice/rest/server.php", tokenCred.endpoint);
        url.search = new URLSearchParams(params).toString();
        return url;
    }

    async function getAssignment(tokenCred) {
        const url = createApiURL(tokenCred);
        isLoading.value = true;

        try {
            const res = await fetch(url, {method: "POST"});
            const data = await res.json();
            assignmentList.value = data.events;
        } catch (err) {
            isLoading.value = false;
            error.value = err.message;
        }
    }

    return {getAssignment, assignmentList, isLoading, error};
}

export default apiHandler;